import { NextResponse } from 'next/server';
import type { PlaceData, CafeApiResponse } from '@/lib/types';

// In-memory cache with 24-hour TTL
let cachedResponse: { data: CafeApiResponse; timestamp: number } | null = null;
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in ms

const FIELDS = [
  'displayName',
  'formattedAddress',
  'nationalPhoneNumber',
  'websiteUri',
  'regularOpeningHours',
  'rating',
  'userRatingCount',
  'reviews',
  'photos',
  'location',
  'googleMapsUri',
].join(',');

async function fetchPhotoUrl(photoName: string, apiKey: string, maxWidth = 1200): Promise<string> {
  // Google Places API (New) photo endpoint
  const url = `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=${maxWidth}&skipHttpRedirect=true&key=${apiKey}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return '';
    const data = await res.json();
    return data.photoUri || '';
  } catch {
    return '';
  }
}

async function fetchPlaceData(): Promise<CafeApiResponse> {
  const placeId = process.env.PLACE_ID;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!placeId || !apiKey) {
    return {
      data: null,
      photoUrls: [],
      error: 'Missing PLACE_ID or GOOGLE_MAPS_API_KEY in environment variables.',
    };
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}`;
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': FIELDS,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Google Places API error:', res.status, errorText);
      return {
        data: null,
        photoUrls: [],
        error: `Google Places API returned ${res.status}. Please check your PLACE_ID and API key.`,
      };
    }

    const placeData: PlaceData = await res.json();

    // Fetch photo URLs for up to 6 photos
    const photoUrls: string[] = [];
    if (placeData.photos && placeData.photos.length > 0) {
      const photoPromises = placeData.photos
        .slice(0, 6)
        .map((photo, index) =>
          fetchPhotoUrl(photo.name, apiKey, index === 0 ? 1600 : 800)
        );
      const urls = await Promise.all(photoPromises);
      photoUrls.push(...urls.filter(Boolean));
    }

    return {
      data: placeData,
      photoUrls,
      cachedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.error('Failed to fetch place data:', err);
    return {
      data: null,
      photoUrls: [],
      error: 'Failed to connect to Google Places API. Please try again later.',
    };
  }
}

export async function GET() {
  // Check cache
  if (cachedResponse && Date.now() - cachedResponse.timestamp < CACHE_TTL) {
    return NextResponse.json(cachedResponse.data, {
      headers: {
        'X-Cache': 'HIT',
        'X-Cached-At': cachedResponse.data.cachedAt || '',
      },
    });
  }

  const result = await fetchPlaceData();

  // Only cache successful responses
  if (result.data) {
    cachedResponse = { data: result, timestamp: Date.now() };
  }

  return NextResponse.json(result, {
    headers: {
      'X-Cache': 'MISS',
    },
    status: result.error ? 502 : 200,
  });
}

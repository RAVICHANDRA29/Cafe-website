// Type definitions for Google Places API (New) response data

export interface PlacePhoto {
  name: string; // e.g. "places/PLACE_ID/photos/PHOTO_REF"
  widthPx: number;
  heightPx: number;
  authorAttributions: {
    displayName: string;
    uri: string;
    photoUri: string;
  }[];
}

export interface PlaceReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  originalText?: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  publishTime: string;
}

export interface RegularOpeningHours {
  openNow: boolean;
  periods: {
    open: { day: number; hour: number; minute: number };
    close: { day: number; hour: number; minute: number };
  }[];
  weekdayDescriptions: string[];
}

export interface PlaceLocation {
  latitude: number;
  longitude: number;
}

export interface PlaceData {
  displayName: {
    text: string;
    languageCode: string;
  };
  formattedAddress: string;
  nationalPhoneNumber?: string;
  websiteUri?: string;
  regularOpeningHours?: RegularOpeningHours;
  rating?: number;
  userRatingCount?: number;
  reviews?: PlaceReview[];
  photos?: PlacePhoto[];
  location?: PlaceLocation;
  googleMapsUri?: string;
}

export interface CafeApiResponse {
  data: PlaceData | null;
  photoUrls: string[];
  error?: string;
  cachedAt?: string;
}

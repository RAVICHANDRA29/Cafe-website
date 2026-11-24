'use client';

import { useEffect, useState } from 'react';
import type { CafeApiResponse } from '@/lib/types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Hours from './components/Hours';
import Reviews from './components/Reviews';
import Visit from './components/Visit';
import Footer from './components/Footer';
import SkeletonLoader from './components/SkeletonLoader';
import ErrorMessage from './components/ErrorMessage';

export default function HomePage() {
  const [cafeData, setCafeData] = useState<CafeApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/place');
        const data: CafeApiResponse = await res.json();

        if (data.error) {
          setError(data.error);
        } else {
          setCafeData(data);
        }
      } catch {
        setError('Unable to connect to the server. Please check your internet connection and try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <SkeletonLoader />;
  if (error || !cafeData?.data) return <ErrorMessage message={error || 'No data available.'} />;

  const { data, photoUrls } = cafeData;
  const cafeName = data.displayName?.text || 'Café';

  return (
    <div className="min-h-screen bg-cream text-ink dark:bg-dark-bg dark:text-dark-text">
      <Navbar cafeName={cafeName} phoneNumber={data.nationalPhoneNumber} />

      <main>
        <Hero data={data} heroPhotoUrl={photoUrls[0]} />

        <Gallery
          photos={data.photos || []}
          photoUrls={photoUrls}
          cafeName={cafeName}
        />

        <Hours hours={data.regularOpeningHours} />

        <Reviews reviews={data.reviews} googleMapsUri={data.googleMapsUri} />

        <Visit data={data} />
      </main>

      <Footer data={data} />
    </div>
  );
}

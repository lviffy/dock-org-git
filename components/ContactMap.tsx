'use client';

import dynamic from 'next/dynamic';

// Leaflet accesses `window` at import time, so it must be loaded client-side only
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-brand-sand text-sm font-medium text-slate-500">
      Loading map…
    </div>
  ),
});

export default function ContactMap() {
  return (
    <div className="mt-6 h-72 overflow-hidden rounded-2xl border border-slate-200">
      <LeafletMap />
    </div>
  );
}

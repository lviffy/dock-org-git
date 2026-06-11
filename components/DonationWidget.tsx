'use client';

import { useState } from 'react';
import { HeartIcon } from '@/components/icons';
import { donationTiers } from '@/lib/data';

/** Interactive donation amount selector with tier highlights. */
export default function DonationWidget() {
  const [selected, setSelected] = useState<number>(donationTiers[1].amount);
  const [custom, setCustom] = useState('');

  const activeAmount = custom ? Number(custom) : selected;
  const activeTier = donationTiers.find((t) => t.amount === selected);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
      <h3 className="text-xl font-extrabold text-brand-navy">Choose your impact</h3>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4" role="radiogroup" aria-label="Donation amount">
        {donationTiers.map((tier) => {
          const active = !custom && selected === tier.amount;
          return (
            <button
              key={tier.amount}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => {
                setSelected(tier.amount);
                setCustom('');
              }}
              className={`rounded-xl border px-3 py-4 text-center transition-colors duration-200 ${
                active
                  ? 'border-brand-orange bg-brand-orange/5'
                  : 'border-slate-200 hover:border-brand-orange/50'
              }`}
            >
              <span className="block text-lg font-extrabold text-brand-navy">₹{tier.amount.toLocaleString('en-IN')}</span>
              <span className="mt-0.5 block text-[11px] font-bold uppercase tracking-wider text-brand-orange-dark">{tier.title}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        <label htmlFor="custom-donation" className="text-sm font-semibold text-brand-navy">
          Or enter a custom amount
        </label>
        <input
          id="custom-donation"
          type="number"
          min={100}
          placeholder="₹ Custom amount"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="input-field"
        />
      </div>

      {!custom && activeTier && (
        <p className="mt-5 rounded-xl bg-brand-sand px-4 py-3 text-sm text-slate-600">
          <strong className="text-brand-navy">Your ₹{activeTier.amount.toLocaleString('en-IN')}</strong>{' '}
          {activeTier.description.charAt(0).toLowerCase() + activeTier.description.slice(1)}
        </p>
      )}

      <button type="button" className="btn-primary mt-6 w-full">
        Donate ₹{(activeAmount || 0).toLocaleString('en-IN')} <HeartIcon className="text-base" />
      </button>
      <p className="mt-4 text-center text-xs text-slate-500">
        Secure payment · 80G tax exemption · 100% goes to programs
      </p>
    </div>
  );
}

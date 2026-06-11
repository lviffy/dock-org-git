import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import { donationTiers } from '@/lib/data';

export const metadata: Metadata = { title: 'Donate' };

export default function DonatePage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-site max-w-3xl">
          <p className="eyebrow bg-white/10 text-brand-orange-light">Donate</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Give hope. Give change.</h1>
          <p className="mt-5 text-lg text-white/80">
            100% of your donation goes directly to our programs. All donations are eligible for tax
            exemption under Section 80G.
          </p>
        </div>
      </section>

      <section className="bg-brand-sand py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Choose an Amount" title="Your impact, your way" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {donationTiers.map((tier) => (
              <div key={tier.amount} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 text-center transition-colors duration-300 hover:border-brand-orange/50">
                <p className="text-sm font-bold uppercase tracking-wide text-brand-orange-dark">{tier.title}</p>
                <p className="mt-2 text-3xl font-extrabold text-brand-navy">₹{tier.amount.toLocaleString('en-IN')}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{tier.description}</p>
                <button type="button" className="btn-primary mt-6 w-full">Donate ₹{tier.amount.toLocaleString('en-IN')}</button>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-xl font-extrabold text-brand-navy">Custom amount</h2>
            <form className="mt-4 flex gap-3" aria-label="Custom donation amount">
              <label htmlFor="custom-amount" className="sr-only">Donation amount in rupees</label>
              <input
                id="custom-amount"
                type="number"
                min={100}
                placeholder="Enter amount (₹)"
                className="input-field mt-0"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">Donate</button>
            </form>
            <p className="mt-4 text-xs text-slate-500">
              Note: This is a demo interface. Connect a payment gateway (Razorpay, Stripe, etc.) to accept real donations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

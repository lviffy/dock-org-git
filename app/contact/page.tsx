import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import ContactMap from '@/components/ContactMap';
import { ClockIcon, MailIcon, MapPinIcon, PaperPlaneIcon, PhoneIcon } from '@/components/icons';

export const metadata: Metadata = { title: 'Contact Us' };

const contactDetails = [
  {
    Icon: MapPinIcon,
    label: 'Address',
    value: 'Regus, Level 4, Kothari Centrum, Kondapur, Hyderabad 500084, India',
  },
  {
    Icon: PhoneIcon,
    label: 'Phone',
    value: '+91 12345 67890',
    href: 'tel:+911234567890',
  },
  {
    Icon: MailIcon,
    label: 'Email',
    value: 'contactus@dockconsulting.in',
    href: 'mailto:contactus@dockconsulting.in',
  },
  {
    Icon: ClockIcon,
    label: 'Working Hours',
    value: 'Mon to Sat, 9:30 AM to 6:00 PM IST',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-site max-w-3xl">
          <p className="eyebrow bg-white/10 text-brand-orange-light">Contact</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            We would love to hear from you
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            Questions about volunteering, partnerships or donations? Our team usually replies within one working day.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Reach Us" title="Get in touch" />
            <ul className="mt-10 space-y-4">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-xl text-brand-orange-dark">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">{label}</span>
                    {href ? (
                      <a href={href} className="mt-0.5 block font-semibold text-brand-navy transition-colors hover:text-brand-orange-dark">
                        {value}
                      </a>
                    ) : (
                      <span className="mt-0.5 block font-semibold text-brand-navy">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <ContactMap />
          </div>

          <form
            className="grid h-fit gap-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10"
            aria-label="Contact form"
          >
            <div>
              <h2 className="text-xl font-extrabold text-brand-navy">Send us a message</h2>
              <p className="mt-1 text-sm text-slate-500">Fill in the form and we will get back to you shortly.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-semibold text-brand-navy">Full name</label>
                <input id="contact-name" name="name" type="text" required placeholder="Your name" className="input-field" />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-semibold text-brand-navy">Email</label>
                <input id="contact-email" name="email" type="email" required placeholder="you@example.com" className="input-field" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="text-sm font-semibold text-brand-navy">Subject</label>
              <input id="contact-subject" name="subject" type="text" placeholder="How can we help?" className="input-field" />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-sm font-semibold text-brand-navy">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder="Write your message here..."
                className="input-field resize-y"
              />
            </div>
            <button type="submit" className="btn-primary justify-self-start">
              Send Message <PaperPlaneIcon className="text-base" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

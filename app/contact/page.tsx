import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import { ClockIcon, MailIcon, MapPinIcon, SendIcon, PhoneIcon } from 'lucide-react';

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
    value: 'contactus@civicknowledge.org',
    href: 'mailto:contactus@civicknowledge.org',
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
      <section className="bg-primary py-20 text-white md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-white/75 mb-6">
            Contact
          </p>
          <h1 className="text-[2.3rem] md:text-[3.7rem] leading-[1.04] tracking-tight font-medium">
            We would love to hear from you
          </h1>
          <p className="mt-7 max-w-2xl text-[1.03rem] md:text-[1.2rem] leading-8 text-white/85">
            Questions about partnerships or programs? Our team usually replies within one working day.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 lg:py-28 bg-neutral/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 xl:gap-14 items-start lg:grid-cols-12">
          <div className="lg:col-span-5 lg:pr-8">
            <SectionHeading align="left" eyebrow="Reach Us" title="Get in touch" />
            <ul className="mt-10 space-y-5">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tertiary/10 text-tertiary">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-sm tracking-[0.16em] uppercase text-[#64748B]">
                      {label}
                    </h4>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block text-[0.98rem] leading-7 text-[#2F3A4A] hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[0.98rem] leading-7 text-[#2F3A4A]">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form
            className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-[#E4E8F0] grid h-fit gap-5 md:gap-6"
            aria-label="Contact form"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0D1524] mb-2">
                Send us a message
              </h2>
              <p className="text-[0.98rem] leading-7 text-[#445166]">
                Fill in the form and we will get back to you shortly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label htmlFor="contact-name" className="text-sm font-semibold text-[#334155]">Full name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full mt-1.5 bg-neutral border border-[#E1E6EF] rounded-lg px-4 py-3 placeholder:text-[#9AA3B2] focus:outline-none focus:ring-2 focus:ring-tertiary/70 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-semibold text-[#334155]">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full mt-1.5 bg-neutral border border-[#E1E6EF] rounded-lg px-4 py-3 placeholder:text-[#9AA3B2] focus:outline-none focus:ring-2 focus:ring-tertiary/70 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="text-sm font-semibold text-[#334155]">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
                className="w-full mt-1.5 bg-neutral border border-[#E1E6EF] rounded-lg px-4 py-3 placeholder:text-[#9AA3B2] focus:outline-none focus:ring-2 focus:ring-tertiary/70 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-sm font-semibold text-[#334155]">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder="Write your message here..."
                className="w-full mt-1.5 bg-neutral border border-[#E1E6EF] rounded-lg px-4 py-3 placeholder:text-[#9AA3B2] focus:outline-none focus:ring-2 focus:ring-tertiary/70 focus:border-transparent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-primary text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors w-full md:w-auto md:min-w-56 justify-center"
            >
              Send Message
              <span className="flex items-center justify-center bg-white text-primary rounded-full w-5 h-5">
                <SendIcon className="h-3 w-3" strokeWidth={2.5} />
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

import Image from 'next/image';

/**
 * Brand logo — single source of truth for the site logo (used in Header & Footer).
 *
 * Icon artwork lives at `/public/dock-logo.webp`. Replace that file (same
 * filename) to update the logo everywhere, including the favicon.
 *
 * Set `onDark` when rendering on a dark background (e.g. the footer) to switch
 * the wordmark to white; the default is navy for light backgrounds.
 */
type Props = {
  className?: string;
  onDark?: boolean;
};

export default function Logo({ className = '', onDark = false }: Props) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/dock-logo.webp"
        alt=""
        aria-hidden="true"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        priority
      />
      <span
        className={`text-lg font-extrabold tracking-tight ${onDark ? 'text-white' : 'text-brand-navy'}`}
      >
        Dock{' '}
        <span className={onDark ? 'text-brand-orange' : 'text-brand-orange-dark'}>Foundation</span>
      </span>
    </span>
  );
}

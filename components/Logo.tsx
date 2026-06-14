import Image from 'next/image';

/**
 * Brand logo — single source of truth for the site logo (used in Header & Footer).
 *
 * Icon artwork lives at `/public/civiclogo.png`. Replace that file
 * (same filename) to update the logo everywhere, including the favicon.
 *
 * - `showWordmark` adds the "Dock Foundation" wordmark next to the mark.
 *   Used in the footer (set `textColor="white"` for dark backgrounds).
 * - Default (no wordmark) is used in the navbar header.
 */
type TextColor = 'dark' | 'white';

type Props = {
  className?: string;
  showWordmark?: boolean;
  textColor?: TextColor;
  width?: number;
  height?: number;
  src?: string;
};

export default function Logo({
  className = '',
  showWordmark = false,
  textColor = 'dark',
  width = 168,
  height = 77,
  src = '/civiclogo.png',
}: Props) {
  const wordmarkColor = textColor === 'white' ? 'text-white' : 'text-black';
  const accentColor = textColor === 'white' ? 'text-tertiary' : 'text-black';

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={src}
        alt="Civic Knowledge logo"
        width={width}
        height={height}
        className="object-contain"
        style={{ height: `${height}px`, width: `${width}px` }}
        priority
      />
      {showWordmark && (
        <span className={`text-lg font-heading font-bold tracking-tight ${wordmarkColor}`}>
          Civic <span className={accentColor}>Knowledge</span>
        </span>
      )}
    </span>
  );
}

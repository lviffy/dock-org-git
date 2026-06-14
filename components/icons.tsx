import * as React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export function HeartIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21s-7.5-4.7-9.6-9.2C.8 8.2 2.5 4.5 6 4.5c2 0 3.4 1.1 4 2.2.6-1.1 2-2.2 4-2.2 3.5 0 5.2 3.7 3.6 7.3C19.5 16.3 12 21 12 21z" />
    </svg>
  );
}

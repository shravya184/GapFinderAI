import type { ReactNode } from "react";

const P: Record<string, ReactNode> = {
  home: <path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" />,
  upload: <path d="M12 16V4m0 0L7 9m5-5l5 5M4 20h16" />,
  map: <path d="M12 3v6m0 0H6v4m6-4h6v4M6 13v3m12-3v3M4 16h4v4H4zm12 0h4v4h-4z" />,
  quiz: <path d="M9 9a3 3 0 115 2c-1 .8-2 1.2-2 3m0 3.5v.01M12 22a10 10 0 100-20 10 10 0 000 20z" />,
  report: <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />,
  plan: <path d="M8 3v4m8-4v4M4 9h16M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1zm4 9l2 2 4-4" />,
  chat: <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />,
  agents: <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-5v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1m0-12.8l-2.1 2.1M7.7 16.3l-2.1 2.1" />,
  info: <path d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-11v6m0-9.5v.01" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  sun: <path d="M12 16a4 4 0 100-8 4 4 0 000 8zM12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />,
  moon: <path d="M21 13.5A9 9 0 1110.5 3a7 7 0 0010.5 10.5z" />,
  logout: <path d="M9 21H5a1 1 0 01-1-1V4a1 1 0 011-1h4m7 5l4 4-4 4m4-4H9" />,
};

export function Icon({ name, size = 18 }: { name: keyof typeof P | string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {P[name]}
    </svg>
  );
}

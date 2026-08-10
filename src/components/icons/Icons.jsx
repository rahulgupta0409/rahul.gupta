const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
    </svg>
  );
}

export function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M20.2 14.4A8.4 8.4 0 1 1 9.6 3.8a6.7 6.7 0 0 0 10.6 10.6Z" />
    </svg>
  );
}

export function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.53 9.53 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3.2" />
      <path d="M7.6 10.2v6.4M7.6 7.6v.01M12 16.6v-3.8c0-1.4.9-2.6 2.4-2.6 1.4 0 2 1 2 2.6v3.8" />
      <path d="M12 12.8v3.8" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <rect x="2.8" y="4.8" width="18.4" height="14.4" rx="2.6" />
      <path d="m3.5 6 8.5 6.5L20.5 6" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  );
}

export function ArrowUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CopyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <rect x="8.5" y="8.5" width="12" height="12" rx="2.4" />
      <path d="M15.5 8.5V6.4a2.4 2.4 0 0 0-2.4-2.4H5.9a2.4 2.4 0 0 0-2.4 2.4v7.2a2.4 2.4 0 0 0 2.4 2.4h2.1" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function SparkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.7l-1.6-5.5L5 10.6 10.4 9 12 3.5Z" />
    </svg>
  );
}

export function LayoutIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.4" />
      <path d="M3 9.5h18M9 9.5V20" />
    </svg>
  );
}

export function ServerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <rect x="3.2" y="4" width="17.6" height="6.4" rx="1.8" />
      <rect x="3.2" y="13.6" width="17.6" height="6.4" rx="1.8" />
      <path d="M7 7.2h.01M7 16.8h.01" />
    </svg>
  );
}

export function DatabaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.7" />
      <path d="M4.5 5.5V18c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7V5.5" />
      <path d="M4.5 11.8c0 1.5 3.4 2.7 7.5 2.7s7.5-1.2 7.5-2.7" />
    </svg>
  );
}

export function GitBranchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M6 3.5v10.2" />
      <circle cx="6" cy="16.3" r="2.4" />
      <circle cx="6" cy="5.5" r="2" />
      <circle cx="18" cy="7.5" r="2.4" />
      <path d="M18 9.9v1.6a3.5 3.5 0 0 1-3.5 3.5H10" />
    </svg>
  );
}

export function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <rect x="3" y="7.3" width="18" height="12.2" rx="2.2" />
      <path d="M8 7.3V5.6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.7M3 12.5c2.6 1.5 5.8 2.3 9 2.3s6.4-.8 9-2.3" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M12 21.5s7-6.4 7-11.8a7 7 0 0 0-14 0c0 5.4 7 11.8 7 11.8Z" />
      <circle cx="12" cy="9.7" r="2.4" />
    </svg>
  );
}

export function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M12 3.5v11.4M7.4 10.4l4.6 4.6 4.6-4.6M4.5 17.5v1.8a2.2 2.2 0 0 0 2.2 2.2h10.6a2.2 2.2 0 0 0 2.2-2.2v-1.8" />
    </svg>
  );
}

export function HomeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M4 11.2 12 4l8 7.2" />
      <path d="M6 9.6V19a1 1 0 0 0 1 1h3.2v-4.8a1.8 1.8 0 0 1 1.8-1.8v0a1.8 1.8 0 0 1 1.8 1.8V20H17a1 1 0 0 0 1-1V9.6" />
    </svg>
  );
}

export function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="8.2" r="3.6" />
      <path d="M4.5 20c1.2-3.8 4.3-5.7 7.5-5.7s6.3 1.9 7.5 5.7" />
    </svg>
  );
}

export function FolderIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M3.5 6.4a1.6 1.6 0 0 1 1.6-1.6h4l2 2.2h7.8a1.6 1.6 0 0 1 1.6 1.6v9.2a1.6 1.6 0 0 1-1.6 1.6H5.1a1.6 1.6 0 0 1-1.6-1.6Z" />
    </svg>
  );
}

export function QuoteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <path d="M8.3 8.3c-2.1 0-3.8 1.7-3.8 4 0 2.1 1.5 3.7 3.5 3.7.4 0 .9-.1 1.2-.2-.5 1.8-1.9 3.2-3.6 3.7" />
      <path d="M17.3 8.3c-2.1 0-3.8 1.7-3.8 4 0 2.1 1.5 3.7 3.5 3.7.4 0 .9-.1 1.2-.2-.5 1.8-1.9 3.2-3.6 3.7" />
    </svg>
  );
}

export function CompassIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.8 9.2-1.9 5.6-5.6 1.9 1.9-5.6z" />
    </svg>
  );
}

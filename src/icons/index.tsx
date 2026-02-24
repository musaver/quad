interface IconProps {
  className?: string;
  stroke?: string;
  fill?: string;
}

export function ArrowRightIcon({ className = "size-7", stroke = "black" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 28 28">
      <path
        d="M4.375 33.25C4.375 32.767 4.767 32.375 5.25 32.375H22.75C23.233 32.375 23.625 32.767 23.625 33.25V50.75C23.625 51.233 23.233 51.625 22.75 51.625H5.25C4.767 51.625 4.375 51.233 4.375 50.75V33.25Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.16667"
      />
      <path d="M9.625 14H18.375" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
      <path
        d="M14.875 10.5L18.375 14L14.875 17.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.16667"
      />
    </svg>
  );
}

export function CircleArrowIcon({ className = "size-6", stroke = "white" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M8.25 12H15.75" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M12.75 9L15.75 12L12.75 15" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function CheckIcon({ className = "size-6", stroke = "white" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M6 12.75L9.75 16.5L18.75 7.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function PlusIcon({ className = "size-4", fill = "#CCCCCC" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 12 12">
      <path
        d="M12 6C12 6.133 11.947 6.26 11.854 6.354C11.76 6.447 11.633 6.5 11.5 6.5H6.5V11.5C6.5 11.633 6.447 11.76 6.354 11.854C6.26 11.947 6.133 12 6 12C5.867 12 5.74 11.947 5.646 11.854C5.553 11.76 5.5 11.633 5.5 11.5V6.5H0.5C0.367 6.5 0.24 6.447 0.146 6.354C0.053 6.26 0 6.133 0 6C0 5.867 0.053 5.74 0.146 5.646C0.24 5.553 0.367 5.5 0.5 5.5H5.5V0.5C5.5 0.367 5.553 0.24 5.646 0.146C5.74 0.053 5.867 0 6 0C6.133 0 6.26 0.053 6.354 0.146C6.447 0.24 6.5 0.367 6.5 0.5V5.5H11.5C11.633 5.5 11.76 5.553 11.854 5.646C11.947 5.74 12 5.867 12 6Z"
        fill={fill}
      />
    </svg>
  );
}

export function ClientPortalIcon({ className = "size-5", stroke = "black" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <path
        d="M2.5 15.625V4.375C2.5 4.03 2.78 3.75 3.125 3.75H16.875C17.22 3.75 17.5 4.03 17.5 4.375V10.625"
        stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"
      />
      <path d="M12.5 15.625V13.125H17.5V15.625" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

export function KpiTrackingIcon({ className = "size-5", stroke = "black" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <path d="M17.5 16.25H2.5V3.75" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path
        d="M17.5 7.5L12.5 11.875L7.5 8.125L2.5 12.5"
        stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"
      />
    </svg>
  );
}

export function WorkflowIcon({ className = "size-5", stroke = "black" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <path
        d="M2.5 13.75L10 18.125L17.5 13.75"
        stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"
      />
      <path d="M2.5 10L10 14.375L17.5 10" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path
        d="M2.5 6.25L10 10.625L17.5 6.25L10 1.875L2.5 6.25Z"
        stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"
      />
    </svg>
  );
}

export function TeamManagementIcon({ className = "size-5", stroke = "black" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <path
        d="M3.125 8.125C3.125 6.39917 4.52417 5 6.25 5C7.97583 5 9.375 6.39917 9.375 8.125C9.375 9.85083 7.97583 11.25 6.25 11.25C4.52417 11.25 3.125 9.85083 3.125 8.125Z"
        stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"
      />
      <path
        d="M1.25 15C1.805 12.8433 3.92 11.25 6.25 11.25C8.58 11.25 10.695 12.8433 11.25 15"
        stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25"
      />
      <path d="M12.5 6.25H19.375" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d="M12.5 10H19.375" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
      <path d="M14.375 13.75H19.375" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

export function PenToolIcon({ className = "size-6", stroke = "white" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path d="M20.25 20.25H9L3.798 15.048" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M15.375 8.625L6.375 17.625" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path
        d="M9 20.25H4.5C4.086 20.25 3.75 19.914 3.75 19.5V15.31C3.75 15.112 3.829 14.921 3.969 14.781L15.531 3.219C15.823 2.927 16.298 2.927 16.591 3.219L20.781 7.406C21.073 7.699 21.073 8.174 20.781 8.467L9 20.25Z"
        stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      />
      <path d="M12.75 6L18 11.25" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function QuoteIcon({ className = "w-10 h-8" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 40 31">
      <path
        d="M0.134248 6.781C0.134248 4.936 0.859248 3.368 2.30925 2.076C3.75925 0.692 5.46825 0 7.43725 0C8.26525 0 9.14625 0.184 10.0782 0.554L9.92325 0.415L10.8552 0.83H11.0112C11.3212 1.015 11.6842 1.245 12.0982 1.522C12.0982 1.615 12.2542 1.799 12.5652 2.076C15.1542 4.382 16.2422 7.842 15.8282 12.455C15.4142 19.099 11.4772 25.095 4.01825 30.446C3.60325 30.816 3.13725 31 2.62025 31C1.79025 31 1.11725 30.677 0.599248 30.031C-0.332752 28.924 -0.177752 27.91 1.06525 26.986C7.17825 22.558 10.4932 17.76 11.0112 12.594C9.87125 13.24 8.68025 13.563 7.43725 13.563C5.46825 13.563 3.75925 12.917 2.30925 11.625C0.859248 10.241 0.134248 8.627 0.134248 6.781ZM24.2192 6.781C24.2192 4.936 24.9452 3.368 26.3952 2.076C27.8452 0.692 29.5542 0 31.5232 0C32.3522 0 33.2322 0.184 34.1652 0.554L34.0092 0.415C34.3202 0.507 34.6312 0.646 34.9412 0.83H35.0972C35.5112 1.015 35.8742 1.245 36.1842 1.522C36.1842 1.615 36.3412 1.799 36.6512 2.076C39.2412 4.382 40.3282 7.842 39.9152 12.455C39.5002 19.099 35.5632 25.095 28.1042 30.446C27.6902 30.816 27.2232 31 26.7062 31C25.8772 31 25.2552 30.677 24.8412 30.031C23.8052 28.924 23.9092 27.91 25.1522 26.986C31.2642 22.558 34.5792 17.76 35.0972 12.594C33.9582 13.24 32.7662 13.563 31.5232 13.563C29.5542 13.563 27.8452 12.917 26.3952 11.625C24.9452 10.241 24.2192 8.627 24.2192 6.781Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StarIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 16 16">
      <path
        d="M8 11.818L11.42 13.9213C11.6013 14.0313 11.8313 14.0213 12.0027 13.896C12.174 13.7707 12.2527 13.5547 12.2027 13.348L11.2727 9.424L14.316 6.79867C14.4747 6.65933 14.5353 6.43933 14.4707 6.23867C14.4053 6.03733 14.2273 5.89467 14.0167 5.87533L10.0227 5.55L8.484 1.82533C8.40333 1.62867 8.21267 1.5 8 1.5C7.788 1.5 7.59667 1.62867 7.516 1.82533L5.97733 5.55L1.98333 5.87533C1.77133 5.89333 1.59133 6.03733 1.526 6.23933C1.46067 6.44133 1.52333 6.66333 1.684 6.802L4.72733 9.42667L3.79733 13.348C3.74733 13.5547 3.826 13.7707 3.99733 13.896C4.16867 14.0213 4.39867 14.0313 4.58 13.9213L8 11.818Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function XIcon({ className = "size-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path
        d="M15.27 1.61h2.97l-6.49 7.42 7.63 10.09h-5.98l-4.68-6.12-5.36 6.12H.39l6.94-7.94L0 1.61h6.13l4.23 5.59 4.91-5.59ZM14.23 17.27h1.64L5.4 3.3H3.64l10.59 13.97Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ className = "size-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path
        d="M10 1.802c2.67 0 2.987.01 4.042.058 2.71.124 3.976 1.41 4.1 4.1.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.387 3.975-4.1 4.1-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.126-3.977-1.417-4.1-4.1C1.811 12.988 1.8 12.672 1.8 10c0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1C7.013 1.812 7.33 1.802 10 1.802ZM10 0C7.284 0 6.944.012 5.878.06 2.246.227.228 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.168 3.63 2.183 5.65 5.818 5.817C6.944 19.988 7.284 20 10 20s3.057-.012 4.123-.06c3.63-.167 5.652-2.183 5.817-5.817.05-1.066.06-1.407.06-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.012 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon({ className = "size-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path
        d="M4.477 2A2.238 2.238 0 0 1 2.24 4.239C2.24 5.476 3.24 6.5 4.477 6.5c1.238 0 2.238-1.024 2.238-2.261A2.238 2.238 0 0 0 4.477 2ZM2.5 8h4v12h-4V8Zm6.5 0h3.834v1.64h.055c.534-1.01 1.836-2.076 3.779-2.076C20.715 7.564 21 9.926 21 13.001V20h-3.994v-6.204c0-1.479-.027-3.38-2.06-3.38-2.063 0-2.378 1.61-2.378 3.273V20H9V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PagesIcon({ className = "size-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16M4 12h16M4 18h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CloseMenuIcon({ className = "size-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BrandWebIcon({ className = "size-5", stroke = "black" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <path
        d="M2.5 5.625C2.5 4.934 3.059 4.375 3.75 4.375H16.25C16.941 4.375 17.5 4.934 17.5 5.625V14.375C17.5 15.066 16.941 15.625 16.25 15.625H3.75C3.059 15.625 2.5 15.066 2.5 14.375V5.625Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.5H17.5"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 6h.01" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <path d="M7.5 6h.01" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <path d="M10 11.25h5" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" />
      <path d="M5 11.25h2.5" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

export function VideoContentIcon({ className = "size-5", stroke = "black" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <rect
        x="2.5"
        y="4.375"
        width="11.25"
        height="11.25"
        rx="2"
        stroke={stroke}
        strokeWidth="1.25"
      />
      <path
        d="M13.75 7.5L17.5 5.625V14.375L13.75 12.5V7.5Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.875 8.125L10 10L6.875 11.875V8.125Z" fill={stroke} opacity="0.9" />
    </svg>
  );
}

export function PaidAdsIcon({ className = "size-5", stroke = "black" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <path
        d="M3.125 16.25H16.875"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M5 16.25V10.625"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M9.375 16.25V7.5"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M13.75 16.25V4.375"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M4.5 9.25L8.75 6.25L11.25 8.125L15.5 4.75"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AiAutomationIcon({ className = "size-5", stroke = "black" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <path
        d="M7.5 3.75H12.5M7.5 16.25H12.5"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M3.75 7.5V12.5M16.25 7.5V12.5"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <rect
        x="6.25"
        y="6.25"
        width="7.5"
        height="7.5"
        rx="2"
        stroke={stroke}
        strokeWidth="1.25"
      />
      <path d="M8.125 10H11.875" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" />
      <path d="M10 8.125V11.875" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

export const FEATURE_TAB_ICONS: Record<string, React.ComponentType<IconProps>> = {
  "client-portal": ClientPortalIcon,
  "kpi-tracking": KpiTrackingIcon,
  "workflow-automation": WorkflowIcon,
  "team-management": TeamManagementIcon,
  "brand-web": BrandWebIcon,
  "video-content": VideoContentIcon,
  "paid-advertising": PaidAdsIcon,
  "ai-automation": AiAutomationIcon,
};

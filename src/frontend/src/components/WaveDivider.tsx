interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      } ${className}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        role="presentation"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-12 md:h-16"
        style={{ fill: "oklch(var(--secondary) / 0.6)" }}
      >
        <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </div>
  );
}

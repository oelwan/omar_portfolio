"use client";

type RobotProps = {
  className?: string;
};

export default function Robot({ className = "" }: RobotProps) {
  return (
    <div
      className={`robot-container select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_40px_rgba(121,192,255,0.25)]"
      >
        {/* Antenna */}
        <line
          x1="160"
          y1="48"
          x2="160"
          y2="18"
          stroke="#79c0ff"
          strokeWidth="4"
          strokeLinecap="round"
          className="robot-antenna"
        />
        <circle cx="160" cy="14" r="8" fill="#d2a8ff" className="robot-antenna-tip" />

        {/* Head */}
        <rect
          x="95"
          y="48"
          width="130"
          height="100"
          rx="20"
          fill="#161b22"
          stroke="#79c0ff"
          strokeWidth="3"
        />
        <rect x="108" y="62" width="104" height="72" rx="12" fill="#0d1117" />

        {/* Eyes */}
        <ellipse cx="130" cy="98" rx="18" ry="22" fill="#1c2128" stroke="#30363d" strokeWidth="2" />
        <ellipse cx="190" cy="98" rx="18" ry="22" fill="#1c2128" stroke="#30363d" strokeWidth="2" />
        <circle cx="132" cy="98" r="10" fill="#3fb950" className="robot-eye-left" />
        <circle cx="192" cy="98" r="10" fill="#3fb950" className="robot-eye-right" />
        <circle cx="135" cy="95" r="3" fill="#e6edf3" opacity="0.8" />
        <circle cx="195" cy="95" r="3" fill="#e6edf3" opacity="0.8" />

        {/* Mouth display */}
        <rect x="125" y="118" width="70" height="8" rx="4" fill="#30363d" />
        <rect
          x="125"
          y="118"
          width="35"
          height="8"
          rx="4"
          fill="#d2a8ff"
          className="robot-mouth-bar"
        />

        {/* Neck */}
        <rect x="145" y="148" width="30" height="20" rx="4" fill="#30363d" />

        {/* Body */}
        <rect
          x="70"
          y="168"
          width="180"
          height="150"
          rx="24"
          fill="#161b22"
          stroke="#d2a8ff"
          strokeWidth="3"
        />

        {/* Chest screen */}
        <rect x="95" y="195" width="130" height="90" rx="12" fill="#0d1117" stroke="#30363d" strokeWidth="2" />
        <text x="110" y="220" fill="#8b949e" fontSize="11" fontFamily="monospace">
          {"// AI.status"}
        </text>
        <text x="110" y="242" fill="#ff7b72" fontSize="12" fontFamily="monospace">
          infer()
        </text>
        <text x="110" y="262" fill="#3fb950" fontSize="11" fontFamily="monospace" className="robot-chest-text">
          {"=> running..."}
        </text>
        <rect x="110" y="272" width="100" height="4" rx="2" fill="#30363d" />
        <rect
          x="110"
          y="272"
          width="65"
          height="4"
          rx="2"
          fill="#79c0ff"
          className="robot-progress"
        />

        {/* Left arm */}
        <g className="robot-arm-left">
          <rect x="28" y="185" width="42" height="18" rx="9" fill="#30363d" />
          <rect x="12" y="200" width="18" height="70" rx="9" fill="#161b22" stroke="#79c0ff" strokeWidth="2" />
          <circle cx="21" cy="278" r="14" fill="#1c2128" stroke="#d2a8ff" strokeWidth="2" />
        </g>

        {/* Right arm — waving */}
        <g className="robot-arm-right">
          <rect x="250" y="185" width="42" height="18" rx="9" fill="#30363d" />
          <rect x="290" y="175" width="18" height="70" rx="9" fill="#161b22" stroke="#79c0ff" strokeWidth="2" />
          <circle cx="299" cy="253" r="14" fill="#1c2128" stroke="#d2a8ff" strokeWidth="2" />
        </g>

        {/* Legs */}
        <rect x="105" y="318" width="40" height="60" rx="12" fill="#161b22" stroke="#30363d" strokeWidth="2" />
        <rect x="175" y="318" width="40" height="60" rx="12" fill="#161b22" stroke="#30363d" strokeWidth="2" />
        <ellipse cx="125" cy="385" rx="28" ry="12" fill="#1c2128" stroke="#79c0ff" strokeWidth="2" />
        <ellipse cx="195" cy="385" rx="28" ry="12" fill="#1c2128" stroke="#79c0ff" strokeWidth="2" />

        {/* Shadow */}
        <ellipse cx="160" cy="408" rx="90" ry="10" fill="#79c0ff" opacity="0.08" className="robot-shadow" />
      </svg>
    </div>
  );
}

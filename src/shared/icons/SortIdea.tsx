export const SortIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    className={className || "w-6 h-6"}
  >
    <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M3 7H21"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>{" "}
        <path
          d="M6 12H18"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>{" "}
        <path
          d="M10 17H14"
          stroke="#ffffff"
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>{" "}
      </g>
    </svg>
  </svg>
);

export default SortIcon;

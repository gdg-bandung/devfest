export default function ArrowRight2({
  class: className = "",
  fill = "white",
  width = "13",
  height = "22",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9323 11.9323L2.38613 21.4785L0 19.0924L8.35313 10.7393L0 2.38613L2.38613 0L11.9323 9.54619C12.2487 9.86264 12.4264 10.2918 12.4264 10.7393C12.4264 11.1867 12.2487 11.6159 11.9323 11.9323Z"
        fill={fill}
      />
    </svg>
  );
}

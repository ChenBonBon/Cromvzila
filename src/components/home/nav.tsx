import clsx from "clsx";
import { createSignal } from "solid-js";

export default function Nav() {
  const [hovered, setHovered] = createSignal(false);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }
  return (
    <img
      src="/images/home/nav.webp"
      alt="/images/home/nav.webp"
      class={clsx(
        "absolute top-0 left-0 h-1/2 z-30 transition-transform duration-300 ease-linear",
        {
          ["translate-y-0"]: hovered(),
          ["-translate-y-3/4"]: !hovered(),
        }
      )}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    />
  );
}

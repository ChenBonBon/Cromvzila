import clsx from "clsx";
import { createSignal } from "solid-js";

interface ClueCardProps {
  onClick?: () => void;
}

export default function ClueCard(props: ClueCardProps) {
  const [hovered, setHovered] = createSignal(false);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  return (
    <img
      src="/images/home/file.webp"
      alt="/images/home/file.webp"
      class={clsx(
        "absolute w-1/5 right-1/4 z-30 bottom-0 -rotate-12 cursor-pointer transition-transform duration-300 ease-linear",
        {
          ["translate-y-0"]: hovered(),
          ["translate-y-3/4"]: !hovered(),
        }
      )}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
      onClick={props.onClick}
    />
  );
}

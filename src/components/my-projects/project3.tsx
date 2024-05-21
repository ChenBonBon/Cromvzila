import clsx from "clsx";
import { createSignal } from "solid-js";

export default function Project3() {
  const [hovered, setHovered] = createSignal(false);

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  return (
    <div class="relative">
      <img
        src="/images/my-projects/my-project-3/backend.webp"
        alt="/images/my-projects/my-project-3/backend.webp"
      />
      <img
        src="/images/my-projects/my-project-3/moto.webp"
        alt="/images/my-projects/my-project-3/moto.webp"
        class={clsx(
          "absolute top-0 right-0 h-full cursor-pointer transition-transform duration-300 ease-linear",
          {
            ["translate-x-0 scale-100"]: hovered(),
            ["translate-x-1/2 scale-50"]: !hovered(),
          }
        )}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}

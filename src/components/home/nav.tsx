import { A } from "@solidjs/router";
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
    <div
      class={clsx(
        "absolute top-0 left-0 h-[70%] z-30 transition-transform duration-300 ease-linear",
        {
          ["translate-y-0"]: hovered(),
          ["-translate-y-3/4"]: !hovered(),
        }
      )}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      <img
        src="/images/home/nav.webp"
        alt="/images/home/nav.webp"
        class="w-auto h-full"
      />
      <A href="/my-folio">
        <img
          src="/images/home/artwork.webp"
          alt="/images/home/artwork.webp"
          class="absolute top-[10%] left-[50%] h-[3%]"
        />
      </A>
      <A href="/my-projects">
        <img
          src="/images/home/project.webp"
          alt="/images/home/project.webp"
          class="absolute top-[10%] left-[63%] h-[3%]"
        />
      </A>
      <A href="">
        <img
          src="/images/home/bio.webp"
          alt="/images/home/bio.webp"
          class="absolute top-[10%] left-[75%] h-[3%]"
        />
      </A>
    </div>
  );
}

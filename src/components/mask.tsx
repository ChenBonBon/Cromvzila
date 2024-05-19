import clsx from "clsx";
import { Show } from "solid-js";

interface MaskProps {
  className?: string;
  onClick?: () => void;
  showBack?: boolean;
}

export default function Mask(props: MaskProps) {
  return (
    <div
      class={clsx(
        "absolute top-0 left-0 w-full h-full bg-black opacity-50 z-30",
        props.className
      )}
      onClick={props.onClick}
    >
      <Show when={props.showBack}>
        <img
          src="/images/my-folio/back.webp"
          alt="/images/my-folio/back.webp"
          class="absolute bottom-[2%] right-[1%] w-[8%] cursor-pointer"
        />
      </Show>
    </div>
  );
}

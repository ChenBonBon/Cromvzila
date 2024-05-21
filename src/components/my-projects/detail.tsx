import { JSX, Show, createSignal } from "solid-js";

interface DetailProps {
  images?: string[];
  child?: JSX.Element;
  onClose?: () => void;
}

export default function Detail(props: DetailProps) {
  const [currIndex, setCurrIndex] = createSignal(0);

  function handlePrev() {
    setCurrIndex(currIndex() - 1);
  }

  function handleNext() {
    setCurrIndex(currIndex() + 1);
  }

  return (
    <div class="absolute top-0 left-0 flex justify-center items-center w-full h-full z-40">
      {props.images && (
        <>
          <img
            src={props.images[currIndex()]}
            alt={props.images[currIndex()]}
            class="h-full w-auto"
          />
          <Show when={currIndex() > 0}>
            <img
              src="/images/my-projects/prev.webp"
              alt="/images/my-projects/prev.webp"
              class="absolute left-0 bottom-0 cursor-pointer h-[15%]"
              onClick={handlePrev}
            />
          </Show>
          <Show when={currIndex() < props.images.length - 1}>
            <img
              src="/images/my-projects/next.webp"
              alt="/images/my-projects/next.webp"
              class="absolute right-0 bottom-0 cursor-pointer h-[15%]"
              onClick={handleNext}
            />
          </Show>
        </>
      )}
      {props.child}
      <Show when={!props.images || currIndex() === props.images.length - 1}>
        <img
          src="/images/my-projects/back.webp"
          alt="/images/my-projects/back.webp"
          class="absolute right-0 bottom-0 cursor-pointer h-[15%]"
          onClick={props.onClose}
        />
      </Show>
    </div>
  );
}

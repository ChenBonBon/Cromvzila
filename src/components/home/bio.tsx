import { createSignal, onCleanup, onMount } from "solid-js";

interface BioProps {
  onClose?: () => void;
}

export default function Bio(props: BioProps) {
  let containerRef: HTMLDivElement;
  let backendRef: HTMLImageElement;

  const [containerSize, setContainerSize] = createSignal({
    width: 0,
    height: 0,
  });

  const [backendSize, setBackendSize] = createSignal({
    width: 0,
    height: 0,
  });

  function computeContainerSize() {
    if (containerRef) {
      const width = containerRef.offsetWidth;
      const height = containerRef.offsetHeight;

      setContainerSize({
        width,
        height,
      });
    }
  }

  function computeBackendSize() {
    if (backendRef) {
      const width = backendRef.offsetWidth;
      const height = backendRef.offsetHeight;

      setBackendSize({
        width,
        height,
      });
    }
  }

  function computeSize() {
    computeContainerSize();
    computeBackendSize();
  }

  onMount(() => {
    computeSize();

    window.addEventListener("resize", computeSize);
  });

  onCleanup(() => {
    window.removeEventListener("resize", computeSize);
  });

  return (
    <div
      class="absolute top-0 left-0 w-full h-full z-40"
      ref={(el) => (containerRef = el)}
    >
      <img
        src="/images/bio/backend.webp"
        alt="/images/bio/backend.webp"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-full"
        ref={(el) => (backendRef = el)}
        onLoad={(event) => {
          const currentTarget = event.currentTarget;
          const { offsetWidth, offsetHeight } = currentTarget;

          setBackendSize({
            width: offsetWidth,
            height: offsetHeight,
          });
        }}
      />
      <img
        src="/images/bio/photo.webp"
        alt="/images/bio/photo.webp"
        class="absolute h-1/2"
        style={{
          left:
            (containerSize().width - backendSize().width) / 2 -
            backendSize().width / 40 +
            "px",
          top: (containerSize().height - backendSize().height) / 2 + "px",
        }}
      />
      <img
        src="/images/bio/mark.webp"
        alt="/images/bio/mark.webp"
        class="absolute h-1/5 cursor-pointer"
        style={{
          right:
            (containerSize().width - backendSize().width) / 2 +
            backendSize().width / 12 +
            "px",
          bottom:
            (containerSize().height - backendSize().height) / 2 +
            backendSize().height / 8 +
            "px",
        }}
        onClick={props.onClose}
      />
    </div>
  );
}

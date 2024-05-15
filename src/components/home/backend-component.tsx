import { JSX, createSignal, onCleanup, onMount } from "solid-js";

interface BackendProps {
  children?: JSX.Element;
}

const ratio = 4096 / 2160;

export default function BackendComponent(props: BackendProps) {
  const { children } = props;

  const [width, setWidth] = createSignal(4096);
  const [height, setHeight] = createSignal(2160);

  async function conputeSize() {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    if (innerWidth / innerHeight > ratio) {
      setWidth(innerHeight * ratio);
      setHeight(innerHeight);
    } else {
      setWidth(innerWidth);
      setHeight(innerWidth / ratio);
    }
  }

  onMount(() => {
    conputeSize();

    window && window.addEventListener("resize", conputeSize);
  });

  onCleanup(() => {
    window && window.removeEventListener("resize", conputeSize);
  });

  return (
    <div
      class="relative overflow-hidden"
      style={{
        width: width() + "px",
        height: height() + "px",
      }}
    >
      <img
        src="/images/home-backend.png"
        alt="/images/home-backend.png"
        class="w-auto h-full"
      />
      {children}
    </div>
  );
}

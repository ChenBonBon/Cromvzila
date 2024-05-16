import { JSX, createSignal, onCleanup, onMount } from "solid-js";

interface BackendProps {
  backgroundImage: string;
  children?: JSX.Element;
}

const ratio = 4096 / 2160;

export default function MainLayout(props: BackendProps) {
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

    window.addEventListener("resize", conputeSize);
  });

  onCleanup(() => {
    window.removeEventListener("resize", conputeSize);
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
        src={props.backgroundImage}
        alt={props.backgroundImage}
        class="w-auto h-full"
      />
      {props.children}
    </div>
  );
}

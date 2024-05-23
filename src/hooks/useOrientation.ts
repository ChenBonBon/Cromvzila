import { createSignal, onCleanup, onMount } from "solid-js";

export default function useOrientation() {
  const [orientation, setOrientation] = createSignal("portrait");

  function getOrientation() {
    if (screen.orientation.type === "landscape-primary") {
      setOrientation("landscape");
    } else if (screen.orientation.type === "portrait-primary") {
      setOrientation("portrait");
    }
  }

  onMount(() => {
    getOrientation();

    window.addEventListener("orientationchange", getOrientation);
  });

  onCleanup(() => {
    window.removeEventListener("orientationchange", getOrientation);
  });

  return { orientation };
}

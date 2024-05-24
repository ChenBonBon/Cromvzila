import { createSignal, onCleanup, onMount } from "solid-js";

export default function useOrientation() {
  const landscapeQuery = window.matchMedia("(orientation: landscape)");

  const [orientation, setOrientation] = createSignal("portrait");

  function checkOrientation() {
    if (landscapeQuery.matches) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }

  function handleOrientationChange(mediaQuery: MediaQueryListEvent) {
    if (mediaQuery.matches) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }

  onMount(() => {
    checkOrientation();

    landscapeQuery.addEventListener("change", handleOrientationChange);
  });

  onCleanup(() => {
    landscapeQuery.removeEventListener("change", handleOrientationChange);
  });

  return { orientation };
}

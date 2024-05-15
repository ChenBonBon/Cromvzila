import { loadOml2d } from "oh-my-live2d";
import { onCleanup } from "solid-js";

const oml2d = loadOml2d({
  mobileDisplay: true,
  models: [
    {
      path: "https://model.oml2d.com/HK416-1-normal/model.json",
      position: [0, 150],
      scale: 0.06,
      mobilePosition: [0, 175],
      mobileScale: 0.04,
      stageStyle: {
        height: 450,
      },
      mobileStageStyle: {
        height: 375,
      },
    },
  ],
});

export default function L2DComponent() {
  onCleanup(() => {
    const stage = document.getElementById("oml2d-stage");
    const statusBar = document.getElementById("oml2d-statusBar");

    if (stage) {
      stage.remove();
    }

    if (statusBar) {
      statusBar.remove();
    }
  });

  return <></>;
}

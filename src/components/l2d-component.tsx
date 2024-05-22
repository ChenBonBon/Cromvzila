import { loadOml2d } from "oh-my-live2d";
import { onCleanup } from "solid-js";

const oml2d = loadOml2d({
  mobileDisplay: true,
  models: [
    {
      path: "/l2d/prison-guard-meow.model3.json",
      position: [25, 150],
      scale: 0.06,
      mobilePosition: [20, 175],
      mobileScale: 0.04,
      stageStyle: {
        width: 200,
        height: 400,
      },
      mobileStageStyle: {
        width: 175,
        height: 350,
      },
    },
  ],
  tips: {
    copyTips: {
      message: ["Welcome to ZilaZila Prison, everyone says it's great here."],
    },
    idleTips: {
      message: ["Make yourself at home, haha."],
    },
    welcomeTips: {
      message: {
        weeHours: "Hurry up and sleep, be careful of sudden death.",
        daybreak: "Good morning, leader.",
        morning: "I want breakfast.",
        noon: "I want lunch.",
        afternoon: "I want afternoon tea.",
        dusk: "I want dinner.",
        night: "The prison is my home, no overtime pay.Meow.",
        lateNight: "I want midnight snack.",
      },
    },
  },
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

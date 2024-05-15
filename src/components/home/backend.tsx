import { clientOnly } from "@solidjs/start";
import { Show, createSignal } from "solid-js";
import Mask from "../mask";
import Bio from "./bio";
import ClueCard from "./clue-card";
import Nav from "./nav";
import Prison from "./prison";
import Wall from "./wall";

const BackendComponent = clientOnly(() => import("./backend-component"));

export default function Backend() {
  const [bioVisible, setBioVisible] = createSignal(false);
  const [maskVisible, setMaskVisible] = createSignal(false);

  function showBio() {
    setBioVisible(true);
    setMaskVisible(true);
  }

  function hideBio() {
    setBioVisible(false);
    setMaskVisible(false);
  }

  return (
    <BackendComponent>
      <Nav />
      <Prison />
      <Wall />
      <Show when={bioVisible()}>
        <Bio onClose={hideBio} />
      </Show>
      <Show when={!bioVisible()}>
        <ClueCard onClick={showBio} />
      </Show>
      <Show when={maskVisible()}>
        <Mask onClick={hideBio} />
      </Show>
    </BackendComponent>
  );
}

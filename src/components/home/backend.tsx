import { clientOnly } from "@solidjs/start";
import { Show, createSignal } from "solid-js";
import Mask from "../mask";
import Bio from "./bio";
import ClueCard from "./clue-card";
import Frontend from "./frontend";
import Nav from "./nav";
import Wall from "./wall";

const MainLayout = clientOnly(() => import("../../layouts/main"));
const L2DComponent = clientOnly(() => import("../l2d-component"));

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
    <MainLayout backgroundImage="/images/home/backend.webp">
      <L2DComponent />
      <Nav />
      <Frontend />
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
    </MainLayout>
  );
}

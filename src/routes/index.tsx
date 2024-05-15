import { Show, createSignal } from "solid-js";
import Backend from "~/components/home/backend";
import Bio from "~/components/home/bio";
import ClueCard from "~/components/home/clue-card";
import Nav from "~/components/home/nav";
import Prison from "~/components/home/prison";
import Wall from "~/components/home/wall";
import L2D from "~/components/l2d";
import Mask from "~/components/mask";

export default function Home() {
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
    <main class="w-screen h-screen">
      <L2D />
      <div class="w-full h-full bg-black">
        <div class="flex items-center w-full h-full">
          <Backend>
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
          </Backend>
        </div>
      </div>
    </main>
  );
}

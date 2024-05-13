import { Show, createSignal } from "solid-js";
import Bio from "~/components/home/bio";
import ClueCard from "~/components/home/clue-card";
import NavCard from "~/components/home/nav-card";
import Prison from "~/components/home/prison";
import L2D from "~/components/l2d";

export default function Home() {
  const [bioVisible, setBioVisible] = createSignal(false);

  function showBio() {
    setBioVisible(true);
  }

  function hideBio() {
    setBioVisible(false);
  }

  return (
    <main class="w-screen h-screen">
      <L2D />
      <div class="flex relative w-full h-full">
        <Prison />
        <div class="flex flex-col w-64 gap-20 px-10 py-20 bg-amber-700">
          <NavCard href="/my-folio" className="bg-red-500 w-20 h-40">
            My folio
          </NavCard>
          <NavCard href="/my-projects" className="bg-blue-500 w-20 h-40">
            My projects
          </NavCard>
        </div>
      </div>
      <ClueCard onClick={showBio} />
      <Show when={bioVisible()}>
        <Bio
          avatar="https://picsum.photos/200"
          name="Cromyzila"
          description="balabala cute cat balabala"
          onClose={hideBio}
        />
      </Show>
    </main>
  );
}

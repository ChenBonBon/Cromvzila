import { clientOnly } from "@solidjs/start";
import { Show, createMemo, createSignal } from "solid-js";
import { MESSAGES } from "~/constants/Messages";
import Back from "../back";
import Chat from "./chat";
import Crashed from "./crashed";
import Zimi from "./zimi";

const MainLayout = clientOnly(() => import("../../layouts/main"));

export default function Backend() {
  const [times, setTimes] = createSignal(0);
  const [chating, setChating] = createSignal(false);

  const finished = createMemo(() => {
    return times() === MESSAGES.length - 1;
  });

  function quest() {
    setTimes((prev) => prev + 1);
    setChating(true);

    setTimeout(() => {
      setChating(false);
    }, 2000);
  }

  return (
    <MainLayout backgroundImage="/images/prison/backend.png">
      <Show when={chating()}>
        <Chat message={MESSAGES[times()]} />
      </Show>
      <Show when={!chating() && !finished()}>
        <Zimi onClick={quest} />
      </Show>
      <Show when={finished()}>
        <Crashed />
      </Show>
      <Back className="absolute bottom-0 right-0 text-white" />
    </MainLayout>
  );
}

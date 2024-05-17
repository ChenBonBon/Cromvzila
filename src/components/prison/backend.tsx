import { clientOnly } from "@solidjs/start";
import { createMemo, createSignal, onMount } from "solid-js";
import { MESSAGES } from "~/constants/Messages";
import Back from "../back";
import Chat from "./chat";
import Crashed from "./crashed";
import Zimi from "./zimi";

const MainLayout = clientOnly(() => import("../../layouts/main"));

export default function Backend() {
  const [count, setCount] = createSignal(-1);
  const [chating, setChating] = createSignal(false);
  const [zimiMessage, setZimiMessage] = createSignal(
    "MeowWoo, I'll say anything."
  );

  const finished = createMemo(() => {
    return count() === MESSAGES.length;
  });

  function quest() {
    setCount((prev) => prev + 1);
    setChating(true);

    setTimeout(() => {
      setChating(false);
    }, 3500);
  }

  onMount(() => {
    setTimeout(() => {
      setZimiMessage("……………………");
    }, 3500);
  });

  return (
    <MainLayout backgroundImage="/images/prison/backend.webp">
      <Chat message={MESSAGES[count()]} show={chating() && !finished()} />
      <Zimi
        message={zimiMessage()}
        show={!chating() && !finished()}
        onClick={quest}
      />
      <Crashed show={finished()} />
      <Back className="absolute bottom-[4.5%] right-[1.5%] text-white w-[8%]" />
    </MainLayout>
  );
}

import { createSignal, onMount } from "solid-js";
import ChatBackend from "./chat-backend";

interface ZimiProps {
  onClick?: () => void;
}

export default function Zimi(props: ZimiProps) {
  const [message, setMessage] = createSignal("MeowWoo, I'll say anything.");

  onMount(() => {
    setTimeout(() => {
      setMessage("……………………");
    }, 3500);
  });

  return (
    <div class="absolute top-1/2 left-1/2 w-auto h-full -translate-y-1/2">
      <img
        src="/images/prison/zimi.gif"
        alt="/images/prison/zimi.gif"
        class="w-auto h-full cursor-pointer"
        onClick={props.onClick}
      />
      <ChatBackend message={message()}></ChatBackend>
    </div>
  );
}

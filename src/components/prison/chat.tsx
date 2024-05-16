import clsx from "clsx";
import ChatBackend from "./chat-backend";

interface ChatProps {
  message: string;
  show?: boolean;
}

export default function Chat(props: ChatProps) {
  return (
    <div
      class={clsx("absolute top-1/2 left-1/2 w-auto h-full -translate-y-1/2", {
        ["hidden"]: !props.show,
      })}
    >
      <img
        src="/images/prison/cry.webp"
        alt="/images/prison/cry.webp"
        class="w-auto h-full"
      />
      <ChatBackend message={props.message}></ChatBackend>
    </div>
  );
}

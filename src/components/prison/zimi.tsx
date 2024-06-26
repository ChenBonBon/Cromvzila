import clsx from "clsx";
import ChatBackend from "./chat-backend";

interface ZimiProps {
  message: string;
  show?: boolean;
  onClick?: () => void;
}

export default function Zimi(props: ZimiProps) {
  return (
    <div
      class={clsx("absolute top-1/2 left-1/2 w-auto h-full -translate-y-1/2", {
        ["hidden"]: !props.show,
      })}
    >
      <img
        src="/images/prison/zimi.gif"
        alt="/images/prison/zimi.gif"
        class="w-auto h-full cursor-pointer"
        onClick={props.onClick}
      />
      <ChatBackend message={props.message}></ChatBackend>
    </div>
  );
}

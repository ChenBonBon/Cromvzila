import ChatBackend from "./chat-backend";

interface ChatProps {
  message: string;
}

export default function Chat(props: ChatProps) {
  return (
    <div class="absolute top-1/2 left-1/2 w-auto h-full -translate-y-1/2">
      <img
        src="/images/prison/cry.png"
        alt="/images/prison/cry.png"
        class="w-auto h-full"
      />
      <ChatBackend message={props.message}></ChatBackend>
    </div>
  );
}

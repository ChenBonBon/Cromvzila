import ChatBackend from "./chat-backend";

interface ChatProps {
  message: string;
}

export default function Chat(props: ChatProps) {
  return (
    <div class="absolute top-1/2 left-1/2 w-auto h-full -translate-y-1/2">
      <img
        src="/images/prison/cry.webp"
        alt="/images/prison/cry.webp"
        class="w-auto h-full"
      />
      <ChatBackend message={props.message}></ChatBackend>
    </div>
  );
}

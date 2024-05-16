interface ChatBackendProps {
  message: string;
}

export default function ChatBackend(props: ChatBackendProps) {
  return (
    <div class="absolute top-0 -left-[110%] h-2/3">
      <img
        src="/images/prison/chat-backend.gif"
        alt="/images/prison/chat-backend.gif"
        class="h-full"
      />
      <p class="absolute top-[15%] left-[20%] w-1/2 h-1/2 flex items-center font-chat text-2xl select-none">
        {props.message}
      </p>
    </div>
  );
}

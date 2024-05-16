import clsx from "clsx";

interface CrashedProps {
  show?: boolean;
}

export default function Crashed(props: CrashedProps) {
  return (
    <div
      class={clsx(
        "absolute bottom-0 left-1/2 w-auto h-[90%] -translate-x-1/2",
        { ["hidden"]: !props.show }
      )}
    >
      <img
        src="/images/prison/crashed.webp"
        alt="/images/prison/crashed.webp"
        class="max-w-max w-auto h-full"
      />
      <img
        src="/images/prison/crashed-message.gif"
        alt="/images/prison/crashed-message.gif"
        class="absolute -top-[14%] left-0 w-auto h-auto"
      />
    </div>
  );
}

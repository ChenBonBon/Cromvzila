interface BioProps {
  avatar: string;
  name: string;
  description: string;
  onClose?: () => void;
}

export default function Bio(props: BioProps) {
  const { avatar, name, description, onClose } = props;

  return (
    <div class="w-screen h-screen bg-black bg-opacity-30 fixed top-0 left-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-72 h-1/2">
        <span class="absolute top-0 right-0 cursor-pointer" onClick={onClose}>
          Close
        </span>
        <div class="flex flex-col items-center gap-12 px-12 py-16">
          <img src={avatar} alt={avatar} class="w-20 h-20 rounded-full" />
          <div class="flex w-full gap-4">
            <label class="w-20">Name</label>
            <div class="flex-1">{name}</div>
          </div>
          <div class="flex w-full gap-4">
            <label class="w-20">Description</label>
            <div class="flex-1">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

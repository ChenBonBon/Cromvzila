import { Show, createSignal } from "solid-js";

export default function Project2() {
  const [staffVisible, setStaffVisible] = createSignal(false);

  function handleMouseOver() {
    setStaffVisible(true);
  }

  function handleMouseOut() {
    setStaffVisible(false);
  }

  return (
    <div class="relative">
      <img
        src="/images/my-projects/my-project-2/backend.webp"
        alt="/images/my-projects/my-project-2/backend.webp"
      />
      <img
        src="/images/my-projects/my-project-2/backend-staff.webp"
        alt="/images/my-projects/my-project-2/backend-staff.webp"
        class="absolute top-1/2 left-0 h-1/2 cursor-pointer"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <Show when={staffVisible()}>
        <img
          src="/images/my-projects/my-project-2/staff.webp"
          alt="/images/my-projects/my-project-2/staff.webp"
          class="absolute top-0 left-[48%] h-full"
        />
      </Show>
    </div>
  );
}

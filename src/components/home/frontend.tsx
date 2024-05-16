import { A } from "@solidjs/router";

export default function Frontend() {
  return (
    <div class="absolute left-0 top-0 w-full h-full z-10">
      <img
        src="/images/home/prison-frontend.gif"
        alt="/images/home/prison-frontend.gif"
        class="w-auto h-full"
      />
      <A
        href="/prison"
        class="absolute top-[79%] left-[22%] w-[8%] h-[15%] text-transparent"
      >
        Prison
      </A>
    </div>
  );
}

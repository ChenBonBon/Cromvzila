import { A } from "@solidjs/router";

export default function Wall() {
  return (
    <div class="absolute right-0 top-0 h-full z-20">
      <img
        src="/images/home/wall.webp"
        alt="/images/home/wall.webp"
        class="w-auto h-full"
      />
      <A href="/my-folio" class="absolute top-0 left-0">
        <img
          src="/images/home/wall-monitor.gif"
          alt="/images/home/wall-monitor.gif"
        />
      </A>
      <A href="/my-projects" class="absolute bottom-0 left-0">
        <img
          src="/images/home/wall-post.gif"
          alt="/images/home/wall-post.gif"
        />
      </A>
    </div>
  );
}

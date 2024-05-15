import Backend from "~/components/home/backend";
import L2D from "~/components/l2d";

export default function Home() {
  return (
    <main class="w-screen h-screen">
      <L2D />
      <div class="flex justify-center items-center w-screen h-screen bg-black">
        <Backend />
      </div>
    </main>
  );
}

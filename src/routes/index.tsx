import { MetaProvider, Title } from "@solidjs/meta";
import Backend from "~/components/home/backend";
import L2D from "~/components/l2d";
import Metas from "~/components/metas";

export default function Home() {
  return (
    <MetaProvider>
      <Title>Home - Cromvzila</Title>
      <Metas />
      <main class="w-screen h-screen">
        <L2D />
        <div class="flex justify-center items-center w-screen h-screen bg-black">
          <Backend />
        </div>
      </main>
    </MetaProvider>
  );
}

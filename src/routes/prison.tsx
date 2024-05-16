import { MetaProvider, Title } from "@solidjs/meta";
import Metas from "~/components/metas";
import Backend from "~/components/prison/backend";

export default function Prison() {
  return (
    <MetaProvider>
      <Title>Prison - Cromvzila</Title>
      <Metas />
      <main class="w-screen h-screen">
        <div class="flex justify-center items-center w-screen h-screen bg-black">
          <Backend />
        </div>
      </main>
    </MetaProvider>
  );
}

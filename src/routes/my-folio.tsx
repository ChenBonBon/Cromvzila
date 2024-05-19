import { MetaProvider, Title } from "@solidjs/meta";
import Metas from "~/components/metas";
import Backend from "~/components/my-folio/backend";

export default function MyFolio() {
  return (
    <MetaProvider>
      <Title>My folio - Cromvzila</Title>
      <Metas />
      <main class="w-screen h-screen">
        <div class="flex justify-center items-center w-screen h-screen bg-black">
          <Backend />
        </div>
      </main>
    </MetaProvider>
  );
}

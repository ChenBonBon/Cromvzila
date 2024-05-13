import { clientOnly } from "@solidjs/start";

const L2DComponent = clientOnly(() => import("./l2d-component"));

export default function L2D() {
  return <L2DComponent />;
}

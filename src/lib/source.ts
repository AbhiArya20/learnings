import { loader } from "fumadocs-core/source";
import { learnings } from "@/source";

export const source = loader({
  baseUrl: "/learnings",
  source: learnings.toFumadocsSource(),
});

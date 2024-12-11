import { createServer } from "./server";
import { log } from "@repo/logger";

const port = process.env.PORT || 5002;
const server = createServer();

server.listen(port, () => {
  log(`backend running on ${port}`);
});
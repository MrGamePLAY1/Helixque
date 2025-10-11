import { pubClient } from "./cache/redis";

export async function checkHealth() {
  try {
    await pubClient.ping();
    return { ok: true, redis: "connected" };
  } catch (error) {
    return { ok: false, redis: "disconnected", error: (error as Error).message };
  }
}

import redis, { RedisClient } from "redis";

let redisClient: RedisClient | null = null;

const getRedisClient = (url?: string) => {
  if (redisClient) {
    return redisClient;
  }
  redisClient = redis.createClient({ url: url });

  redisClient.on("error", (err) => {
    console.log("Redis error: ", err);
  });

  return redisClient;
};

export default getRedisClient;

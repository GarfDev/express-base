import 'redis';

declare module 'redis' {
  export interface RedisClient extends RedisClient {
    asyncGet(id: string): Promise<string | null>;
  }
}

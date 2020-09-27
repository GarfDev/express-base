import uniqid from 'uniqid';
import { getRedisClient } from '@/utils';

const initSession = async (requestIP: string): Promise<string> => {
  const redisClient = getRedisClient();
  const sessionID = uniqid() + uniqid();
  redisClient.set(sessionID, requestIP);
  redisClient.set(requestIP, sessionID);
  return sessionID;
};

export default initSession;

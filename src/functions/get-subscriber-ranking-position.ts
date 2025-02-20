import { redis } from "../redis/client"

interface GetSubscriberRankingPositionParams {
    subscriberId: string
}


export async function getSubscriberRankingPosition({
    subscriberId,
}:GetSubscriberRankingPositionParams) {
   const rank = await redis.zrevrank('referral:raking', subscriberId)

   if ( rank == null ) {
     return { position: null}
   }

   return { position: rank + 1 }
}



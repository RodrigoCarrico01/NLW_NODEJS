import { redis } from "../redis/client"

interface GetSubscriberInvitesCountParams {
    subscriberId: string
}


export async function getSubscriberInvitesCount({
    subscriberId,
}:GetSubscriberInvitesCountParams) {
   const count = await redis.zscore('referral:raking', subscriberId)

   return { count: count ? Number.parseInt(count) : 0 }
}



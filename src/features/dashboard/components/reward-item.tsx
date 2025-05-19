import { Button } from "@/_components/ui/button";
import { Card } from "@/_components/ui/card";
import { claimReward } from "@/app/actions/claimReward";
import Image from "next/image";
import { ClaimRewardButton } from "./claim-reward-button";

export const RewardItem = ({
  reward,
  customer_points,
}: {
  reward: SingleReward;
  customer_points: number;
}) => {
  return (
    <Card className="px-4 py-3 gap-2.5">
      <div className="flex items-center gap-4">
        <Image
          src={reward.brand.logo}
          alt={reward.brand.name}
          width={48}
          height={48}
          className="size-12 aspect-square rounded-full object-center object-contain flex-none"
          loading="lazy"
        />
        <div className="flex flex-col flex-1 items-start">
          <p className="text-sm/6 text-text-black font-medium">
            {reward.brand.name}
          </p>
          <p className="line-clamp-2 text-xs/5 text-[#6B7280]">
            {reward.description}
          </p>
        </div>
      </div>
      <div className="flex w-full gap-3.5 justify-between items-center">
        <div className="flex gap-0.5 items-center">
          <p className="text-text-black text-sm/6 font-semibold">
            {reward.points}
          </p>
          <p className="text-[#6B7280] text-xs/5">points</p>
        </div>
        <ClaimRewardButton
          reward_id={reward.id}
          customer_points={customer_points}
          reward_point={reward.points}
          isClaimed={reward.claimed}
        />
      </div>
    </Card>
  );
};

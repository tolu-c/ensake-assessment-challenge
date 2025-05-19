"use client";

import { Button } from "@/_components/ui/button";
import { claimReward } from "@/app/[locale]/actions/claimReward";
import { toast } from "sonner";

export const ClaimRewardButton = ({
  reward_id,
  customer_points,
  reward_point,
  isClaimed,
}: {
  reward_id: number;
  customer_points: number;
  reward_point: number;
  isClaimed: boolean;
}) => {
  return (
    <Button
      className="text-xs/5 rounded-lg bg-[#2563EB] w-max"
      disabled={isClaimed}
      onClick={async () => {
        if (customer_points <= reward_point) {
          toast("Insufficient points");
        } else {
          await claimReward(reward_id)
            .then((res) => {
              toast(res?.message);
            })
            .catch((err) => toast(err?.message));
        }
      }}
    >
      Claim Reward
    </Button>
  );
};

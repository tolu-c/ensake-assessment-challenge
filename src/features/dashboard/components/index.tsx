import { Card } from "@/_components/ui/card";
import { GiftIcon, StarIcon } from "@/assets/icons";
import { RewardList } from "./reward-list";

export const Dashboard = ({ rewards }: { rewards: Reward }) => {
  const totalRewards = rewards?.rewards?.length;
  const noOfClaimableRewards = rewards?.rewards?.filter(
    (reward) => reward.claimed === false,
  ).length;

  return (
    <div className="w-full p-8 flex flex-col items-start gap-8">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="w-full flex items-start justify-between">
            <div className="flex flex-col items-start gap-2">
              <p className="text-base/7 text-[#374151] font-medium">
                Your Points Balance
              </p>
              <div className="flex items-end gap-1 pr-4.5">
                <p className="text-[#111827] font-bold text-[30px] leading-10">
                  {rewards.customer_points}
                </p>
                <p className="text-sm/6 text-[#6B7280]">points</p>
              </div>
            </div>
            <div className="size-12 rounded-full bg-[#EFF6FF] flex-none flex items-center justify-center">
              <StarIcon className="text-[#2563EB] size-6" />
            </div>
          </div>
          <div className="w-full border-t border-[#F3F4F6] pt-4 flex flex-col items-start">
            <p className="text-xs/5 text-[#4B5563]">
              Next tier upgrade in 750 points
            </p>
          </div>
        </Card>
        <Card>
          <div className="w-full flex items-start justify-between">
            <div className="flex flex-col items-start gap-2">
              <p className="text-base/7 text-[#374151] font-medium">
                Available Rewards
              </p>
              <div className="flex items-end gap-1 pr-4.5">
                <p className="text-[#111827] font-bold text-[30px] leading-10">
                  {noOfClaimableRewards}
                </p>
                <p className="text-sm/6 text-[#6B7280]">rewards</p>
              </div>
            </div>
            <div className="size-12 rounded-full bg-[#FAF5FF] flex-none flex items-center justify-center">
              <GiftIcon className="text-[#9333EA] size-6" />
            </div>
          </div>
          <div className="w-full border-t border-[#F3F4F6] pt-4 flex flex-col items-start">
            <div className="w-full flex justify-between">
              <p className="text-xs/5 text-[#4B5563]">
                Rewards claimed this month
              </p>
              <p className="text-xs/5 text-[#111827]">
                {noOfClaimableRewards} of {totalRewards}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <RewardList
        rewards={rewards.rewards}
        customer_points={rewards.customer_points}
      />
    </div>
  );
};

import { RewardItem } from "./reward-item";

export const RewardList = ({
  rewards,
  customer_points,
}: {
  rewards: SingleReward[];
  customer_points: number;
}) => {
  return (
    <div className="w-full flex flex-col items-start gap-6">
      <div className="w-full flex items-start justify-between">
        <h3 className="text-xl/8 font-semibold text-text-black">
          Claimable Rewards
        </h3>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-2">
        {rewards.map((reward) => (
          <RewardItem
            key={reward.id}
            reward={reward}
            customer_points={customer_points}
          />
        ))}
      </div>
    </div>
  );
};

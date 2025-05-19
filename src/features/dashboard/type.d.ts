type Reward = {
  customer_points: number;
  rewards: SingleReward[];
};

type SingleReward = {
  id: number;
  brand: {
    id: number;
    name: string;
    logo: string;
    address: string;
  };
  points: number;
  description: string;
  claimed: boolean;
};

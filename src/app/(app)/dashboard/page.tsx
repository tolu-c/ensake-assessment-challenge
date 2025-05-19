import { getRewards } from "@/app/actions/getRewards";
import { Dashboard } from "@/features/dashboard/components";
import { Suspense } from "react";

const DashboardPage = async () => {
  const rewards = await getRewards();
  return (
    <Suspense fallback={<div>loading skeleton</div>}>
      <Dashboard rewards={rewards} />
    </Suspense>
  );
};

export default DashboardPage;

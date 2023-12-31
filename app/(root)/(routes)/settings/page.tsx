// import { SubscriptionButton } from "@/components/subscription-button";
// import { checkSubscription } from "@/lib/subscription";

import { subscribe } from "diagnostics_channel";

const SettingsPage = async () => {

  return ( 
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Settings</h3>
      <div className="text-muted-foreground text-sm flex justify-center items-center">
        {/* {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."} */}
      </div>
      {/* <SubscriptionButton isPro={isPro} /> */}
      You are currently on a free plan
    </div>
   );
}
 
export default SettingsPage;
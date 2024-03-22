"use client";
import Discussion from "@/components/discussion";
import Markets from "@/components/markets";
import MobileScreen from "@/components/mobile-screen";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function Home() {
  const [discussionActivated, setDiscussionActive] = useState(true);
  const [marketActivated, setMarketActive] = useState(false);

  return (
    <>
      <div className="flex gap-5">
        <Sidebar />

        <div className="hidden md:flex">
          <div className="flex gap-5 mt-5">
            <div className="w-[70%]">
              <Discussion />
            </div>
            <div className="w-[30%]">
              <Markets />
            </div>
          </div>
        </div>

        {/* tab and mobile view 📱*/}
        <div className="w-full flex md:hidden">
          <MobileScreen
            setDiscussionActive={setDiscussionActive}
            discussionActivated={discussionActivated}
            setMarketActive={setMarketActive}
            marketActivated={marketActivated}
          />
        </div>
      </div>
      <div className="md:hidden flex">
        {discussionActivated && <Discussion />}
        {marketActivated && <Markets />}
      </div>
    </>
  );
}

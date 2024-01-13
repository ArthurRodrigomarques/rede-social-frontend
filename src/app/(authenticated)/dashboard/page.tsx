"use client"

import { useEffect, useState } from 'react';

import Feed from "@/components/Feed";
import SideBarDashboard from "@/components/SideBarDashboard";
import Message from '@/components/Message';

export default function Dashboard() {

  const [selectedItem, setSelectedItem] = useState<string>("Feed");

  return (
    <div>
      <div className="flex">
        <section className="w-1/4 border-r-4 border-secondary fixed h-screen lg:block hidden">
          <SideBarDashboard setSelectedItem={setSelectedItem} />
        </section>

        <div className="w-full lg:w-3/4 lg:ml-[25%] flex text-center justify-center lg:block">
    {selectedItem === "Feed" && <Feed />}
    {selectedItem === "Message" && <Message />}     
</div>

      </div>
    </div>
  );
}

"use client"

import { useEffect, useState } from 'react';

import Feed from "@/components/Feed";
import SideBarDashboard from "@/components/SideBarDashboard";
import Message from '@/components/Message';

export default function Dashboard() {

  const [selectedItem, setSelectedItem] = useState<string>("Feed");


  return (
    <div>
      <div className="flex min-h-screen">
        <section className="w-1/4 border-r-4 border-secondary fixed h-screen">
          <SideBarDashboard setSelectedItem={setSelectedItem} />
        </section>

        <div className="w-3/4 ml-[25%] ml-1/4 flex text-center justify-center">
          {selectedItem === "Feed" && <Feed />}
          {selectedItem === "Message" && <Message />}     
        </div>
      </div>
    </div>
  );
}


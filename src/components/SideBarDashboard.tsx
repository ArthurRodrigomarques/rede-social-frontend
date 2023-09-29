"use client"

import { CreateNewPost } from "./CreateNewPost";
import { Dispatch, SetStateAction } from "react";

interface SideBarDashboardProps {
  setSelectedItem: Dispatch<SetStateAction<string>>;
}

export default function SideBarDashboard({ setSelectedItem }: SideBarDashboardProps) {
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <ul className="text-center mt-96">
        <li className="cursor-pointer" onClick={() => handleItemClick("Feed")}>Feed</li>
        <li className="cursor-pointer" onClick={() => handleItemClick("Message")}>Mensagens</li>
      </ul>
      <CreateNewPost />
    </div>
  );
}

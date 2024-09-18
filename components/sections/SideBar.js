"use client"

import { useState } from "react"

import { BsChevronDoubleRight } from "react-icons/bs";

export default function SideBar() {
  const [opened, setOpened] = useState(false);

  function handleOpen() {
    setOpened(!opened);
  };

  return(
    <div className={`w-2/12 h-screen bg-green-900 relative ${opened ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 transition-all duration-500 p-3`}>
      <div className="w-full h-full bg-camouflage rounded-xl bg-cover bg-no-repeat bg-center"></div>
      <button onClick={handleOpen} className="bg-green-900 text-white absolute left-full text-3xl py-2 pr-2 rounded-r-2xl top-1/2 -translate-y-1/2"><BsChevronDoubleRight className={`${opened ? "rotate-180" : "rotate-0"} transition-all duration-500`} /></button>
    </div>
  )
}

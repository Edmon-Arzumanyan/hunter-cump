"use client";

import { navigation } from "@/data/navigation";
import Link from "next/link";
import { useState } from "react";

import { BsChevronDoubleRight } from "react-icons/bs";

export default function SideBar() {
  const [opened, setOpened] = useState(false);

  function handleOpen() {
    setOpened(!opened);
  }

  return (
    <div
      className={`flex h-screen w-2/12 flex-col justify-between gap-12 bg-camouflage bg-cover bg-center bg-no-repeat ${opened ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-0 p-3 transition-all duration-500 max-lg:w-full`}
    >
      <div className="flex max-h-full flex-col gap-2 overflow-y-auto rounded-xl lg:w-full">
        {navigation.links.map((elem, index) => (
          <Link
            href={elem.path}
            key={index}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/50 p-2 font-heading text-xl font-bold tracking-widest text-green-950 hover:bg-white"
            onClick={handleOpen}
          >
            {elem.icon}
            <span>{elem.title}</span>
          </Link>
        ))}
      </div>
      <div className="flex w-full items-center justify-between">
        <Link
          href={"/users/sign_in"}
          onClick={handleOpen}
          className="w-full rounded-lg bg-white/50 p-2 text-center font-heading text-xl font-bold tracking-widest text-green-950 hover:bg-white"
        >
          Sign In
        </Link>
      </div>
      <button
        onClick={handleOpen}
        className="absolute left-full top-1/2 -translate-y-1/2 rounded-r-2xl bg-green-950 py-2 pr-2 text-3xl text-white"
      >
        <BsChevronDoubleRight
          className={`${opened ? "rotate-180" : "rotate-0"} transition-all duration-500`}
        />
      </button>
    </div>
  );
}

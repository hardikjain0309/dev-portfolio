"use client";
import { delay } from "@/src/utils/asyncUtil";
import { PropsWithChildren, useState, useEffect } from "react";

const showContentDelay = 1900;
const boxClassBeforeShow = "opacity-0 scale-75";
const boxClassAfterShow = "opacity-100 scale-100 transition duration-[700ms] ease-out";

function GridBox({ children }: PropsWithChildren) {
  const [showContent, setShowContent] = useState(false);

  const showContentAfterDelay = async () => {
    await delay(showContentDelay);
    setShowContent(true);
  }

  useEffect(() => {
    showContentAfterDelay();
  }, [])

  return <div className={`h-full ${showContent ? boxClassAfterShow : boxClassBeforeShow}`}>
    <div className="relative bg-background h-full">
      <div className="absolute w-full h-full rounded-3xl opacity-25 box-shadow"></div>
      <div className="flex flex-col gap-4 p-8 h-full">
        { children }
      </div>
    </div>
  </div>
}

export default GridBox;
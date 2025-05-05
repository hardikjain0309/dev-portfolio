"use client";
import { PropsWithChildren, useState, useEffect } from "react";
const boxClassBeforeShow = "opacity-0 scale-75";
const boxClassAfterShow = "opacity-100 scale-100 transition duration-[700ms] ease-out delay-200";

function GridBox({ children }: PropsWithChildren) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true));
  }, [])

  return <div className={`h-full ${showContent ? boxClassAfterShow : boxClassBeforeShow}`}>
    <div className="relative bg-background h-full shadow-box rounded-3xl">
      <div className="flex flex-col gap-4 p-8 h-full">
        { children }
      </div>
    </div>
  </div>
}

export default GridBox;
import { PropsWithChildren } from "react";
import ShowOnScrollIntoView from "./showOnScrollIntoView";
import Link from "next/link";

interface IGridBoxProps {
  href?: string;
  className?: string;
}

function GridBox({ children, href, className }: PropsWithChildren<IGridBoxProps>) {
  let boxContent = <div className={`relative bg-background h-full shadow-box rounded-3xl w-fit ${className || ""}`}>
    <div className="flex flex-col gap-4 p-8 h-full">
      { children }
    </div>
  </div>

  if (href) {
    boxContent = <Link href={ href } className="h-full">
      { boxContent }
    </Link>
  }
  
  return <ShowOnScrollIntoView>
    { boxContent }
  </ShowOnScrollIntoView>
}

export default GridBox;
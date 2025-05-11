import { PropsWithChildren } from "react";
import ShowOnScrollIntoView from "./showOnScrollIntoView";
import Link from "next/link";

interface IGridBoxProps {
  href?: string;
}

function GridBox({ children, href }: PropsWithChildren<IGridBoxProps>) {
  let boxContent = <div className="relative bg-background h-full shadow-box rounded-3xl">
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
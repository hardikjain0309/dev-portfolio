import { PropsWithChildren } from "react";
import ShowOnScrollIntoView from "./showOnScrollIntoView";

function GridBox({ children }: PropsWithChildren) {
  return <ShowOnScrollIntoView>
    <div className="relative bg-background h-full shadow-box rounded-3xl">
      <div className="flex flex-col gap-4 p-8 h-full">
        { children }
      </div>
    </div>
  </ShowOnScrollIntoView>
}

export default GridBox;
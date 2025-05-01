import { PropsWithChildren } from "react";
import "./marqueeAnimation.css";

function MarqueeAnimation({ children }: PropsWithChildren) {
  const renderAnimatedContent = (duplicate?: boolean) => {
    return <span className={`flex gap-2 items-center whitespace-nowrap ${duplicate ? "marquee-duplicate" : "marquee"}`}>
      { children }
    </span>
  }

  return ( <div className="flex max-w-full whitespace-nowrap overflow-hidden">
      <span className="relative">
        {renderAnimatedContent()}
        {renderAnimatedContent(true)}
      </span>
    </div> );
}

export default MarqueeAnimation;
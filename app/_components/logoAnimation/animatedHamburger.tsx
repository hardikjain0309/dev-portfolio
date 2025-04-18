import * as React from 'react';

interface IAnimatedHamburgerProps {
  open: boolean;
  onClick: () => void;
}

const beforeOpenLineClass = "bg-primary w-6 h-0.5 rounded-full transition-all duration-500 ease-in-out";

function Animatedhamburger(props: IAnimatedHamburgerProps) {
  const getLineClass = (index: number) => {
    if (props.open) {
      switch (index) {
        case 0:
          return beforeOpenLineClass + " w-8 h-0.5 rotate-45 translate-y-2.5";
        case 1:
          return beforeOpenLineClass + " w-0";
        case 2:
          return beforeOpenLineClass + " w-8 h-0.5 -rotate-45 -translate-y-2.5 ";
        default:
          return beforeOpenLineClass;
      }
    }
    return beforeOpenLineClass;
  }

  return ( <button className="flex flex-col gap-2 justify-center items-center" onClick={props.onClick}>
    {[0, 1, 2].map(index => <span key={index} className={getLineClass(index)}></span>)}
  </button>);
}

export default Animatedhamburger;
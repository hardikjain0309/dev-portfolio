import * as React from 'react';

interface IAnimatedHamburgerProps {
  open: boolean;
  onClick: () => void;
}

const beforeOpenLineClass = "bg-primary h-0.5 rounded-full transition-all duration-500 ease-in-out";

function Animatedhamburger(props: IAnimatedHamburgerProps) {
  const { open } = props;
  const getLineClass = (index: number) => {
    switch (index) {
      case 0:
        return beforeOpenLineClass + (open ? " w-8 rotate-45 translate-y-2.5" : " w-6");
      case 1:
        return beforeOpenLineClass + (open ? " w-0" : " w-6");
      case 2:
        return beforeOpenLineClass + (open ? " w-8 h-0.5 -rotate-45 -translate-y-2.5" : " w-6");
      default:
        return beforeOpenLineClass;
    }
  }

  return ( <button className="flex flex-col gap-2 justify-center items-center" onClick={props.onClick}>
    {[0, 1, 2].map(index => <span key={index} className={getLineClass(index)}></span>)}
  </button>);
}

export default Animatedhamburger;
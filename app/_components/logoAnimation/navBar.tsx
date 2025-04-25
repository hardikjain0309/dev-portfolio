"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import LogoAnimation from "./logoAnimation";
import { delay } from "@/src/utils/asyncUtil";
import { Roboto } from "next/font/google";
import Animatedhamburger from "./animatedHamburger";
import { useClickOutside } from "@/src/utils/customHooks";

enum NavBarItemKeys {
  Home = "Home",
  About = "About",
  Works = "Experience",
  Projects = "Projects",
  Contact = "Contact"
}

const InitialsFont = Roboto({
  weight: "500",
  subsets: ["latin"]
});

const showNavItemsDelay = 1900;

const activeKey = NavBarItemKeys.Home;
const navBarItemClass = "font-thin cursor-pointer max-w-fit";
const hoverTransitonClass = "transition ease-in-out hover:scale-110 hover:text-secondary active:text-tertiary";
const activeItemClass = "text-primary";
const inactiveItemClass = "text-tertiary";
const beforeShowContainerClass = "opacity-0 -translate-y-full";
const afterShowContainerClass = "opacity-100 -translate-y-0 transition duration-500 ease-in-out";
const navMenuClass = "flex flex-col gap-4 items-center transition-all duration-500 ease-in-out w-full p-4 md:hidden";
const expandedNavMenuClass = "opacity-100 overflow-visible";
const collapsedNavMenuClass = "scale-y-0 -translate-y-[200px] opacity-0 overflow-hidden p-0";


function NavBar() {
  const [showNavItems, setShowNavItems] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navBarContainerRef = useRef<HTMLDivElement>(null);
  const showNavItemsPostDelay = useMemo(() => async () => {
    await delay(showNavItemsDelay);
    setShowNavItems(true);
  }, []);

  useEffect(() => {
    showNavItemsPostDelay();
  }, [showNavItemsPostDelay]);

  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }

  const onClickOutside = () => {
    setIsMenuOpen(false);
  }

  useClickOutside(onClickOutside, navBarContainerRef);


  const renderInitials = () => {
    const beforeTransitionClass = "-left-16";
    const afterTransitionClass = "left-0 transition-left duration-300 delay-200 ease-in-out";
    const initialsClass = showNavItems ? afterTransitionClass : beforeTransitionClass;
    const initialsEl = <span className={ `text-4xl  text-primary leading-none absolute ${InitialsFont.className} ${initialsClass}` }>H.J.</span>;

    return <div className="overflow-hidden relative w-16 h-8">{ initialsEl }</div>;
  }

  const renderNavItem = (key: NavBarItemKeys) => {
    const itemStateClass = (activeKey === key ? activeItemClass : inactiveItemClass);
    return (
      <a key={key} className={ `${itemStateClass} ${ navBarItemClass } ${ hoverTransitonClass }` }>
        { key } 
      </a>
    );
  };

  const renderNavItems = () => {
    return Object.values(NavBarItemKeys).map((key) => renderNavItem(key));
  }

  const renderCollapsedNavBarItems = () => {
    return <span className="flex md:hidden h-8 items-center">
      <Animatedhamburger open={ isMenuOpen } onClick={ toggleMenu }/>
    </span>
  }

  const renderUnCollapsedNavBarItems = () => {
    return <div className="hidden items-center gap-8 md:flex">
      { renderNavItems() }
    </div>
  }

  const renderNavMenu = () => {
    return <div className={`${navMenuClass} ${isMenuOpen ? expandedNavMenuClass : collapsedNavMenuClass}`}>
      { renderNavItems()}
    </div>
  }

  const renderNavBarItems = () => {
    return <div className={ ( showNavItems ? afterShowContainerClass : beforeShowContainerClass ) }>
      { showNavItems && <>
        { renderUnCollapsedNavBarItems() }
        { renderCollapsedNavBarItems() }
      </>  }
    </div>
  }

  return (<div ref={ navBarContainerRef }>
    <div className={ `${ showNavItems ? "flex items-center justify-between px-8 py-4" : "px-8 py-4" }` }>
      <div className={showNavItems ? "flex gap-2 items-center h-8" : ""}>
        <LogoAnimation />
        { renderInitials() }
      </div>
      { renderNavBarItems() }
    </div>
    { renderNavMenu() }
  </div>);
}

export default NavBar;
"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import LogoAnimation from "./logoAnimation";
import { delay } from "@/src/utils/asyncUtil";
import { Roboto } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
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

const showNavItemsDelay = 1200;

const activeKey = NavBarItemKeys.Home;
const navBarItemClass = "font-thin cursor-pointer";
const hoverTransitonClass = "transition ease-in-out hover:scale-110 hover:text-secondary active:text-tertiary";
const activeItemClass = "text-primary";
const inactiveItemClass = "text-tertiary";
const beforeShowContainerClass = "opacity-0 -translate-y-full";
const afterShowContainerClass = "opacity-100 -translate-y-0 transition duration-500 ease-in-out";
const navPanelButtonClass = "hover:bg-background hover:text-secondary hover:transition";


function NavBar() {
  const [showNavItems, setShowNavItems] = useState(false);
  const [isPanelExpanded, setIsPanelExpanded] = useState(false);
  const panelContainerRef = useRef<HTMLDivElement|null>(null);
  const panelShowedOnce = useRef(false);

  const showNavItemsPostDelay = useMemo(() => async () => {
    await delay(showNavItemsDelay);
    setShowNavItems(true);
  }, []);

  useEffect(() => {
    showNavItemsPostDelay();
  }, [showNavItemsPostDelay]);

  const onHamburgerClick = () => {
    setIsPanelExpanded((prev) => !prev);
    if (!panelShowedOnce.current) {
      panelShowedOnce.current = true;
    }
  }

  const onCloseClick = () => {
    setIsPanelExpanded(false);
  }

  const onPanelClickOutside = () => {
    setIsPanelExpanded(false);
  }

  useClickOutside(onPanelClickOutside, panelContainerRef);

  const renderInitials = () => {
    const beforeTransitionClass = "-left-16";
    const afterTransitionClass = "left-0 transition-left duration-300 delay-200 ease-in-out";
    const initialsClass = showNavItems ? afterTransitionClass : beforeTransitionClass;
    const initials = showNavItems ? "H.J." : "";
    const initialsEl = <span className={ `text-4xl  text-primary leading-none absolute ${InitialsFont.className} ${initialsClass}` }>{ initials }</span>;

    return <div className="overflow-hidden relative w-16 h-8">{ initialsEl }</div>;
  }

  const renderNavItem = (key: NavBarItemKeys) => {
    const itemStateClass = activeKey === key ? activeItemClass : inactiveItemClass;
    return (
      <a key={key} className={`${itemStateClass} ${ navBarItemClass } ${ hoverTransitonClass }` }>
        { key } 
      </a>
    );
  };

  const renderNavBarPanel = () => {
    if (!panelShowedOnce.current) {
      return null;
    }
    const panelExpandedClass = isPanelExpanded ? "translate-x-0 opacity-1": "translate-x-full opacity-0";
    const panelClass = "absolute -top-8 -right-8 w-48 h-screen bg-body flex flex-col panel-container transition duration-500 ease-in-out";
    return <div className={ `${ panelClass } ${ panelExpandedClass }` } ref={ panelContainerRef}>
      <button className={ "self-end p-4 " + navPanelButtonClass } onClick={ onCloseClick }><IoClose /></button>
      { Object.values(NavBarItemKeys).map((key) => <a key={key} className={ "p-2 px-4 cursor-pointer " + navPanelButtonClass }>{ key }</a>) }
    </div>
  }

  const renderCollapsedNavBarItems = () => {
    return <span className="flex md:hidden h-10 items-center">
      <button className="hover:text-secondary" onClick={ onHamburgerClick }><RxHamburgerMenu /></button>
      { renderNavBarPanel()}
    </span>
  }

  const renderUnCollapsedNavBarItems = () => {
    return <div className="hidden items-center gap-8 md:flex">
      { Object.values(NavBarItemKeys).map((key) => renderNavItem(key)) }
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

  return (<div className={ `${ showNavItems ? "flex items-center justify-between" : "" }` }>
      <div className={showNavItems ? "flex gap-2 items-center" : ""}>
        <LogoAnimation />
        { renderInitials() }
      </div>
      { renderNavBarItems() }
  </div>);
}

export default NavBar;
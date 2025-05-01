"use client";
import { IoChevronForwardOutline } from "react-icons/io5";
import "./arrowAnimation.css";

function ArrowAnimation() {
  return ( <div className="flex items-center text-3xl arrow-animation-ctr">
    <IoChevronForwardOutline className="left-chevron" />
    <IoChevronForwardOutline className="right-chevron" />
  </div> );
}

export default ArrowAnimation;
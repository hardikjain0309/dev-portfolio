import Image from "next/image";
import profilePhoto from "../public/img/profile.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { LuBriefcase } from "react-icons/lu";
import { FaReact } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoRedux } from "react-icons/bi";
import { IoAccessibilityOutline } from "react-icons/io5";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiNutanix } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { CSSProperties } from "react";
import ArrowAnimation from "./_components/arrowAnimation/arrowAnimation";
import GridBox from "./_components/gridBox";
import MarqueeAnimation from "./_components/marqueeAnimation.tsx/margueeAnimation";

const profileContainerStyle: CSSProperties = {
  background: "linear-gradient(90deg, #5B78F6 -15%, #C2EBFF 58%, #5B78F6 97%)",
  overflow: "hidden"
}

export default function Home() {
  const renderRedirectableTile = (content: React.ReactNode, title: React.ReactNode) => {
    return <div className="flex flex-col gap-4 h-full justify-between">
      { content }
      <div className="flex justify-between">
        <span className="text-xl text-secondary   font-medium block">{ title }</span>
        <ArrowAnimation />
      </div>
    </div>
  }

  const renderAboutMeBox = () => {
    return renderRedirectableTile(
      <div className="flex gap-8 flex-wrap justify-center -mb-11">
        <div style={ profileContainerStyle } className="flex justify-center items-center min-w-[220px] rounded-ss-3xl rounded-ee-3xl max-w-56 ">
          <Image src={ profilePhoto.src } alt="Profile" width="320" height="334" className="relative top-3"/>
        </div>
        <div className="flex flex-col flex-1 min-w-[200px] pt-4 shrink-0">
          <div className="flex-col">
            <span className="text-4xl font-medium mb-4 block">Hardik Jain</span>
            <div className="flex flex-col gap-1.5">
              <span className="flex gap-2 text-secondary items-center">
                <LuBriefcase />
                <span className="text-secondary">Front-end Developer</span>
              </span>
              <span className="flex gap-2 text-secondary items-center">
                <FaRegBuilding />
                <span className="text-secondary">Nutanix</span>
              </span>
              <span className="flex gap-2 text-secondary items-center">
                <IoLocationOutline />
                <span>Bangalore</span>
              </span>
            </div>
          </div>
        </div>
      </div>,
      ""
    );
  }

  const renderSkillsBox = () => {
    return renderRedirectableTile(
      <div className="flex gap-4 text-6xl flex-1 justify-center items-center">
        <FaReact />
        <BiLogoRedux />
        <TbBrandTypescript />
        <IoLogoJavascript />
        <IoAccessibilityOutline />
        <AiOutlineHtml5 />
      </div>,
      "Skills"
    );
  }

  const renderExperienceTile = (metric: React.ReactNode, title: string) => {
    return <div className="relative bg-background rounded-3xl">
      <div className="absolute w-full h-full rounded-3xl opacity-20 box-shadow"></div>
      <div className="flex flex-col gap-4 p-4 min-w-20 items-center justify-between h-full">
        <span className="font-medium text-4xl">{ metric }</span>
        <span className="text-secondary text-sm md:text-normal">{ title }</span>
      </div>
    </div>
  }

  const renderExperienceBox = () => {
    return renderRedirectableTile(
      <div className="flex gap-4 md:gap-8">
        { renderExperienceTile(<div className="flex gap-0 items-center">
            <span className="block text-4xl">7</span>
            <span className="block text-2xl">+</span>
          </div>, "Years") }
        { renderExperienceTile("3", "Teams") }
        { renderExperienceTile(<div className="flex flex-col gap-2 items-center">
          <span className="block text-4xl">2</span>
        </div>, "Companies") }
      </div>,
      <div className="flex gap-4 items-center">
        <span className="block">
          Experience
        </span>
        <span className="flex gap-2 text-lg">
          <span className="block"><SiNutanix /></span>
          <span className="block"><BsMicrosoft /></span>
        </span>
      </div>
    );
  }

  const renderCurrentWorkBox = () => {
    return <MarqueeAnimation>
        <span>Current Team: <span className="font-medium">Nutanix Move</span></span>
        <span className="flex text-lg"><LuDot /></span>
        <span>Current side project: <span className="font-medium">This Dev Portfolio</span></span>
        <span className="flex text-lg"><LuDot /></span>
        <span></span>
    </MarqueeAnimation>
  }

  const renderProfilesBox = () => {
    return null;
  }

  const renderContactBox = () => {
    return null;
  }

  return (<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div className="col-span-2 row-span-3">
      <GridBox>
        { renderAboutMeBox() }
      </GridBox>
    </div>
    <div className="col-span-2">
      <GridBox>
        { renderCurrentWorkBox() }
      </GridBox>
    </div>
    <div className="col-span-2">
      <GridBox>
        { renderSkillsBox() }
      </GridBox>
    </div>
    <div className="col-span-2">
      <GridBox>
        { renderExperienceBox() }
      </GridBox>
    </div>
    <div className="col-span-2">
      <GridBox>
        { renderProfilesBox() }
      </GridBox>
    </div>
    <div className="col-span-2">
      <GridBox>
        { renderContactBox() }
      </GridBox>
    </div>
  </div>);
}

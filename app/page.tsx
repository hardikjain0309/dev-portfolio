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
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
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
    return <div className="flex flex-col gap-6 h-full justify-between">
      { content }
      <div className="flex justify-between">
        <span className="text-xl text-secondary   font-medium block">{ title }</span>
        <ArrowAnimation />
      </div>
    </div>
  }

  const renderAboutMeBox = () => {
    return renderRedirectableTile(
      <div className="flex gap-8 flex-col flex-wrap items-center sm:flex-row sm:items-start justify-center -mb-11">
        <div style={ profileContainerStyle } className="flex justify-center items-center min-w-[220px] rounded-ss-3xl rounded-ee-3xl max-w-56 ">
          <Image src={ profilePhoto.src } alt="Profile" width="320" height="334" className="relative top-3"/>
        </div>
        <div className="flex flex-col flex-1 flex-grow pt-4 shrink-0 self-start min-w-[140px]">
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
    return <div className="relative bg-background flex-1 max-w-28 shadow-box rounded-3xl">
      <div className="flex flex-col gap-4 p-4 min-w-20 items-center justify-between h-full">
        <span className="font-medium text-4xl">{ metric }</span>
        <span className="text-secondary text-normal">{ title }</span>
      </div>
    </div>
  }

  const renderExperienceBox = () => {
    return renderRedirectableTile(
      <div className="flex gap-8 flex-wrap justify-center">
        { renderExperienceTile(<div className="flex gap-0 items-center">
            <span className="block text-4xl">7</span>
            <span className="block text-2xl">+</span>
          </div>, "Years") }
        { renderExperienceTile("3", "Teams") }
        { renderExperienceTile(<div className="flex gap-4 items-center">
          <span className="block text-4xl">2</span>
          <span className="flex flex-col gap-2 text-lg">
            <span className="block"><SiNutanix /></span>
            <span className="block"><BsMicrosoft /></span>
          </span>
        </div>, "Companies") }
      </div>,
      <div className="flex gap-4 items-center">
        <span className="block">
          Experience
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

  const renderProfileCircle = (icon: React.ReactNode, link: string) => {
    return <a className="p-6 rounded-full shadow-box border-primary border-solid border-[1px] border-opacity-10 bg-opacity-20  hover:bg-primary hover:text-background transition-all duration-500" href={ link } target="_blank">
      <span className="text-4xl">
        { icon }
      </span>
    </a>
  }

  const renderProfilesBox = () => {
    return renderRedirectableTile(<div className="flex gap-4 justify-center items-center">
      { renderProfileCircle(<FaGithub />, "https://github.com/hardikjain0309" ) }
      { renderProfileCircle(<FaLinkedin />, "https://www.linkedin.com/in/hardikjain96/" ) }
      { renderProfileCircle(<MdDownload />, "#" ) }
    </div>, "Contact");
  }

  return (<div className="py-8 px-8 max-w-screen-[1170px] grid grid-cols-4 gap-8">
    <div className="col-span-4 lg:col-span-2 row-span-2">
      <GridBox>
        { renderAboutMeBox() }
      </GridBox>
    </div>
    <div className="col-span-4 lg:col-span-2">
      <GridBox>
        { renderCurrentWorkBox() }
      </GridBox>
    </div>
    <div className="col-span-4  md:col-span-2">
      <GridBox>
        { renderSkillsBox() }
      </GridBox>
    </div>
    <div className="col-span-4  md:col-span-2">
      <GridBox>
        { renderExperienceBox() }
      </GridBox>
    </div>
    <div className="col-span-4 lg:col-span-2">
      <GridBox>
        { renderProfilesBox() }
      </GridBox>
    </div>
  </div>);
}

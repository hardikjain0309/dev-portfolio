import Image from "next/image";
import profilePhoto from "../public/img/profile.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { LuBriefcase } from "react-icons/lu";
import { LuDot } from "react-icons/lu";
import { MdDownload } from "react-icons/md";
import { CSSProperties } from "react";
import ArrowAnimation from "./_components/arrowAnimation/arrowAnimation";
import GridBox from "./_components/gridBox";
import MarqueeAnimation from "./_components/marqueeAnimation.tsx/margueeAnimation";
import { globalConfig, SocialProfiles } from "@/src/config/globalConfig";
import { LogosMap } from "@/src/utils/iconUtil";

const profileContainerStyle: CSSProperties = {
  background: "linear-gradient(90deg, #5B78F6 -15%, #C2EBFF 58%, #5B78F6 97%)",
  overflow: "hidden"
}

const {
  profile: {
    name,
    jobTitle,
    currentCompany,
    location
  },
  workInfo: {
    currentTeam,
    currentSideProject,
    companies,
    experienceInYears,
    numTeams,
    numCompanies,
    skills
  }
 } = globalConfig;

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
            <span className="text-4xl font-medium mb-4 block">{ name }</span>
            <div className="flex flex-col gap-1.5">
              <span className="flex gap-2 text-secondary items-center">
                <LuBriefcase />
                <span className="text-secondary">{ jobTitle }</span>
              </span>
              <span className="flex gap-2 text-secondary items-center">
                <FaRegBuilding />
                <span className="text-secondary">{ currentCompany }</span>
              </span>
              <span className="flex gap-2 text-secondary items-center">
                <IoLocationOutline />
                <span>{ location }</span>
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
        {skills.map(skill => <span key={skill}>{ LogosMap[skill] }</span>)}
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
            <span className="block text-4xl">{ experienceInYears }</span>
            <span className="block text-2xl">+</span>
          </div>, "Years") }
        { renderExperienceTile(numTeams, "Teams") }
        { renderExperienceTile(<div className="flex gap-4 items-center">
          <span className="block text-4xl">{ numCompanies }</span>
          <span className="flex flex-col gap-2 text-lg">
            {companies.map(company => <span key={company} className="block">
              {LogosMap[company]}
            </span>)}
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
        <span>Current Team: <span className="font-medium">{ currentTeam }</span></span>
        <span className="flex text-lg"><LuDot /></span>
        <span>Current side project: <span className="font-medium">{ currentSideProject }</span></span>
        <span className="flex text-lg"><LuDot /></span>
        <span></span>
    </MarqueeAnimation>
  }

  const renderProfileCircle = (icon: React.ReactNode, link: string) => {
    return <a key={link} className="p-6 rounded-full shadow-box border-primary border-solid border-[1px] border-opacity-10 bg-opacity-20  hover:bg-primary hover:text-background transition-all duration-500" href={ link } target="_blank">
      <span className="text-4xl">
        { icon }
      </span>
    </a>
  }

  const renderProfilesBox = () => {
    return renderRedirectableTile(<div className="flex gap-4 justify-center items-center">
      { Object.values(SocialProfiles).map(profile => renderProfileCircle(LogosMap[profile], profile)) }
      { renderProfileCircle(<MdDownload />, "#" ) }
    </div>, "Contact");
  }

  return (<div className="py-8 px-8 max-w-screen-[1170px] grid grid-cols-4 gap-8">
    <div className="col-span-4 lg:col-span-2 row-span-2">
      <GridBox href="/about">
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

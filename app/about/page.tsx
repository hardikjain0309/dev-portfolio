import GridBox from "../_components/gridBox";
import AboutProfile from "../../public/img/aboutProfile.png";
import Image from "next/image";
import { CSSProperties } from "react";
import ShowOnScrollIntoView from "../_components/showOnScrollIntoView";
import { GoNorthStar } from "react-icons/go";

const profileContainerStyle: CSSProperties = {
  background: "linear-gradient(90deg, #3C58E3 -15%, #C2EBFF 58%, #5AB5E2 97%)",
  overflow: "hidden"
}

const summaryText = "With over seven years of experience, I currently work at Nutanix in Bangalore, building modern web applications with React. I love creating smooth, responsive user experiences — and I’m especially passionate about writing code that’s scalable, high-performing, and easy to maintain. While front-end is where I thrive, I’ve also explored Azure cloud, done a bit of backend development, and I’m on a steady path toward becoming a full-stack developer. I enjoy learning new things and contributing to projects that make a difference.";

function AboutMePage() {
  const renderProfilePhoto = () => {
    return <GridBox className="h-fit">
        <div style={ profileContainerStyle } className="flex justify-center items-center min-w-[200px] rounded-3xl">
        <Image src={ AboutProfile .src } alt="Profile" width="320" height="334" className="relative top-3"/>
      </div>
    </GridBox>
  }

  const renderSummaryBox = () => {
    return <div className="h-full flex flex-col gap-4 items-center max-w-[1000px]">
      <span className="text-4xl md:text-6xl font-medium mb-4 block">
        <ShowOnScrollIntoView>
          <div className="flex gap-2 items-center">
            <GoNorthStar className="text-secondary" />
            <span className="block">Self summary</span>
            <GoNorthStar className="text-secondary" />
          </div>
        </ShowOnScrollIntoView>
      </span>
      <GridBox>
        <span className="text-4xl font-medium mb-4 block">Hardik Jain</span>
        <span className="block">{ summaryText }</span>
      </GridBox>
    </div>
  }

  return ( <div className="py-8 px-8 max-w-screen-[1170px] grid grid-cols-3 gap-8">
    <div className="col-span-4 md:col-span-1 flex justify-center">
      { renderProfilePhoto() }
    </div>
    <div className="col-span-4 md:col-span-2 ">
      { renderSummaryBox() }
    </div>
  </div> );
}

export default AboutMePage;
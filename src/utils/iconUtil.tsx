import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { Companies, Skills, SocialProfiles } from "../config/globalConfig";
import { BiLogoCss3, BiLogoRedux } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { IoAccessibilityOutline, IoLogoJavascript } from "react-icons/io5";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsMicrosoft } from "react-icons/bs";
import { SiNutanix } from "react-icons/si";

export const LogosMap = {
  [Skills.React]: <FaReact />,
  [Skills.Redux]: <BiLogoRedux />,
  [Skills.TypeScript]: <TbBrandTypescript />,
  [Skills.JavaScript]: <IoLogoJavascript />,
  [Skills.Accessibility]: <IoAccessibilityOutline />,
  [Skills.HTML5]: <AiOutlineHtml5 />,
  [Skills.CSS3]: <BiLogoCss3 />,
  [Companies.Nutanix]: <SiNutanix />,
  [Companies.Microsoft]: <BsMicrosoft />,
  [SocialProfiles.Github]: <FaGithub />,
  [SocialProfiles.LinkedIn]: <FaLinkedin />
}
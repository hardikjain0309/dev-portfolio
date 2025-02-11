import Image from "next/image";
import logoImg from "../../public/logo.png";

const navLinks = [
  {
    name: "About",
    url: "#"
  },
  {
    name: "Skills",
    url: "#"
  },
  {
    name: "Projects",
    url: "#"
  },
  {
    name: "Contact",
    url: "#"
  }
]

export default function Nav () {
  const renderNavLinks = () => {
    return navLinks.map((link, index) => {
      return <a key={index} href={link.url}>{link.name}</a>
    })
  }

  return <div className="flex justify-between items-center">
    <Image
      src={logoImg}
      alt="logo"
      width={50}
      height={50}
      />
    <div className="flex gap-4 items-center">
      { renderNavLinks() }
      <button className="border-solid border-2 border-interactive px-4 py-2 rounded-md text-interactive">
        Resume
      </button>
    </div>
  </div>
}
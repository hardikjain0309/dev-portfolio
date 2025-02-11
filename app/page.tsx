import Intro from "./ui/intro";
import Nav from "./ui/nav";

export default function Home() {
  return (
    <div className="flex flex-col py-4 px-8 gap-4 min-h-screen">
      <Nav />
      <Intro />
    </div>
  );
}

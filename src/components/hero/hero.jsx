import { HERO_CONTENT } from "../../../index";
// import { HERO_IMG } from "../../../index";
import Img1 from "../../assets/hacker.webp";
import "./hero.css";
function Hero() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mg-35"></div>
      <div className="flex flex-wrap main">
        <div className="w-full lg:w-1/2 child1">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Misbha Shaikh
            </h1>
            <span className="bg-grading-to-r from-pink-300 via-slate-500 text">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 child2">
          <div className="flex justify-center">
            <img src={Img1} className="rounded" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;


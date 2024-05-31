import { HERO_CONTENT } from "../../../index";
import Img1 from "../../assets/hacker.webp";
function About() {


  return (<>



    <div className="border-b border-neutral-900 pb-4">
    
      <h1 className="my-20 text-center text-4xl">About</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-center justify-center">
            <img src={Img1} className="size-2/3  rounded-2xl" />

          </div>

        </div>

        <div className=" w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{HERO_CONTENT}</p>

          </div>

        </div>








      </div>




    </div>






  </>
  )

}

export default About
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const tech = () => {
    return (
        <>
            <div className="border-b border-neutral-800 pb-24">
                <h1 className="my-20 text-center text-4xl">Technologies</h1>

                <div className="flex flex-wrap items-center justify-center gap-4">


                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <IoLogoReact className="text-5xl text-blue-400" />
                    </div>

                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <IoLogoJavascript className="text-5xl text-yellow-400" />
                    </div>

                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaNodeJs className="text-5xl text-green-400" />                    </div>

                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiExpress className="text-5xl text-yellow-400" />                    </div>
                    <div className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className="text-5xl text-green-400" />
                    </div>

                </div>

            </div>













        </>
    )




}
export default tech
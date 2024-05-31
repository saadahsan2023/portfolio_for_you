import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Navbar() {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-1">
        <div className="flex flex-shrink-0 items-center">
          <p className=" text-3xl mx-2 w-30">Misbah shaikh</p>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaInstagram />
          <FaFacebook />
          <IoLogoWhatsapp />
        </div>
      </nav>
    </>
  );
}
export default Navbar;

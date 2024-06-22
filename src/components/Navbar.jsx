import {useState, useRef} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = () => {
    const[isExpanded, setisExpanded] = useState(false);
    const divLinksRef = useRef(null);
    const ulLinkRef = useRef(null);
    const handleHeight = () => {
          setisExpanded(!isExpanded);
    }
       return(
            <nav className="bg-white shadow-[#000] shadow fixed w-[100%] top-0 left-0 md:h-[3rem] overflow-hidden z-[999]">
                 <div className="px-[1rem] md:flex md:justify-between md:px-[0] md:w-[90vw] md:max-w-[1140px] md:mx-auto md:h-[100%]">
                      <div className="flex justify-between items-center py-[0.5rem] md:py-[0] md:h-[100%">
                            <h1 className="capitalize text-nowrap tracking-[2px] font-bold text-[1.2rem]"><span>News</span> <span className="text-yellow-600">portal</span></h1>
                            <button onClick={handleHeight} className="grid place-items-center cursor-pointer md:hidden">
                                 <FontAwesomeIcon className="text-[1.5rem]" icon={["fas", "bars"]} />
                            </button>
                      </div>
                      <div ref={divLinksRef} className="md:!h-[auto] bg-white h-[0]" style={isExpanded ? {height:ulLinkRef.current?.getBoundingClientRect().height} : {height: 0} }>
                          <ul ref={ulLinkRef} className="md:flex md:items-center md:h-[100%]">
                                <li>
                                    <Link to="/" className="md:mx-[0.5rem] inline-block py-[0.5rem] tracking-[2px] text-[#818181] hover:text-[#000] duration-150 ease-linear">Home</Link>
                                </li>
                                <li>
                                     <a href="#" className="md:mx-[0.5rem] inline-block py-[0.5rem] tracking-[2px] text-[#818181] hover:text-[#000] duration-150 ease-linear">About</a>
                                </li>
                                <li>
                                     <a href="#" className="md:mx-[0.5rem] inline-block py-[0.5rem] tracking-[2px] text-[#818181] hover:text-[#000] duration-150 ease-linear">Contact</a>
                                </li>
                                <li>
                                     <a href="#" className="md:mx-[0.5rem] inline-block py-[0.5rem] tracking-[2px] text-[#818181] hover:text-[#000] duration-150 ease-linear">Services</a>
                                </li>
                          </ul>
                      </div>
                 </div>
            </nav>
       )
}

export default NavBar;
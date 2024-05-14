import { useState } from "react";
import { faClipboardQuestion, faGrip, faUser, faArrowRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../components/Button";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(true);

    const toggleSideBar = () => {
      setOpenMenu(!openMenu);
    }

  return (
      <div className="sidebar fixed top-8 left-6">
        <button type="button" className="btn" onClick={toggleSideBar}><IconButton link="" icon={faBars}></IconButton></button>
        <ul className={openMenu ? "block" : "hidden"}>
          <li className="flex items-center group"><IconButton link="/" icon={faGrip}/><p className="p-3.5 bg-cyan-300 rounded-xl opacity-0 pointer-event-none group-hover:opacity-100 group-hover:pointer-events-auto">Dashboard</p></li>
          <li className="flex items-center group"><IconButton link="/quiz" icon={faClipboardQuestion}/><p className="p-3.5 bg-cyan-300 rounded-xl opacity-0 pointer-event-none group-hover:opacity-100 group-hover:pointer-events-auto">Quiz</p></li>
          <li className="flex items-center group"><IconButton link="/profile" icon={faUser}/><p className="p-3.5 bg-cyan-300 rounded-xl opacity-0 pointer-event-none group-hover:opacity-100 group-hover:pointer-events-auto">Profile</p></li>
          <li className="flex items-center group"><IconButton link="/logout" icon={faArrowRightFromBracket}/><p className="p-3.5 bg-cyan-300 rounded-xl opacity-0 pointer-event-none group-hover:opacity-100 group-hover:pointer-events-auto">Log Out</p></li>
        </ul>
      </div>
  )
}
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BasicButton({children}) {
    return (
        <button className="px-4 py-4 bg-cyan-300 text-gray-800 m-4 rounded-3xl text-5xl">
            {children}
        </button>
    )
}

export function IconButton({link, icon}) {
    return (
        <BasicButton>
            <Link to={link}>
                <FontAwesomeIcon icon={icon}/>
            </Link>
        </BasicButton>
    )
}

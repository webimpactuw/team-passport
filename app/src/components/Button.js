import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BasicButton({children}) {
    return (
        <button className="px-2 py-2 bg-cyan-300 text-gray-800 m-2 rounded-xl text-3xl">
            {children}
        </button>
    )
}

export function IconButton({link, icon}) {
    return (
        <BasicButton>
            <Link to={link}>
                <FontAwesomeIcon icon={icon} style={{width: '42px'}}/>
            </Link>
        </BasicButton>
    )
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function BasicButton({children, style, onClick}) {
    return (
        <button className={`text-gray-800 m-2 ${style}`} onClick={onClick}>
            {children}
        </button>
    )
}

export function IconButton({icon, link, onClick}) {
    return (
        <Link to={link}>
            <BasicButton style={`px-2 py-2 bg-cyan-300 rounded-xl text-3xl`}  onClick={onClick}>
                <FontAwesomeIcon icon={icon} style={{width: '42px'}}/>
            </BasicButton>
        </Link>
    )
}

export function TextButton({option, style, onClick}) {
    return (
        <BasicButton style={`h-10 text-xl rounded-3xl ${style}`} onClick={onClick}>
            {option}
        </BasicButton>
    )
}

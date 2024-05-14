import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BasicButton({children, style, onClick}) {
    return (
        <button className={`text-gray-800 rounded-3xl ${style}`} onClick={onClick}>
            {children}
        </button>
    )
}

export function IconButton({icon}) {
    return (
        <BasicButton style={`bg-cyan-300 w-16 h-20 m-4 text-5xl`}>
            <FontAwesomeIcon icon={icon}/>
        </BasicButton>
    )
}

export function TextButton({option, style, onClick}) {
    return (
        <BasicButton style={`h-10 m-2 text-xl ${style}`} onClick={onClick}>
            {option}
        </BasicButton>
    )
}

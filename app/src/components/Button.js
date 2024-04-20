import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BasicButton({children, style}) {
    return (
        <button className={`bg-cyan-300 text-gray-800 rounded-3xl ${style}`}>
            {children}
        </button>
    )
}

export function IconButton({icon}) {
    return (
        <BasicButton style={`w-16 h-20 m-4 text-5xl`}>
            <FontAwesomeIcon icon={icon}/>
        </BasicButton>
    )
}

export function TextButton({option}) {
    return (
        <BasicButton style={`w-80 h-10 m-2 text-xl`}>
            {option}
        </BasicButton>
    )
}

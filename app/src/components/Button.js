import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BasicButton({children, style, onClick}) {
    return (
      {/* <button className="px-2 py-2 bg-cyan-300 text-gray-800 m-2 rounded-xl text-3xl"> */}
        <button className={`text-gray-800 rounded-3xl ${style}`} onClick={onClick}>
            {children}
        </button>
    )
}

export function IconButton({icon}) {
    return (
//      <BasicButton>
//            <Link to={link}>
//                 <FontAwesomeIcon icon={icon} style={{width: '42px'}}/>
//             </Link> 
//             </BasicButton>
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

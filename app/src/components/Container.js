// for placing horizontally centered items
export function CenterContainer({children, style}) {
    return (
      {/* <div className="w-full grid justify-items-center"> */}
        <div className={`grid justify-items-center ${style}`}>
            {children}
        </div>
    )
}
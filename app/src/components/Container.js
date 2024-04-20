// for placing horizontally centered items
export function CenterContainer({children, style}) {
    return (
        <div className={`grid justify-items-center ${style}`}>
            {children}
        </div>
    )
}
// for placing horizontally centered items
export function CenterContainer({children}) {
    return (
        <div className="grid justify-items-center">
            {children}
        </div>
    )
}
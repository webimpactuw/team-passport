// for placing horizontally centered items
export function CenterContainer({children}) {
    return (
        <div className="w-full grid justify-items-center">
            {children}
        </div>
    )
}
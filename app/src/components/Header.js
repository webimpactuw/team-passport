export function Header({children}) {
    return (
        <div className="flex justify-center w-full py-8 bg-black">
            <h1 className="text-white">
                {children}
            </h1>
        </div>
    )
}
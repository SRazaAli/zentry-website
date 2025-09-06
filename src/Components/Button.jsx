
const Button = ({ title, containerClass, id, leftIcon, rightIcon }) => {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 border-none px-7 py-3 text-black ${containerClass}`}>
            {leftIcon}

            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase ">
                <div className="">
                    {title}
                </div>
            </span>
            {rightIcon}
        </button>
    )
}

export default Button

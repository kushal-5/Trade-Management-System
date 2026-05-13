const Button =({ButtonName, className,onClick})=>{

    return(
        <button className={className} onClick={onClick}>{ButtonName}</button>
    )
}

export default Button;
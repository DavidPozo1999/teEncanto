

const Link=({icon, text})=>{
    return(
        <>
            <a>
                {icon && <span>{icon}</span>}
                {text}
            </a>
        </>
    )
}

export default Link
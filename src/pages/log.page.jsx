import "../estilos/log.style.css"
import imagenLogging from "../IMAGENES/fondo_dog.jpg"
const Logging=({form})=>{
    return(
        <>
            <header></header>
            <body>
                <div className="logging">
                    <div>
                        {form}
                    </div>
                    <div className="logging-image">
                        <img src={imagenLogging} />
                    </div>
                </div>
            </body>
        </>
    )
}

export default Logging
import "../estilos/form.style.css"

const AdoptionForm=({isOpen})=>{
    return(
        <>
        <form style={{ display: isOpen ? '' : 'none' }}>
            <div className="input-group">
                <label htmlFor="nombre">¿Por qué estás interesado en adoptar esta mascota?</label>
                <input type="text" id="nombre" name="nombre" className="input-form" placeholder="Escribe aquí..." />
            </div>
            <input type="submit" value="Enviar Formulario" className="submit-form" />
        </form>
        </>
    )
}

export default AdoptionForm
import React from "react";
import "./formContact.css";
import InputForm from "./inputForm";


const FormContacto = () => {
    return (
        <>
            <form class="form">
                <div class="flex">
                    
                    <InputForm 
                    campo="Nombre *"
                    tipo="text"
                    />

                    <InputForm 
                    campo="Apellido *"
                    tipo="text"
                    />
                </div>  
                        
                <InputForm 
                    campo="Correo electrónico *"
                    tipo="email"
                />
                    
                
                <InputForm 
                    campo="Teléfono *"
                    tipo="number"
                />

                <InputForm 
                    campo="Nombre de la empresa/Intitución *"
                    tipo="text"
                />

                <InputForm 
                    campo="Asunto *"
                    tipo="text"
                />

                <label>
                    <input placeholder="Mensaje" type="text" className="inputForm inputFormMensaje"/>
                </label>
                <button className="submit" type="button">Enviar</button>
            </form>
        </>
    )
}

export default FormContacto;
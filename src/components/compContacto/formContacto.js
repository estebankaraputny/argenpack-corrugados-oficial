import React from "react";
import "./formContact.css";
import InputForm from "./inputForm";


const FormContacto = () => {
    return (
        <>
            <div className="sectionContact">
                <div className="contentDateForm">
                    <h2 className="titleContact">Contacto</h2>
                    <div className="contentDateContact">
                        <p className="casaCentral">Casa central</p>
                        <p>Planta Parque Industrial Platanos: Av. Nicolas MIlazzo 3251, Berazategui, Bs.as, Argentina</p>
                        <p>E-mail: correoelectronico@argenpack.com</p>
                        <p>Tel: +41234567</p>
                        <p>WhatsApp: +54 9 1112345678</p>
                        <iframe className="mapaForm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.6440736039117!2d-58.176206024888785!3d-34.78973456734482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3263147b1e649%3A0x558c1a34c3fe8037!2sParque%20Industrial%20Pl%C3%A1tanos!5e0!3m2!1ses!2sar!4v1709067743101!5m2!1ses!2sar" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="contentForm">
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
                </div>
            </div>
        </>
    )
}

export default FormContacto;
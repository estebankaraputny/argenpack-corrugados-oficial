import React from "react";

//______________________________________________________________________________
//______________________________________________________________________________
//IMPORTACIONES DE 
import LogoArg from "../asset/img/logoargenpack.png"

const ContactoDirecto = () => {
    return(
        <>
            <div style={styles.contenedor}>
                <div style={styles.contentLogo}>
                    <img src={LogoArg} style={styles.imgLogo} />
                </div>
                <div style={styles.contentLinks}>
                    <a href="#" className="link-directo" style={styles.linkContact}>+54 9 1134234324</a>
                    <a href="#" className="link-directo" style={styles.linkContact}>correoelectronico@gmail.com</a>
                    <a href="#" className="link-directo" style={styles.linkContact}>Parque Industrial Platanos, Direccion del lugar</a>
                </div>
            </div>
        </>
    )
}

const styles = {
    contenedor: {
      width: "100%",
      height: "7rem",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: ".5rem"
    },
    contentLogo: {
        width: "30%"
    },
    imgLogo : {
        width: "100%"
    },
    contentLinks: {
        width: "40%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-around"
    }, 
    linkContact: {
        textDecoration: "none",
        color: "#000",
        fontSize: "1rem"
    }

    // avatar: {
    //   margin: "-90px auto 30px",
    //   width: "100px",
    //   borderRadius: "50%",
    //   objectFit: "cover",
    //   marginBottom: "0"
    // },
    // cita: {
    //   lineHeight: 1.5,
    //   fontWeight: 300,
    //   marginBottom: "25px",
    //   fontSize: "1.375rem"
    // },
    // nombre: {
    //   marginBottom: "0",
    //   fontWeight: 600,
    //   fontSize: "1rem"
    // },
    // posicion: { fontWeight: 400 }
  };
  

export default ContactoDirecto;
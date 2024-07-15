import { useState } from "react";
import Formulario from "../Components/Formulario";

const NewAnimal = () => {

    

    async function EnviarAnimal(name,image,tipo, categoria){
        const conexion = await fetch("https://6690576cc0a7969efd9bd28a.mockapi.io/api/v1/animals/", {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                name:name,
                image:image,
                tipo:tipo,
                categoria:categoria
            })
        });
        const jsonConexion = conexion.json();
    
        return jsonConexion;
    }

    return <>
        <Formulario
            EnviarAnimal={EnviarAnimal}

        />
    </>
}

export default NewAnimal;
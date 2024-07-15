import './Formulario.css'
import CampoTexto from '../CampoTexto';
import Lista from '../Lista';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Formulario =  (props) => {

    const {EnviarAnimal} = props
    const [name, actName] = useState("");
    const [image, actImage] = useState("");
    const [tipo, actTipo] = useState("");
    const [categoria, actCategoria] = useState("");

    const Evento = (e) => {
        e.preventDefault();
        
        EnviarAnimal(name, image, tipo, categoria);
        console.log(name,image,tipo,categoria);
    }


    return <div className='formulario'>
        <form onSubmit={Evento}>
            <h2>NUEVO ANIMAL</h2>
            <CampoTexto 
                titulo='Nombre' 
                placeholder='ingresar nombre' 
                required={true}
                valor={name}
                actulizarValor={actName}
            />
            <CampoTexto 
                titulo='Imagen' 
                placeholder='ingresar url de animal' 
                required={true}
                valor={image}
                actulizarValor={actImage}
            />
            <CampoTexto 
                titulo='Tipo' 
                placeholder='ejemplo tipo acuatico' 
                required={true}
                valor={tipo}
                actulizarValor={actTipo}
            />
            <Lista 
                valor={categoria}
                actulizarValor={actCategoria}
                categoria={props.categoria}

                />
                <div className="boton">
            
                <button className='btn'>Registrar</button>
                <button type='reset' className='btn'>Limpiar</button>
                </div>
        </form>
    </div>
}

export default Formulario;
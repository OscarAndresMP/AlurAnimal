import './card.css';
import hexToRgba from 'hex-to-rgba';
import {MdDelete} from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai';

const Card = (props) => {

    const {name, image, tipo, id, color} = props
    return <div className='card'>
            <div className='encabezado'>
                <img src={image} alt={name} />
            </div>
            <div className='info' style={{backgroundColor: hexToRgba(color, 0.4)}}>
                <h4>{tipo}</h4>
                <h5>{name}</h5>
                <MdDelete className='eliminar' onClick={() => props.eliminarAnimal(id)}/>
                <AiFillEdit className='editar' />
            </div>
        </div>
}


export default Card;

import './Header.css'
import { Link } from 'react-router-dom';

const Encabezado = () => {
    return <header className='container'>
        <div className='titulo'>
            <h1>AlurAnimal</h1>
        </div>
        <div className='btn'>
            <Link to='/'>
                <button className='btn-home'>Home</button>
            </Link>
            <Link to='/NewAnimal'>
            <button className='btn-video'>Nuevo Animal</button>
            </Link>
        </div>
    </header>
}

export default Encabezado;
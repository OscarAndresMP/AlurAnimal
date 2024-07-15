import './Categoria.css'
import Card from '../Card'

const Categoria = (props) => {
    const {categoria, color} = props.categoria
    const {categorias, eliminarAnimal} = props

    

    return <>
    {
        categorias.length > 0 &&
        <section className='categoria'>
            <h1 style={{backgroundColor: color}}>{categoria}</h1>
            <div className='categorias'>
                {categorias.map((e) => <Card
                    key={e.id}
                    name={e.name}
                    image={e.image}
                    tipo={e.tipo}
                    id={e.id}
                    color={color}
                    eliminarAnimal={eliminarAnimal}
                />)}
            </div>
        </section>
    }
    </>
}

export default Categoria;
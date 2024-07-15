import './lLista.css'

const Lista = (props) => {
    
    const categoria=[
        {
            categoria: 'Carnivoros',
            color: 'green'
        },
        {
            categoria: 'Herbivoros',
            color: 'blue'
        },
        {
            categoria: 'Oviparos',
            color: 'red'
        }
    ];

    const cambio = (e) => props.actulizarValor(e.target.value);

    return <div className='lista-opciones'>
        <label>Categoria</label>
        <select value={props.valor} onChange={cambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar Categoria</option>
            {categoria.map((data, index) => <option key={index}>{data.categoria}</option>)}
        </select>

    </div>
}

export default Lista;
import './CampoText.css'

const CampoTexto = (props) => {
    const {titulo, placeholder,actulizarValor} = props

    
    const manjerCambio = (e) => actulizarValor(e.target.value);

    return <div className='campo-texto'>
        <label>{titulo}</label>
        <input 
            placeholder={placeholder}
            value={props.valor}
            required={props.required}
            onChange={manjerCambio} 
        />
    </div>
}

export default CampoTexto;
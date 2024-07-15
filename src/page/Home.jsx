import Encabezado from "../Components/Header"
import Pie from "../Components/Footer/Pie"
import Categoria from "../Components/Categoria"
import { useEffect, useState } from "react"
import BannerSlide from "../Components/Banner"
    
    const Home = () =>{

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://6690576cc0a7969efd9bd28a.mockapi.io/api/v1/Categoria')
        .then(res =>  res.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
},[])


    const [dataAnimal, setDataAnimal] = useState([]);
    useEffect(() => {
        fetch('https://6690576cc0a7969efd9bd28a.mockapi.io/api/v1/animals')
        .then(res =>  res.json())
        .then(data => setDataAnimal(data))
        .catch(error => console.log(error));
},[dataAnimal, setDataAnimal])

async function EliminarAnimal(id){
    const conexion = await fetch("https://6690576cc0a7969efd9bd28a.mockapi.io/api/v1/animals/"+id, {
        method:"DELETE",
        headers:{"Content-type":"application/json"}
    });

    const jsonConexion = conexion.json();

    return jsonConexion;
}




    return <>
        <BannerSlide data={dataAnimal}/>
        {data.map((e) => <Categoria
            categoria={e}
            key={e.id}
            categorias={dataAnimal.filter((c) => c.categoria === e.categoria)}
            eliminarAnimal={EliminarAnimal}
        />)}
    </>

}

export default Home;

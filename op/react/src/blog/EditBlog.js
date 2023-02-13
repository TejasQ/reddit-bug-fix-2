import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http:/localhost:3650/blogs/'

const CompEditBlog = () => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState('')
    const [notas, setNotas] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //proc para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            nombre: nombre,
            telefono: telefono,
            fecha: fecha,
            notas: notas
        })
        navigate('/')

    }

    useEffect( ()=>{
        getBlogById()
    },[]);
    /* useEffect( ()=>{
       const getBlogById = async() =>{
        const res = await axios.get(URI + id);
        const data = res.data[0];
        setNombre(res.data[0].nombre)
        setTelefono(res.data[0].telefono)
        setFecha(res.data[0].fecha)
        setNotas(res.data[0].nota)
       }
       getBlogById();
    },[id]); */

  const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data[0].nombre)
        setTelefono(res.data[0].telefono)
        setFecha(res.data[0].fecha)
        setNotas(res.data[0].nota)

    } 
    
    
        return (
            <div>
                <h3>Editar</h3>
                <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                        value={nombre}
                        onChange={ (e)=> setNombre(e.target.value)}
                        type="text"
                        className='form-control'>

                        </input>
                    </div>
                    
                    <div className='mb-3'> 
                        <label className='form-label'>Telefono</label>
                        <input
                        value={telefono}
                        onChange={ (e)=> setTelefono(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>fecha</label>
                        <input
                        value={fecha}
                        onChange={ (e)=> setFecha(e.target.value)}
                        type="text"
                        className='form-control'>

                        </input>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>notas</label>
                        <input
                        value={notas}
                        onChange={ (e)=> setNotas(e.target.value)}
                        type="text"
                        className='form-control'>
                        </input>
                    </div>
                    <button type="submit" className="btn btn-secondary">Cargar</button>
                </form>
            </div>
        )
    }

export default CompEditBlog
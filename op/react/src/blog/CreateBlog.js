import axios from 'axios'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = ' http://localhost:3650/blogs/'

const CompCreateBlog = () => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState('')
    const [notas, setNotas] = useState('')
    const navigate =useNavigate()

    //guardar
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {nombre:nombre, telefono:telefono, fecha:fecha, notas:notas})
        navigate('/')

    }


    return (
        <div>
            <h3>Crear </h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                    type="text"
                    className='form-control'>

                    </input>
                </div>
                <div className='mb-3'> 
                    <label className='form-label'>Telefono</label>
                    <input
                    value={telefono}
                    onChange={(e)=> setTelefono(e.target.value)}
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
                    className='form-control'

                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>notas</label>
                    <input
                    value={notas}
                    onChange={ (e)=> setNotas(e.target.value)}
                    type="text"
                    className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-secondary'>Cargar</button>
            </form>
        </div>
    )
}

export default CompCreateBlog
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:3650/blogs/'

const CompShowBlogs = ()=>{
    //procedimiento para ver todos los blogs
    const getBlogs = async ()=>{
        const res = await axios.get(URI)
        setBlog(res.data)
    }
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[getBlogs])

    //procedimiento para eliminae un blog
    const deleteBlog = async (id)=> {
        await axios.delete(`${URI}${id}`)
        getBlogs()

    }

    return(
        <div className='container'>
            <div className='row'>
                <Link to="/create" className='btn btn-secondary m-2 mb-2'>Crear</Link>
                <div className='col'>
                    <table className='table'>
                        <thead className='table.primary'>
                            <tr>
                                <th>nombre</th>
                                <th>telefono</th>
                                <th>fecha</th>
                                <th>notas</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ((blog) => (
                                 <tr key={blog.id}>
                                    <td> {blog.nombre}</td>
                                    <td> {blog.telefono}</td>
                                    <td>{ blog.fecha}</td>
                                    <td> {blog.notas}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-secondary  m-2 mb-2'>Editar</Link>
                                        <button onClick={() =>deleteBlog(blog.id)} className='btn btn-info  m-2 mb-2'>Eliminar</button>
                                    </td>
                                 </tr>
                            )) }
                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )

    
}

export default CompShowBlogs
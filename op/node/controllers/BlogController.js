
import BlogModel from "../models/BlogModel.js";

/**metodos crud */

export const getAllBlogs = async (req, res)=>{
    try{
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error){
        res.json ({message: error.message })
    }
}

//mostrar regist
export const getBlog = async (req, res)=>{
    try{
        const blog = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blog[0])
           

    } catch (error){
        res.json ({message: error.message })
    }
}
//crear resgistro

export const createBlog = async (req, res)=>{

    try{
        await BlogModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
           

    } catch (error){
        res.json ({message: error.message })
    }
}

//actualizar registro
export const updateBlog = async (req, res)=>{
    try{
       await BlogModel.update(req.body, {
           where: {id: req.params.id }
       })
       res.json({
        "message":"Registro creado correctamente"
       })
          
    }catch (error){
        res.json ({message: error.message })
    }
}

//eliminar
export const deleteBlog = async (req, res )=>{
    try{
        await BlogModel.destroy({
            where: { id : req.params.id}
        })
        res.json({
            "message":"¡Registro eliminado con exito!"
        })
    }catch(error){
        res.json ({message: error.message })
    }
}
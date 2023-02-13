//importar conexion a la DB
import db from "../database/db.js";

//imp sequelize
import { DataTypes } from "sequelize";

    const BlogModel = db.define('chevent',{
    
        nombre: { type: DataTypes.STRING},
        telefono: { type: DataTypes.STRING},
        fecha: { type: DataTypes.STRING},
        notas: { type: DataTypes.STRING},
        createdAt: {
            field: 'createAt',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updateAt',
            type: DataTypes.DATE,
        },
    
    },{ 
        freezeTableName: true
    })

export default BlogModel
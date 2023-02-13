import { Sequelize } from "sequelize";
const db = new Sequelize ('root', 'prueba', '',{
    host:'localhost',
    dialect: 'mysql'
})

export default db
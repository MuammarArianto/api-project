import { Sequelize } from "sequelize";


const db = new Sequelize({
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DATABASE || 'db_tugas',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    host: process.env.DB_HOST || 'localhost'
})

export default db;
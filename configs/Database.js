import { Sequelize } from "sequelize";


const db = new Sequelize("railway","root","gbGe26-525FfgGDCbAGFc61bcFAhH5H4",{
    host: "roundhouse.proxy.rlwy.net",
    dialect: "mysql",
})

export default db;
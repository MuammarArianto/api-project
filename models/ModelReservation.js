import { Sequelize } from "sequelize";
import db from "../configs/Database.js";
import ModelRoom from "./ModelRoom.js";

const {DataTypes} = Sequelize;

const ModelReservation = db.define('tb_reservation',{
    id_reservasi: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nama: {
        type: DataTypes.STRING
    },
    check_in: {
        type: DataTypes.DATEONLY
    },
    check_out: {
        type: DataTypes.DATEONLY
    },
    room_id: {
        type: DataTypes.INTEGER
    },
    jumlah_room: {
        type: DataTypes.INTEGER
    },
    total_harga: {
        type: DataTypes.INTEGER(10)
    }
})

ModelReservation.belongsTo(ModelRoom, {foreignKey: 'room_id', as: 'room'});

export default ModelReservation;
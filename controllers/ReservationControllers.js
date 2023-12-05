import ModelReservation from "../models/ModelReservation.js";
import ModelRoom from "../models/ModelRoom.js";

export const getReservationIncludeRoom = async(req, res) => {
    try {
        const response = await ModelReservation.findAll({
            include: {
                model: ModelRoom,
                foreignKey: 'room_id',
                as: 'room'
            }
        })

        if(!response[0]) return res.status(404).json({message: 'Data masih kosong!'});

        return res.status(200).json({response});
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
}

export const createReservation = async(req, res) => {
    const {nama, checkIn, checkOut, jumlah, roomId} = req.body;
    if(nama === '') return res.status(400).json({message: 'Nama tidak boleh kosong!'})
    if(checkIn === '') return res.status(400).json({message: 'Tanggal check in harus di isi!'})
    if(checkOut === '') return res.status(400).json({message: 'Tanggal check out harus di isi!'})
    if(roomId === '') return res.status(400).json({message: 'Anda harus memilih kamar!'})
    if(jumlah === '') return res.status(400).json({message: 'Jumlah kamar harus di isi!'})
    try {
        const ambilDataRoom = await ModelRoom.findAll({where: {id_room: roomId}});
        const totalHargaPesanan = ambilDataRoom[0].harga * jumlah;
        await ModelReservation.create({
            nama: nama,
            check_in: checkIn,
            check_out: checkOut,
            room_id: roomId,
            jumlah_room: jumlah,
            total_harga: totalHargaPesanan,
        });

        return res.status(201).json({message: 'Kamar berhasil di pesan!'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
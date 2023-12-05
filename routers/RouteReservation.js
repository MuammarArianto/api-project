import express from 'express'
import { createReservation, getReservationIncludeRoom } from '../controllers/ReservationControllers.js'

const router = express.Router()

router.get('/', getReservationIncludeRoom);
router.post('/create', createReservation);

export default router;
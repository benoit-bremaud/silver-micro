import Reservation from '../models/Reservation';

// Fonction pour créer une nouvelle réservation
export async function createReservation(req, res) {
  try {
    const newReservation = new Reservation({
      reservationDateTime: req.body.reservationDateTime,
      tableNumber: req.body.tableNumber,
      numberOfGuests: req.body.numberOfGuests
    });

    const savedReservation = await newReservation.save();
    res.status(201).send(savedReservation);
  } catch (error) {
    res.status(400).send(error);
  }
}
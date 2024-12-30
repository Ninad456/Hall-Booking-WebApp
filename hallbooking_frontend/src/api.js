import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const getAllBookings = () => axios.get(API_URL);
export const createBooking = (data) => axios.post(API_URL, data);
export const updateBooking = (data) => axios.put(API_URL, data);
export const deleteBooking = (id) => axios.delete(`${API_URL}/${id}`);

import React from "react";
// import BookingList from "./components/BookingList";
// import BookingForm from "./components/BookingForm";

// function App() {
//   return (
//     <div className="app-container">
//       <h1>Hall Booking System</h1>
//       <BookingForm />
//       <BookingList />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"; // Correct import path
import AddBooking from "./components/AddBooking"; // Correct import path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-booking" element={<AddBooking />} />
      </Routes>
    </Router>
  );
};

export default App;

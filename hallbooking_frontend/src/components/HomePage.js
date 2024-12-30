import React from "react";
import { Link } from "react-router-dom";
import BookingList from "./BookingList";

const HomePage = () => {
  return (
    <div>
      <h1>Booking List</h1>
      <div style={{ textAlign: "center", color: "navy", fontWeight: 800, marginTop: "20px" }}>
        <Link to="/add-booking">
          <button style={{ backgroundColor: "Navy", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer" }}>
            Add New
          </button>
        </Link>
      </div>
      <BookingList />
      
    </div>
  );
};

export default HomePage;

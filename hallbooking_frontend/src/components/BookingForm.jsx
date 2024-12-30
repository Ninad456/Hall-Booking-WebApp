import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../api";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    mobileNo: "",
    hallName: "",
    applicantName: "",
    email: "",
    purposeOfUse: "",
    rent: 0,
    additionalCharges: 0,
    total: 0,
    remark: "",
    receiptNo: "",
    receiptDate: "",
    startDate: "",
    endDate: "",
    status: "Confirm",
  });

  const [hallOptions] = useState([
    { id: 1, name: "Thane Municipal Corporation Hall" },
    { id: 2, name: "Dr. Kashinath Ghanekar Natyagruha" },
    { id: 3, name: "Tip Top Plaza Banquets" },
    { id: 4, name: "Golden Tulip, Thane" },
    { id: 5, name: "The Thane Club" },
    { id: 6, name: "Upvan Lake Area (Open Air)" },
  ]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      if (name === "rent" || name === "additionalCharges") {
        updatedData.total = parseFloat(updatedData.rent || 0) + parseFloat(updatedData.additionalCharges || 0);
      }
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formData.total = parseFloat(formData.rent || 0) + parseFloat(formData.additionalCharges || 0);
      await createBooking(formData);
      alert("Booking created successfully!");
      setFormData({
        mobileNo: "",
        hallName: "",
        applicantName: "",
        email: "",
        purposeOfUse: "",
        rent: 0,
        additionalCharges: 0,
        total: 0,
        remark: "",
        receiptNo: "",
        receiptDate: "",
        startDate: "",
        endDate: "",
        status: "Confirm",
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Error creating booking. Please try again.");
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="mobileNo"><span className="required-star">*</span>Mobile No.:</label>
        <input type="text" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="hallName"><span className="required-star">*</span>Hall Name:</label>
        <select id="hallName" name="hallName" value={formData.hallName} onChange={handleChange} required>
          <option value="">Select Hall</option>
          {hallOptions.map((hall) => (
            <option key={hall.id} value={hall.name}>{hall.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="applicantName"><span className="required-star">*</span>Applicant Name:</label>
        <input type="text" id="applicantName" name="applicantName" value={formData.applicantName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email"><span className="required-star">*</span>Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="purposeOfUse"><span className="required-star">*</span>Purpose Of Use:</label>
        <input type="text" id="purposeOfUse" name="purposeOfUse" value={formData.purposeOfUse} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="rent"><span className="required-star">*</span>Rent:</label>
        <input type="number" id="rent" name="rent" value={formData.rent} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="additionalCharges">Additional Charges:</label>
        <input type="number" id="additionalCharges" name="additionalCharges" value={formData.additionalCharges} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="total">Total:</label>
        <span className="total-display">{formData.total}</span>
      </div>
      <div className="form-group">
        <label htmlFor="remark"><span className="required-star">*</span>Remark:</label>
        <textarea id="remark" name="remark" value={formData.remark} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="receiptNo"><span className="required-star">*</span>Receipt No.:</label>
        <input type="text" id="receiptNo" name="receiptNo" value={formData.receiptNo} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="receiptDate"><span className="required-star">*</span>Receipt Date:</label>
        <input type="date" id="receiptDate" name="receiptDate" value={formData.receiptDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="startDate"><span className="required-star">*</span>Start Date:</label>
        <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="endDate"><span className="required-star">*</span>End Date:</label>
        <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} required />
      </div>
      {/* <button type="submit">Submit</button>
      <button type="button" onClick={handleBack}>Back</button> */}
      <div className="button-container">
  <button type="submit">Submit</button>
  <button type="button" onClick={handleBack}>Back</button>
</div>
    </form>
  );
};

export default BookingForm;
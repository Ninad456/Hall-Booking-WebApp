# Hall Booking System - Ascentech Interview Exercise

A web-based hall booking system developed as part of the Ascentech Interview Exercise. This application demonstrates implementation of a full-stack application using React, Spring Boot microservices, and PostgreSQL with stored procedures.

## Exercise Requirements Completed

✅ PostgreSQL database installation and configuration  
✅ React-based frontend implementation  
✅ Java microservices for backend operations  
✅ All database operations implemented through stored procedures  
✅ External configuration management  
✅ Basic CRUD operations for hall bookings  

## Tech Stack

- **Frontend:** React.js
- **Backend:** Spring Boot Microservices
- **Database:** PostgreSQL
- **Build Tool:** Maven

## Prerequisites

- Git
- Node.js (v14+)
- Java JDK 11+
- PostgreSQL 12+
- Maven

## Project Setup

### 1. Database Setup

1. Install PostgreSQL on your local machine
2. Create a new database:
   ```sql
   CREATE DATABASE hall_booking;
   ```
3. Execute the stored procedures script:
   ```bash
   psql -d hall_booking -f database/procedures.sql
   ```

### 2. Configuration Setup

1. Create a `config.properties` file outside the project directory:
   ```properties
   # Database Configuration
   db.url=jdbc:postgresql://localhost:5432/hall_booking
   db.username=your_username
   db.password=your_password
   
   # Server Configuration
   server.port=8080
   ```

2. Set environment variable for configuration location:
   ```bash
   # Windows
   set CONFIG_PATH=C:/path/to/config.properties
   
   # Linux/Mac
   export CONFIG_PATH=/path/to/config.properties
   ```

### 3. Backend Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hall-booking-WebApp
   ```

2. Navigate to backend directory:
   ```bash
   cd HallBooking_Backend
   ```

3. Build and run:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### 4. Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd HallBooking_frontend
   ```

2. Create `.env` file (this will be read at runtime):
   ```plaintext
   REACT_APP_API_BASE_URL=http://localhost:8080/api/bookings
   ```

3. Install dependencies and start:
   ```bash
   npm install
   npm start
   ```

## Features Implementation

### 1. Booking List Display
- View all existing hall bookings
- Pagination support

### 2. New Booking Creation
- Form validation
- Date and time selection
- Hall selection dropdown
- Booking confirmation

### 3. Booking Management
- Update existing bookings
- Delete bookings
- View booking details
- approve,reject bookings

## Database Design

## Procedure to insert a new booking
```sql
CREATE OR REPLACE FUNCTION insert_booking(
    _mobile_no VARCHAR,
    _hall_name VARCHAR,
    _applicant_name VARCHAR,
    _email VARCHAR,
    _purpose_of_use TEXT,
    _rent NUMERIC,
    _additional_charges NUMERIC,
    _total NUMERIC,
    _remark TEXT,
    _receipt_no VARCHAR,
    _receipt_date DATE,
    _start_date DATE,
    _end_date DATE
) RETURNS VOID AS $$
BEGIN
    INSERT INTO hall_booking (
        mobile_no, hall_name, applicant_name, email, purpose_of_use, rent, 
        additional_charges, total, remark, receipt_no, receipt_date, start_date, end_date
    ) VALUES (
        _mobile_no, _hall_name, _applicant_name, _email, _purpose_of_use, _rent, 
        _additional_charges, _total, _remark, _receipt_no, _receipt_date, _start_date, _end_date
    );
END;
$$ LANGUAGE plpgsql;
```

## Procedure to update a booking
```sql
CREATE OR REPLACE FUNCTION update_booking(
    _booking_id INT,
    _mobile_no VARCHAR,
    _hall_name VARCHAR,
    _applicant_name VARCHAR,
    _email VARCHAR,
    _purpose_of_use TEXT,
    _rent NUMERIC,
    _additional_charges NUMERIC,
    _total NUMERIC,
    _remark TEXT,
    _receipt_no VARCHAR,
    _receipt_date DATE,
    _start_date DATE,
    _end_date DATE
) RETURNS VOID AS $$
BEGIN
    UPDATE hall_booking SET
        mobile_no = _mobile_no,
        hall_name = _hall_name,
        applicant_name = _applicant_name,
        email = _email,
        purpose_of_use = _purpose_of_use,
        rent = _rent,
        additional_charges = _additional_charges,
        total = _total,
        remark = _remark,
        receipt_no = _receipt_no,
        receipt_date = _receipt_date,
        start_date = _start_date,
        end_date = _end_date
    WHERE booking_id = _booking_id;
END;
$$ LANGUAGE plpgsql;
```

## Procedure to delete a booking
```sql
CREATE OR REPLACE FUNCTION delete_booking(_booking_id INT) RETURNS VOID AS $$
BEGIN
    DELETE FROM hall_booking WHERE booking_id = _booking_id;
END;
$$ LANGUAGE plpgsql;
```

## Procedure to fetch all bookings
```sql
CREATE OR REPLACE FUNCTION get_all_bookings() RETURNS TABLE (
    booking_id INT,
    mobile_no VARCHAR,
    hall_name VARCHAR,
    applicant_name VARCHAR,
    email VARCHAR,
    purpose_of_use TEXT,
    rent NUMERIC,
    additional_charges NUMERIC,
    total NUMERIC,
    remark TEXT,
    receipt_no VARCHAR,
    receipt_date DATE,
    start_date DATE,
    end_date DATE,
    status VARCHAR
) AS $$
BEGIN
    RETURN QUERY SELECT * FROM hall_booking;
END;
$$ LANGUAGE plpgsql;
```


## Video Demonstration

A detailed walkthrough of the project setup and execution is available at: 
<iframe src="https://www.loom.com/embed/2591a329d18b467a977a57d591e4943c?sid=9aea9091-dd58-4e0c-b1c6-b6bc685f0e68" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width:100%; height:360px;"></iframe>


## WebApp Screenshots

# Home page with all the lists
![image](https://github.com/user-attachments/assets/3eb31c69-551c-425e-b2d0-65c965acf98c)

# Add new form details
![image](https://github.com/user-attachments/assets/06768263-387e-4b43-8fa8-61b1ee420c1c)

# Successful creation alert
![image](https://github.com/user-attachments/assets/26a5a079-56d9-4ad5-8777-5e10b3b93ec7)

# Edit/Delete options 
![image](https://github.com/user-attachments/assets/4b4f2fce-2ea0-4ad0-9cb8-b241d55fe910)

# Edit data option
![image](https://github.com/user-attachments/assets/7a150c80-eb6d-4399-8405-603984394495)

# Before Edit
![image](https://github.com/user-attachments/assets/13dca194-a958-4aa6-83d7-d63379bbd4d3)

# After Edit
![image](https://github.com/user-attachments/assets/3348100d-10e6-44cd-a5da-50fd5b04318a)


## Running Tests

### Backend Tests
```bash
cd HallBooking_backend
mvn test
```

### Frontend Tests
```bash
cd HallBooking_frontend
npm test
```

## Common Issues

1. **Configuration Not Found**
   - Verify CONFIG_PATH environment variable is set correctly
   - Ensure config.properties file exists and is readable

2. **Database Connection**
   - Check PostgreSQL service is running
   - Verify database credentials in config.properties
   - Ensure stored procedures are properly installed

3. **Frontend API Connection**
   - Verify backend server is running
   - Check .env file configuration
   - Ensure no CORS issues


## Author

Ninad Agre


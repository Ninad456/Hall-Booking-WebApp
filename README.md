# Hall-Booking-WebApp

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
   cd hall-booking-system
   ```

2. Navigate to backend directory:
   ```bash
   cd backend
   ```

3. Build and run:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### 4. Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Create `.env` file (this will be read at runtime):
   ```plaintext
   REACT_APP_API_BASE_URL=http://localhost:8080
   ```

3. Install dependencies and start:
   ```bash
   npm install
   npm start
   ```

## Features Implementation

### 1. Booking List Display
- View all existing hall bookings
- Sortable and filterable list
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

## Database Design

All database operations are implemented through stored procedures:

```sql
-- Example stored procedures
CALL sp_create_booking(...)
CALL sp_update_booking(...)
CALL sp_delete_booking(...)
CALL sp_get_all_bookings(...)
```

## Project Structure

```
hall-booking-system/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/ascentech/hallbooking/
│   │   │   │       ├── controllers/
│   │   │   │       ├── services/
│   │   │   │       └── models/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
├── database/
│   ├── schema.sql
│   └── procedures.sql
└── README.md
```

## Video Demonstration

A detailed walkthrough of the project setup and execution is available at: [Loom Video Link]

## Running Tests

### Backend Tests
```bash
cd backend
mvn test
```

### Frontend Tests
```bash
cd frontend
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

## Next Steps

- Implement user authentication
- Add email notifications for bookings
- Create admin dashboard
- Add reporting features
- Implement booking conflict detection

## Author

[Your Name]

## License

This project is part of the Ascentech Interview Exercise.

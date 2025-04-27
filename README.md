# Device Management Web App

## Overview
This project is a simple device management web application that allows users to manage device categories and devices themselves. The application provides basic CRUD (Create, Read, Delete) operations for both entities.

## Technical Stack
- **Frontend**: Angular (latest LTS version)
- **Backend**: Node.js (latest LTS version)
- **Database**: MySQL
- **Version Control**: Git

## Installation
### Prerequisites
- MySQL server
- (Optional) Docker

### Local Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/device-management-app.git
   cd device-management-app
2. **Database Setup**
   ```bash
   mysql -u root -p < database/setup.sql

4. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   npm start
  
   Edit .env with your database credentials
5. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ng serve
   
6. **Docker Setup (optional)**
   ```bash
   docker-compose up --build

## Testing
To run backend tests:
  ```bash
  cd backend
  npm test
```
## Contributing
 1. Fork the project
 2. Create your feature branch (git checkout -b feature/AmazingFeature)
 3. Commit your changes (git commit -m 'Add some AmazingFeature')
 4. Push to the branch (git push origin feature/AmazingFeature)
 5. Open a Pull Request

## Contact
Rayana Almeida - rayana.almeida@icomp.ufam.edu.br
Linkedin: [https://github.com/yourusername/device-management-app](https://www.linkedin.com/in/rayanaalmeida/)

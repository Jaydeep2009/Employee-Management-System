

A simple **full-stack application** built with:
- **Backend**: Java, Spring Boot, JPA, Hibernate, H2 (in-memory DB)
- **Frontend**: React JS
- **Features**:
  - Add, view, and manage employees
  - Search employees (using Java Stream API)
  - Sort employees (using Java Stream API)
  - REST API powered by Spring Boot
  - Modern UI built with React

---

## 🚀 Getting Started (Run Locally)

### 1. Clone the repository
```bash
git clone https://github.com/Jaydeep2009/Employee-Management-System.git
cd employee-management-system
2. Run the Backend (Spring Boot)
Prerequisites
Install Java 17+

Install Maven (or use included mvnw wrapper)

Steps
bash
Copy code
cd backend
mvn spring-boot:run
✅ Backend will start at: http://localhost:8080
API endpoint: http://localhost:8080/employees

3. Run the Frontend (React)
Prerequisites
Install Node.js (>= 16)

Install npm (comes with Node)

Steps
bash
Copy code
cd frontend
npm install
npm start
✅ Frontend will start at: http://localhost:3000

The React app is configured to proxy API requests to the backend (http://localhost:8080).

📂 Project Structure
css
Copy code
employee-management-system/
│── backend/       # Spring Boot application
│   ├── src/main/java/com/example/demo/
│   ├── src/main/resources/
│   └── pom.xml
│
│── frontend/      # React application
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
⚡ Example API
GET /employees → Fetch all employees

POST /employees → Add a new employee

GET /employees/search?name=John → Search employees by name

GET /employees/sort?by=salary → Sort employees by salary

🛠 Tech Stack
Backend: Java 17, Spring Boot, Spring Data JPA, Hibernate, H2

Frontend: React, Axios, Bootstrap

Build Tools: Maven, npm


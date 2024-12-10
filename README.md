# Real-Time Ticket Simulation System Frontend

This repository contains the frontend for a Real-Time Ticket Simulation System Frontend, built using React.js and Tailwind CSS. The system allows users to simulate a real-time ticket distribution process with configurable options. The frontend communicates seamlessly with the backend using Axios and WebSocket for real-time updates

http://localhost:5173/
![image](https://github.com/user-attachments/assets/5e51a551-5196-4343-8a20-aadb6679f902)

---

## 🛠️ Introduction

The Real-Time Ticket Simulation System is an interactive web application designed for real-time ticket management. The interface includes three buttons:

- Configuration: Set or load ticket simulation settings.
- Start: Begin the ticket simulation process.
- Stop: Halt the simulation at any time.
- A responsive design for seamless usage across devices.

The simulation updates in real time, displaying the current ticket array size. Users can manage configurations, control the simulation process, and observe real-time changes directly in the UI.

---

## ⚙️ Setup Instructions

### Prerequisites

Ensure the following are installed on your system:

- Node.js: Version 14 or higher.
- React: Version 18 or higher.
- Vite (installed during setup)
  
---

### Steps to Build and Run the Application

#### Clone the Repository

```bash
git clone https://github.com/SethumR/Ticketing-System-Frontend.git
cd Ticketing-System-Frontend
```

#### Install Dependencies 

```bash
npm install
```

#### Start the development server

```bash
npm run dev
```

---

## 📖 Usage Instructions

### Configuring the System
Click the Configuration button on the main UI.
Create Configuration: Open a form to input custom settings (e.g., ticket release rate, customer retrieval rate, etc.).
   - Load: Retrieve the most recent configuration.
   - Fill in all required fields in the form.
   - Fields include settings like:
     - Total tickets
     - Ticket release rate
     - Number of vendors
     - And more.
   - Updated values will reflect in the current configuration.
 Save the configuration to proceed.
   
#### ⚠️ Note: The Start and Stop buttons are disabled until the configuration form is completed.
---

### Starting the System
- Ensure a valid configuration is set.
- Click the **"Start" button** to begin the ticket simulation.
- Observe real-time updates on the screen, including the current ticket array size.

## Stopping the System
- Click the "Stop" button to halt the simulation at any time.

---
## 💻 UI Controls

#### Configuration Button
- Create Configuration: Opens a form to set up a new configuration.
- Load: Fetches the most recent configuration.

#### Start Button
- Initiates the ticket simulation (only enabled after setting a configuration).

#### Stop Button
- Stops the ticket simulation.

---
## 🌟 Key Features

- Interactive Form: User-friendly configuration setup with validation.
- Real-Time Updates: Displays the current ticket array size.
- Dynamic Controls: Start/Stop buttons enable based on simulation state.
- Responsive Design: Ensures compatibility across devices.

---

## 🛠️ Development Tools and Technologies

- React.js: Framework for building the frontend.
- Tailwind CSS: For responsive and modern styling.
- Axios: For HTTP requests to the backend.
- WebSocket: For real-time communication between frontend and backend.

---
# 📧 Contact

For questions or support, contact:

- **Name**: Sethum Ruberu 
- **Email**: Sethumgelaka6@gmai.com





import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import "./App.css";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function App() {
  const updateLED = (status) => {
    set(ref(db, "led"), {
      status: status,
    });
  };

  return (
    <div className="container">
      <h1>ESP32 LED Control (Firebase)</h1>
      <button className="on" onClick={() => updateLED("on")}>
        Turn ON
      </button>
      <button className="off" onClick={() => updateLED("off")}>
        Turn OFF
      </button>
    </div>
  );
}

export default App;

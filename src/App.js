import React from 'react';
import './App.css';
import Formulario from './Formulario';

function App() {
  return (
    <div className="App">
      <header>
        <h1>DANTE</h1>
        <h2> Te Invita a su fiesta de cumpleaños en...</h2>
      <img></img>
      </header>
      <div>
        <h2>El Día</h2>
      <h2>21 de Octubre </h2>
      <h3>de 13:00 a 16:00</h3>
      </div>
      <a href="https://calendar.google.com/calendar/u/0/r/day/2023/10/21?pli=1" target='_blank'>Agendalo!!!!</a>
      
      <div>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1638.1607449277649!2d-58.3859866!3d-34.7978528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd34780d2cc97%3A0xc43eeb4e4c65e4e3!2sMalaku!5e0!3m2!1ses-419!2sar!4v1694900119067!5m2!1ses-419!2sar"
  width="300"
  height="150"
  style={{
    border: "0",
    width: "60%", // Adjust the width as needed
    height: "250px", // Adjust the height as needed
  }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>
      
      <div>
        <div className="a2">
          <h1>
            <a href="./index.html">Comfirmacion de asistencia</a>
          </h1>
        </div>
      </div>

      <Formulario className="Formulario"/> 
    </div>
    
  );
}


export default App;

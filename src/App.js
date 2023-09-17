import React, { useEffect, useRef } from 'react';
import './App.css';
import Formulario from './Formulario';
import YouTube from "react-youtube";

function App() {
  const videoId = 'ZvnYwHgkx0g'; // ID del video de YouTube
  const playerRef = useRef(null);

  const playSound = () => {
    const player = playerRef.current;
    if (player) {
     
      player.playVideo();
    }
  };

  useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
    iframe.title = 'YouTube Video';
    iframe.width = '0';
    iframe.height = '0';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    iframe.allow = 'autoplay';

    document.body.appendChild(iframe);

    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <h1>DANTE</h1>
        <img className='gift' src="https://media.tenor.com/heB1Ljvh1rEAAAAC/titan-speakerman-dab-up-dap-up.gif" alt="" />
        <h2>Te Invita a su fiesta de cumpleaños en...</h2>
      </header>
      <div>
        <h2>El Día</h2>
        <h2>21 de Octubre</h2>
        <h3>de 13:00 a 16:00</h3>
      </div>
      <a href="https://calendar.google.com/calendar/u/0/r/day/2023/10/21?pli=1" target='_blank' rel="noreferrer">Agéndalo!!!!</a>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1638.1607449277649!2d-58.3859866!3d-34.7978528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd34780d2cc97%3A0xc43eeb4e4c65e4e3!2sMalaku!5e0!3m2!1ses-419!2sar!4v1694900119067!5m2!1ses-419!2sar"
          width="300"
          height="150"
          style={{
            border: "0",
            width: "60%", // Ajusta el ancho según sea necesario
            height: "250px", // Ajusta la altura según sea necesario
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <div className="a2">
          <h1>
            <a href="./index.html">Confirmación de asistencia</a>
          </h1>
        </div>
      </div>
      <Formulario className="Formulario" />
      <YouTube
        videoId={videoId}
        containerClassName="youtube-container"
        opts={{
          width: '0',
          height: '0',
          playerVars: {
            autoplay: 1,
          },
        }}
        onReady={(event) => {
          playerRef.current = event.target;
        }}
      />
      
    </div>
  );
}

export default App;

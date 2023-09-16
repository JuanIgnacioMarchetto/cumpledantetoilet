import React, { useState } from 'react';

function Formulario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Coloca aquí la lógica para enviar el formulario a través de una solicitud AJAX o Fetch
      // Puedes utilizar fetch o axios para realizar una solicitud HTTP POST al servidor
      
      // Ejemplo de solicitud usando fetch:
      const response = await fetch('https://formsubmit.co/priscila.perrotta@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          comments: message,
        }),
      });

      if (response.ok) {
        alert('¡Mensaje enviado con éxito!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section className="containe2r">
      <form onSubmit={handleSubmit}>
        <h1>Add</h1>
        <div>
          <label htmlFor="name">Nombre del invitado:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Por favor ingrese un correo electrónico válido"
          />
        </div>
        <div>
          <label htmlFor="comments">"Asiste","No Puede";"No sabe":</label>
          <textarea
            id="comments"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input className="btn" type="submit" value="Send" />
        <input type="hidden" name="_next" value="https://www.marchetto.ar/" />
        <input type="hidden" name="_captcha" value="false" />
      </form>
    </section>
  );
}

export default Formulario;

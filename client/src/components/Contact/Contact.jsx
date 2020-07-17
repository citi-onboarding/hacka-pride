import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import './Contact.css';
import '../General.css';



toast.configure()

function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [dados, setDados] = useState('');
    const [link, setLink] = useState('');
    const [subject, setSubject] = React.useState(0);

    const list = [
        {name: ''},
        {name: 'Dúvidas'},
        {name: 'Parceria'},
        {name: 'Estrutura'},
      ];

    const nameChange = (event) => {
        setName(event.target.value);
    };

    const phoneChange = (event) => {
        setPhone(event.target.value);
    };  

    const messageChange = (event) => {
        setMessage(event.target.value);
    };

    const subjectChange = (event) => {
        setSubject(event.target.value);
    };

    const sendMaile = async () => {
        try{
                const db = await axios.post('http://localhost:3001/api/contato', {
                "name": name,
                "phone": phone,
                "subject": subject,
                "message": message
            });
         if(db.status === 200) { toast('Mensagem enviada!'); }
        } catch(err) {
            toast.warn('Erro ao enviar, tente novamente!');
        }
        };

        const notify = (event) => {
            sendMaile();
            event.preventDefault();
        }

      const handleSubmit = (event) => {
        event.preventDefault();
        sendMaile();
      };

      const loadInfo = async () => {
        const res = await axios.get('http://localhost:3001/api/social');
        setDados(res.data);
        const link = await axios.get('http://localhost:3001/api/ticket');
        setLink(link.data);
      };

      useEffect(() => {
        loadInfo();
      }, []);
    
    return(
<div class="all">
        <section className="contact-box">
            <div className="contact">
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
                <section className="info-contact">
                    <div className="logo-contact"></div>
                    {dados && (  
                    <div className="social-media">
                            <a href={dados[0]?.instagram} target="_blank" rel="noopener noreferrer"><button className="logo-insta"></button></a>
                            <a href={dados[0]?.facebook} target="_blank"><button className="logo-face"></button></a>
                    </div>
                    )}
                    {link && (
                    <div>
                        <a href={link[0]?.IngressoURL} target="_blank"><button className="link-ingresso" type="button" href="#">Comprar ingresso</button></a>
                    </div>
                    )}
                </section>

                <section className="submit-message">
                    <h2>Nos mande uma mensagem</h2>
                    <div className="box">
                        <form onSubmit={(event) => handleSubmit(event)} required="true">
                            <div>
                                <input type="text" required="true" value={name} onChange={(event) => nameChange(event)}></input>
                                <label>Nome</label>
                            </div>
                            <div>
                                <input type="text" required="true" value={phone} onChange={(event) => phoneChange(event)}></input>
                                <label>Telefone</label>
                            </div>
                            <div>
                                <select required="true" value={subject} onChange={(event) => subjectChange(event)}>
                                    {list.map((item, index) => (
                                        <option key={index} value={item.name}>{item.name}</option>
                                    ))}
                                </select>
                                <label>Assunto</label>
                            </div>
                            <div>
                                <textarea required="true" value={message} onChange={(event) => messageChange(event)}></textarea>
                                <label>Messagem</label>
                            </div>
                            <button type="submit" value="submit" onClick={notify}>Enviar</button>
                        </form>
                    </div>
                </section>
            </div>
        </section>
</div>
    );
}

export default Contact;
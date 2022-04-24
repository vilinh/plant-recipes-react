import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
    const [status, setStatus] = useState(false);

    const handleSubmit = () => {
        setStatus(!status);
        alert("Thank you for your comments! We'll get back to you soon.")
    }

    return (
        <div>
            <div className="contact-form">
                <h1>Get in Touch</h1>
                <p>Questions? Concerns? Suggestions? Send them over!</p>
                <form onSubmit={handleSubmit}>
                    <input name="name" id="name" type="text" className="feedback-input" placeholder="Name"/>
                    <input name="email" id="email" type="email" className="feedback-input" placeholder="E-mail"/>
                    <textarea name="message" id="message" type="text" className="feedback-input" placeholder="Message"></textarea>
                    <input type="submit" value="send"/>
                </form>
            </div>
        </div>
    )
}

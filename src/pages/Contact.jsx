import React from 'react';
import '../styles/Contact.css';
import { RecipeList } from '../data/RecipeList';
import RecipePage from '../components/RecipePage';

export default function Contact() {
    return (
        <div>
            <div className="contact-form">
                <h1>Get in Touch</h1>
                <p>Questions? Concerns? Suggestions? Send them over!</p>
                <form action="contactform.php" method="post">
                    <input name="name" id="name" type="text" className="feedback-input" placeholder="Name"/>
                    <input name="email" id="email" type="email" className="feedback-input" placeholder="E-mail"/>
                    <textarea name="message" id="message" type="text" className="feedback-input" placeholder="Message"></textarea>
                    <input onclick="sendContact()" type="submit" value="send"/>
                </form>
            </div>
        </div>
    )
}

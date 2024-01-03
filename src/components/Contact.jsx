import React, { useState } from "react";
import axios from "axios";
import "../assets/style/components/contact.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const currentDateTime = new Date().toLocaleString();
    
            await axios.post("http://localhost:3001/messages", {
                ...formData,
                createdDate: currentDateTime,
            });
    
            setFormData({
                name: "",
                email: "",
                message: "",
            });

            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    

    return (
        
        <form className="contact-form" onSubmit={handleSubmit}>
           <div className="d-flex">
            <div className="d-flex align-items-center">
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </div>
           

           <div className="d-flex align-items-center">
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
           </div>

           </div>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;

import React from 'react'
import "./Contact.scss"
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx"
import axios from "axios";

export default function Contact({ setGetContact }) {

    const [submit, setSubmit] = useState(false);

    if (submit) {
        setTimeout(() => {
            setGetContact(false)
        }, [1000]);
    }

    const [name, setName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [jobPreference, setJobPreference] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/get/", {
                name,
                userEmail,
                phoneNumber,
                jobPreference
            });
            console.log(response.data);
            setName("");
            setUserEmail("");
            setPhoneNumber("");
            setJobPreference("");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='contactSection'>
            <div className="contactContent">
                <form className="contactContainer" onSubmit={handleSubmit}>
                    <label className="title">Name*</label>
                    <input type="text" placeholder='Enter Your Name' required value={name} onChange={(e) => setName(e.target.value)} />
                    <label className="title">Email*</label>
                    <input type="email" placeholder='Enter Your Email' required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    <label className="title">Phone Number*</label>
                    <input type="number" placeholder='Enter Your Phone Number' required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <label className="title">Job Preference*</label>
                    <input type="text" placeholder='Looking for?' required value={jobPreference} onChange={(e) => setJobPreference(e.target.value)} />
                    <div className="button" onClick={() => setSubmit(true)}>
                        <button type='submit'>
                            Submit
                        </button>
                    </div>
                    <div className="cross" onClick={() => setGetContact(false)}><RxCross2 /></div>
                    {submit && <div className="submitDialogueBox">
                        Thanks for submitting Your Response!
                    </div>}
                </form>
            </div>
        </div>
    )
}

import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { toast } from 'react-toastify'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b7326161-78e2-4e40-b2bf-46c7bc036698");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
        } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult();
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact from or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>

                <ul>
                    <li><img src={mail_icon} alt="" />Smacknfor1@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+237 693 67 80 76</li>
                    <li><img src={location_icon} alt="" />Yaounde Cameroon</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name...' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Phone Number...' required />
                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message...' required></textarea>
                    <button type='submit' className='btn dark-btn'>{result ? result : "Submit Now"} <img src={white_arrow} alt="" /></button>
                </form>
                <span></span>
            </div>
        </div>
    )
}

export default Contact
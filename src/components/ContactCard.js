import React from "react"

const ContactCard = (props) => {

    return (
        <div className="contact-card">

                <img src={props.imgUrl} alt="kitten"/>
                <h3>{props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
    )
}

export default ContactCard
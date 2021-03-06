import React, { useState, useRef } from "react";
import "./SignUp.css";
import emailjs from "@emailjs/browser";

export default function SignUp() {
  const form = useRef();
  const serviceId = process.env.REACT_APP_API_SERVICE_ID;
  const templateId = process.env.REACT_APP_API_TEMPLATE_ID;
  const userId = process.env.REACT_APP_API_USER_ID;

  const [submitted, setSubmitted] = useState(false);
  const [nameCompany, setNameCompany] = useState("");
  const [typeActivity, setTypeActivity] = useState("");
  const [cityActivity, setCityActivity] = useState("");
  const [nameContact, setNameContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    if (
      nameCompany &&
      typeActivity &&
      cityActivity &&
      nameContact &&
      email &&
      phone &&
      message
    ) {
      setSubmitted(true);
    }
  };

  const handleNameCompanyInputChange = (e) => {
    e.persist();
    setNameCompany(e.target.value);
  };

  const handleTypeActivityInputChange = (e) => {
    e.persist();
    setTypeActivity(e.target.value);
  };

  const handleCityActivityInputChange = (e) => {
    e.persist();
    setCityActivity(e.target.value);
  };

  const handleNameContactInputChange = (e) => {
    e.persist();
    setNameContact(e.target.value);
  };

  const handleEmailInputChange = (e) => {
    e.persist();
    setEmail(e.target.value);
  };

  const handlePhoneInputChange = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    e.persist();
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="signup-header">
        <p className="signup-p">
          <span className="signup-span">
            Une question ? Un devis ? Un projet ?
          </span>
          <br></br> O?? que vous en soyez dans vos d??marches, nous r??pondrons
          volontiers ?? vos besoins
        </p>
      </div>
      <h1 className="signup-h1">Formulaire de contact</h1>
      <div className="signup-form">
        <div className="signup-container">
          <form
            ref={form}
            className="signup-register-form"
            onSubmit={handleSubmit}
          >
            {submitted && (
              <div className="success-message">
                Valid?? ! Merci de votre visite
              </div>
            )}
            <input
              id="name-company"
              className="signup-form-field"
              type="text"
              placeholder="Nom de l'entreprise"
              name="nameCompany"
              value={nameCompany}
              onChange={handleNameCompanyInputChange}
              required
            />
            {submitted && !nameCompany && (
              <span className="signup-span" id="name-company-error">
                Nom de l'entreprise
              </span>
            )}
            <input
              id="type-activity"
              className="signup-form-field"
              type="text"
              placeholder="Type d'activit??"
              name="typeActivity"
              value={typeActivity}
              onChange={handleTypeActivityInputChange}
              required
            />
            {submitted && !typeActivity && (
              <span className="signup-span" id="type-activity-error">
                Type d'activit??
              </span>
            )}
            <input
              id="city-activity"
              className="signup-form-field"
              type="text"
              placeholder="Commune d'activit??"
              name="cityActivity"
              value={cityActivity}
              onChange={handleCityActivityInputChange}
              required
            />
            {submitted && !cityActivity && (
              <span className="signup-span" id="city-activity-error">
                Commune d'activit??
              </span>
            )}
            <input
              id="name-contact"
              className="signup-form-field"
              type="text"
              placeholder="Nom du contact"
              name="nameContact"
              value={nameContact}
              onChange={handleNameContactInputChange}
              required
            />
            {submitted && !nameContact && (
              <span className="signup-span" id="name-contact-error">
                Nom du contact
              </span>
            )}
            <input
              id="email"
              className="signup-form-field"
              type="text"
              placeholder="Adresse email"
              name="email"
              value={email}
              onChange={handleEmailInputChange}
              required
            />
            {submitted && !email && (
              <span class="signup-span" id="email-error">
                Adresse email
              </span>
            )}
            <input
              id="phone"
              className="signup-form-field"
              type="text"
              placeholder="Num??ro de t??l??phone du contact"
              name="phone"
              value={phone}
              onChange={handlePhoneInputChange}
              required
            />
            {submitted && !phone && (
              <span className="signup-span" id="phone-error">
                Num??ro de t??l??phone du contact
              </span>
            )}
            <textarea
              className="signup-textarea"
              placeholder=" Laissez-nous un message..."
              name="message"
              value={message}
              onChange={handleMessageChange}
              required
              rows={10}
              cols={5}
            />

            <button className="signup-button" type="submit" value="Send">
              Envoyer
            </button>
          </form>
          <span
            style={{
              fontSize: "11px",
            }}
          >
            Tous les champs sont ?? remplir.
          </span>
          <br></br>
          <span
            style={{
              fontSize: "10px",
              backgroundColor: "#a2d9ce",
            }}
          >
            En soumettant ce formulaire, j'accepte que les donn??es saisies
            soient collect??es dans le but de traiter ma demande.
          </span>
        </div>
      </div>
    </>
  );
}

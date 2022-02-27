import React, { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false);

  const [values, setValues] = useState({
    nameCompany: "",
    typeActivity: "",
    cityActivity: "",
    nameContact: "",
    email: "",
    phone: "",
    textarea: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.nameCompany &&
      values.typeActivity &&
      values.cityActivity &&
      values.nameContact &&
      values.email &&
      values.phone
    ) {
      setSubmitted(true);
    }
  };

  const handleNameCompanyInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      nameCompany: e.target.value,
    }));
  };

  const handleTypeActivityInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      typeActivity: e.target.value,
    }));
  };

  const handleCityActivityInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      cityActivity: e.target.value,
    }));
  };

  const handleNameContactInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      nameContact: e.target.value,
    }));
  };

  const handleEmailInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      email: e.target.value,
    }));
  };

  const handlePhoneInputChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      phone: e.target.value,
    }));
  };

  const handleTextAreaChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      textarea: e.target.value,
    }));
  };

  return (
    <>
      <div className="signup-header">
        <p className="signup-p">
          <span className="signup-span">
            Une question ? Un devis ? Un projet ?
          </span>
          <br></br> Où que vous en soyez dans vos démarches, nous répondrons
          volontiers à vos besoins
        </p>
      </div>
      <h1 className="signup-h1">Formulaire de contact</h1>
      <div className="signup-form">
        <div className="signup-container">
          <form className="signup-register-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                Validé ! Merci de votre visite
              </div>
            )}
            <input
              id="name-company"
              className="signup-form-field"
              type="text"
              placeholder="Nom de l'entreprise"
              name="name-company"
              value={values.nameCompany}
              onChange={handleNameCompanyInputChange}
            />
            {submitted && !values.nameCompany && (
              <span className="signup-span" id="name-company-error">
                Nom de l'entreprise
              </span>
            )}
            <input
              id="type-activity"
              className="signup-form-field"
              type="text"
              placeholder="Type d'activité"
              name="type-activity"
              value={values.typeActivity}
              onChange={handleTypeActivityInputChange}
            />
            {submitted && !values.typeActivity && (
              <span className="signup-span" id="type-activity-error">
                Type d'activité
              </span>
            )}
            <input
              id="city-activity"
              className="signup-form-field"
              type="text"
              placeholder="Commune d'activité"
              name="city-activity"
              value={values.cityActivity}
              onChange={handleCityActivityInputChange}
            />
            {submitted && !values.cityActivity && (
              <span className="signup-span" id="city-activity-error">
                Commune d'activité
              </span>
            )}
            <input
              id="name-contact"
              className="signup-form-field"
              type="text"
              placeholder="Nom du contact"
              name="name-contact"
              value={values.nameContact}
              onChange={handleNameContactInputChange}
            />
            {submitted && !values.nameContact && (
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
              value={values.email}
              onChange={handleEmailInputChange}
            />
            {submitted && !values.email && (
              <span class="signup-span" id="email-error">
                Adresse email
              </span>
            )}
            <input
              id="phone"
              className="signup-form-field"
              type="text"
              placeholder="Numéro de téléphone du contact"
              name="phone"
              value={values.phone}
              onChange={handlePhoneInputChange}
            />
            {submitted && !values.phone && (
              <span className="signup-span" id="phone-error">
                Numéro de téléphone du contact
              </span>
            )}
            <textarea
              className="signup-textarea"
              placeholder=" Laissez-nous un message..."
              value={values.textarea}
              onChange={handleTextAreaChange}
              required
              rows={10}
              cols={5}
            />

            <button className="signup-button" type="submit">
              Envoyer
            </button>
          </form>
          <span>Tous les champs sont à remplir</span>
        </div>
      </div>
    </>
  );
}

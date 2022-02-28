import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./About.css";

export default function About() {
  return (
    <>
      <a
        href="http://www.prev33.fr/src/CV/CV.pdf"
        target="_blank"
        className="about-cv"
        rel="noopener noreferrer"
      >
        <svg
          className="about-svg"
          width="3em"
          height="3em"
          viewBox="0 0 448 512"
        >
          <path
            fill="#e19e20"
            d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm98.88 133.234c19.636 0 37.082 6.789 49.929 16.971c11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682c-8.248-6.552-16.478-8.484-23.524-8.484c-27.626 0-42.17 25.693-42.17 54.287c0 37.573 19.161 56.22 42.17 56.22c22.3 0 31.278-15.51 37.08-25.435L219.6 302.66c-6.315 9.926-12.374 19.635-25.95 29.069c-7.262 5.09-23.977 15.037-47.736 15.037C100.586 346.766 64 313.81 64 255.87c0-50.636 34.415-90.637 82.88-90.637zm75.483 5.328h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01l-58.647-171.111z"
          ></path>
        </svg>
      </a>
      <div id="about-top"></div>
      <div className="about">
        <div className="about-card">
          <p className="about-p">
            Alexandre ALONSO crée Prév 33 en septembre 2020. Fort de 30 ans
            d’activités dans le domaine de l’urgence, la formation et la
            sécurité, j’ai décidé de créer mon entreprise afin de mettre mon
            expérience au service des PME/TPE.
          </p>
          <p className="about-p">
            Ma carrière militaire à la Brigade des Sapeurs-Pompiers de Paris m’a
            permis de m’épanouir dans plusieurs postes de 1989 à 2013.<br></br>
            <br></br>-&nbsp;Chef d’agrès et Chef de garde en unité
            opérationnelle
            <br></br>-&nbsp;Chef de poste de secours Usine Propergol de Guyane à
            Kourou<br></br>-&nbsp;Spécialiste en déminage et interventions sur
            engins explosifs improvisés (IEEI) <br></br>-&nbsp;Sous-chef de
            centre et Chef de Centre de secours à Paris <br></br>
            -&nbsp;Formateur et responsable pédagogique au Centre de Formation
            des Cadres de la BSPP <br></br>
            -&nbsp;Préventionniste incendie
          </p>
          <p className="about-p">
            J’ai par la suite exercé en qualité de Directeur du Service Hygiène
            et Sécurité de l’université Jean Moulin à Lyon.<br></br>Mes
            attributions reposaient sur 3 grands domaines de sécurité.
            <br></br>
            <br></br>
            <b>
              -&nbsp;Chef du service sécurité incendie et d’assistance aux
              personnes
            </b>
            <br></br>
            10 ERP, 110 000 m2, 30 000 étudiants, 600 événements par/an, 2
            postes de sécurité 25 SSIAP <br></br> <br></br>
            <b>-&nbsp;Conseiller de prévention</b>
            <br></br>1500 personnels 19 unités de recherche, 20 unités de
            travail, Membre du réseau GPSUP<br></br>
            <br></br>
            <b>-&nbsp;Fonctionnaire sécurité défense</b>
            <br></br>
            Référent radicalisation, Membre de l’AGORA des directeurs de
            sécurité, habilitation CD<br></br>
            <br></br>
            <u>Mes formations:</u>
            <br></br>-&nbsp;Préventionniste niveau 2 (PRV2) membre SP des
            commissions de sécurité<br></br>-&nbsp;Chef de service de sécurité
            incendie et d’assistance aux personnes (SSIAP 3)
            <br></br>-&nbsp;Instructeur, moniteur national de secourisme
            <br></br>-&nbsp;Diplôme de formateur de formateurs<br></br>
            -&nbsp;Simulation attentat, Plan de continuité d’activité, gestion
            de crise<br></br>-&nbsp;Prévention de la radicalisation<br></br>
            -&nbsp;Formations managériales, qualité, cartographie des processus
            <br></br>-&nbsp;Formation à la responsabilité civile et pénale
            <br></br>
            -&nbsp;Habilitation électrique BS-BE<br></br>
            -&nbsp;Formation aux risques psychosociaux, QVT<br></br>
            -&nbsp;Brevet d’intervention sur engins explosifs improvisés
            <br></br>-&nbsp;Diplôme de chef de centre de secours (BSTAT niveau
            3)
          </p>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 className="about-h3">
            <i>&#171; La sécurité est l'affaire de TOUS. &#187;</i>
          </h3>
          <br></br>
          <hr></hr>
          <br></br>
          <p className="about-p">
            C’est en premier lieu une affaire de spécialistes.<br></br>La
            société PREV 33 a pour objectif d’aider les responsables
            d’entreprises et exploitants d’établissements à conserver et
            augmenter leur niveau de sécurité.<br></br>
            <br></br> Elle intervient dans les domaines suivants:<br></br>
            <br></br>-&nbsp;Prévention Incendie<br></br>-&nbsp;Sûreté <br></br>
            -&nbsp;Prévention des risques professionnels <br></br>
            <br></br>PREV 33<b></b> vous guide pour respecter les nombreuses
            réglementations relatives au code du travail, la prévention des
            risques professionnels ainsi que les règles de prévention incendie
            dans les établissements recevant du public (ERP).<br></br>
            <br></br>Nous retrouvons l’obligation de résultats et/ou obligation
            de moyens dans de nombreuses situations. La responsabilité pénale
            des dirigeants sera souvent recherchée en cas de sinistre.<br></br>
            <br></br>A l’écoute de ses clients, <b>PREV 33</b> est en mesure
            d’intervenir dans plusieurs domaines:<br></br>
            <br></br>-&nbsp;Organisation du travail<br></br>-&nbsp;Proposer des
            mesures d’accompagnement<br></br>-&nbsp;Anticipation des crises
            <br></br>
            -&nbsp;Visite de sécurité<br></br>-&nbsp;Proposer des formations à
            la carte
            <br></br>
            <br></br>Pourquoi l’intervention d’un conseiller extérieur est-elle
            la meilleure solution ?<br></br>
            <br></br> <b>∙&nbsp;Une Expertise spécialisée:</b>
            <br></br>en général, le directeur d'une entreprise recourt aux
            services de spécialistes s’il ne dispose pas des ressources en
            interne.<br></br>
            <br></br>
            <b>∙&nbsp;Objectivité:</b>
            <br></br> une analyse extérieure et une vision non partisane
            permettent aussi d’avoir un autre avis sans parti pris. Cette
            nouvelle lecture permet de prendre des décisions sur la stratégie ou
            les investissements. Nous disons souvent que l’on ne peut pas être
            juge et parti.<br></br>
            <br></br>
            <b>∙&nbsp;Confidentialité:</b>
            <br></br> parfois, le dirigeant d'entreprise désire effectuer une
            étude et la garder confidentielle notamment sur des sujets
            sensibles.<br></br>
            <br></br>
            <b>∙&nbsp;Crédibilité:</b> un conseiller extérieur peut être
            sollicité pour présenter un rapport dans le but d'appuyer une
            décision qui a été prise par un directeur d'entreprise. Un directeur
            peut connaître exactement ce qu'il veut et quelle décision prendre,
            mais préfère se référer à un consultant pour obtenir un support
            réglementaire dans la réalisation de son projet. L'intégrité et
            l'objectivité du consultant sera cependant toujours prépondérante.
            Une décision ne sera appuyée que si elle respecte le cadre
            réglementaire et la déontologie.<br></br>
            <br></br>
            <b>∙&nbsp;Capacité de travail:</b> souvent, l'entreprise cliente
            manque de cadres disponibles pour réaliser une étude ou un projet
            interne.
          </p>

          <Link to="/" className="about-logo">
            <img className="about-img" src={logo} alt="logo prev33" />
          </Link>
        </div>
        <a href="#about-top" className="about-top">
          <svg width="2em" height="2em" viewBox="0 0 24 24">
            <path
              fill="#a8976a"
              d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm9-2.586l-2.293 2.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 9.414V17a1 1 0 1 1-2 0V9.414z"
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}

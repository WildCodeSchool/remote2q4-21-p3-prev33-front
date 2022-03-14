import React from "react";
import "./ModalMentions.css";

const ModalMentions = ({ show, hide }) =>
  show ? (
    <React.Fragment>
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className="modal">
            <h1>PREV33</h1>
            <button type="button" className="modal-close-button" onClick={hide}>
              <span>&#120;</span>
            </button>
            <div className="modal-body">
              <p className="modal-p">
                <b className="modal-b">1. Conditions d'utilisation du site</b>
                <br></br>
                <br></br>En poursuivant votre visite sur le site PREV 33, vous
                acceptez de respecter les restrictions ci-dessous. Le
                responsable de la publication sera libre de modifier à tout
                moment son contenu.
              </p>
              <p className="modal-p">
                <b className="modal-b">2. Propriété intellectuelle</b>
                <br></br>
                <br></br>En accord avec les lois régissant la propriété
                intellectuelle, la reproduction ou l'utilisation des éléments se
                trouvant dans ce site Internet, en totalité ou en partie est
                strictement interdite. Seules sont maintenues les exceptions
                légales dont notamment la représentation dans le cadre du cercle
                de famille, la copie privée ou le droit de courte citation.
                Ainsi, tous les textes, photos, logos, marques et autres
                éléments reproduits sur ce site sont réservés et protégés par le
                droit de la propriété intellectuelle. (Droit auteur, droit
                voisin, droit des marques…).<br></br>
                <br></br> PREV 33 ne saurait être tenu responsable des
                utilisations faites par les utilisateurs des données accessibles
                sur le site.
              </p>
              <p className="modal-p">
                <b className="modal-b">3. Liens vers le site</b>
                <br></br>
                <br></br>Le site peut inclure des liens vers d’autres sites Web
                ou d’autres sources Internet. Dans la mesure où PREV 33 ne peut
                contrôler ces sites et ces sources externes, PREV 33 ne peut
                être tenu pour responsable de la mise à disposition de ces sites
                et sources externes, et ne peut supporter aucune responsabilité
                quant au contenu, publicités, produits, services ou tout autre
                matériel disponible sur ou à partir de ces sites ou sources
                externes. De plus, PREV 33 ne pourra être tenu responsable de
                tous dommages ou pertes avérés ou allégués consécutifs ou en
                relation avec l’utilisation ou le fait d’avoir fait confiance au
                contenu, à des biens ou des services disponibles sur ces sites
                ou sources externes.
              </p>
              <p className="modal-p">
                <b className="modal-b">
                  4. Protection des données personnelles
                </b>
                <br></br>
                <br></br>PREV 33 s'engage à préserver la confidentialité des
                informations éventuellement fournies en ligne par l’internaute.
                Toute information personnelle que l'internaute serait amené à
                transmettre à PREV 33 pour l’utilisation de certains services
                est soumise aux dispositions de la Loi n° 78-17 Informatique et
                Libertés du 06 janvier 1978. A ce titre, l'internaute dispose
                d'un droit d’accès, de rectification et de suppression des
                informations personnelles le concernant qu’il peut exercer à
                tout moment. A cet effet, il suffit de nous en faire la demande
                par mail à :<br></br>
                <br></br>
                <a className="modal-a" href="mailto:prev33.contact@gmail.com">
                  prev33@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) : null;

export default ModalMentions;

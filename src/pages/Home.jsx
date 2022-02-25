import React from 'react';
import CardsFormations from '../components/cards/CardsFormations';
import './Home.css';

import ImgIncendie from '../assets/img/ImgIncendie.jpg';

const home = () => {
  return (
    <div className='Home'>
      <h2 className='title-formation'>Formation</h2>
      <div className="formation-card">

        <CardsFormations title="Incendie" image={ImgIncendie}
         pageFormation1='/'
         pageFormation2='/'
         pageFormation3='/'
         pageFormation4='/'
         pageFormation5='/'
         titleFormation1='Equipiers de premiéres intervention' 
         titleFormation2='Manipulation des extincteurs' 
         titleFormation3='Sensibilisation à la Reglementation Incendie' 
         titleFormation4='Formation Responsable Unique de Sécurité' 
         titleFormation5='Utilisation du Systeme de Securité Incendie (SSI)' /> 

        <CardsFormations
        title="Securité"
         image={ImgIncendie}
        pageFormation1='/'
        pageFormation2='/'
        pageFormation3='/'
        pageFormation4='/'
        pageFormation5='/'
        titleFormation1='Equipiers de premiéres intervention' 
        titleFormation2='Manipulation des extincteurs' 
        titleFormation3='Sensibilisation à la Reglementation Incendie' 
        titleFormation4='Formation Responsable Unique de Sécurité' 
        titleFormation5='Utilisation du Systeme de Securité Incendie (SSI)'  />

        <CardsFormations title="truc" image={ImgIncendie} />
        <CardsFormations title="Un autre truc" image={ImgIncendie} />
      </div>

      <h2 className="title-formation">Audits et Conseils</h2>
      <div className="formation-card">
      <CardsFormations title="Prevention Incendie" image={ImgIncendie}
         pageFormation1='/'
         pageFormation2='/'
         pageFormation3='/'
         pageFormation4='/'
         titleFormation1='Préparation des commissions de securité' 
         titleFormation2="Mise en place d'exercice"
         titleFormation3="Evaluation du rique d'incendie" 
         titleFormation4='Suivi des maintenances et VTR' 
         />

      <CardsFormations title="Assistance sûreté" image={ImgIncendie}
         pageFormation1='/'
         pageFormation2='/'
         pageFormation3='/'
         pageFormation4='/'
         pageFormation5='/'
         titleFormation1='Equipiers de premiéres intervention' 
         titleFormation2='Manipulation des extincteurs' 
         titleFormation3='Sensibilisation à la Reglementation Incendie' 
         titleFormation4='Formation Responsable Unique de Sécurité' 
         titleFormation5='Utilisation du Systeme de Securité Incendie (SSI)' />

      <CardsFormations title="Incendie" image={ImgIncendie}
         pageFormation1='/'
         pageFormation2='/'
         pageFormation3='/'
         pageFormation4='/'
         pageFormation5='/'
         titleFormation1='Equipiers de premiéres intervention' 
         titleFormation2='Manipulation des extincteurs' 
         titleFormation3='Sensibilisation à la Reglementation Incendie' 
         titleFormation4='Formation Responsable Unique de Sécurité' 
         titleFormation5='Utilisation du Systeme de Securité Incendie (SSI)' />

      <CardsFormations title="Incendie" image={ImgIncendie}
         pageFormation1='/'
         pageFormation2='/'
         pageFormation3='/'
         pageFormation4='/'
         pageFormation5='/'
         titleFormation1='Equipiers de premiéres intervention' 
         titleFormation2='Manipulation des extincteurs' 
         titleFormation3='Sensibilisation à la Reglementation Incendie' 
         titleFormation4='Formation Responsable Unique de Sécurité' 
         titleFormation5='Utilisation du Systeme de Securité Incendie (SSI)' />
      </div>

      <h2 className="title-formation">Testez votre niveau de Securité</h2>
      <div className="formation-card">
      <CardsFormations title="Risque Incendie" image={ImgIncendie} />
      <CardsFormations title="Risque liées à la sureté" image={ImgIncendie} />
      <CardsFormations title="Risque professionnems" image={ImgIncendie} />
      </div>
      
    </div>
  )
}

export default home
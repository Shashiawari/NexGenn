import React from 'react';
// Importing the CSS file
import "./Card.css"
const Card = ({ name, domain, experience, links ,email}) => {
  return (
    
    <div className="card">
      <h2 className="card-name">{name}</h2>
      <p className="card-domain">{domain}</p>
      <p className="card-experience"> {experience} years</p>
      <p className="card-experience">{email}</p>
      <div className="card-links">
        {links && links.length > 0 ? (
          links.map((link, index) => (
            <a className="btn" key={index} href={link.url} >
              {link.label}
            </a>
          ))
        ) : (
          <p>No links available</p>
        )}
      </div>
     
  </div>
  );
};

export default Card;




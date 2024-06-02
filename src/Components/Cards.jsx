import React from 'react';
import './Card.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language'; // Assuming this represents a Website icon



const Cards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8  p-5">
      {data.map((card, index) => (
        <a key={index} className={`card-${card.bgColor} p-6 rounded-lg shadow-md border border-2 max-h-96 max-h-80`} href={card.deploy}>
          {/* <img src={card.logo} alt={`${card.title} Logo`} className="w-8 h-8" /> */}
          <h2 className="text-2xl font-bold text-white mb-4">{card.title}</h2>
          <hr/>
          <div className="text-white mb-4 mt-2" >
            <ul>
              {card.description && card.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex justify-center mt-4 overflow-hidden">
            {card.images && card.images.map((image, index) => (
              <img key={index} src={image} alt={`${card.title} ${index + 1}`} className="rounded-xl overflow-hidden  max-w-30  max-h-20 mx-2" />
            ))}
          </div>
          <div className="flex justify-center md:p-10 p-1 gap-2 ">
            <a href={card.github} className="text-white underline"><GitHubIcon/></a>
            <a href={card.deploy} className="text-white underline"><LanguageIcon/></a>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Cards;

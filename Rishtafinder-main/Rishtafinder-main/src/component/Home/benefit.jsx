// Benefit.js
import React, { useState } from 'react';
import './benefit.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Benefit = () => {
  const [panelVisibility, setPanelVisibility] = useState([false, false, false, false, false]);

  const handleTogglePanel = (index) => {
    const updatedVisibility = [...panelVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setPanelVisibility(updatedVisibility);
  };

  return (
    <div className="benefit-container">
      <hr className="horizontal-line" />
      <div className="benefit-item" onClick={() => handleTogglePanel(0)}>
        <i className="bi bi-person-fill benefit-icon"></i>
        <span>Why do we charge?</span>
        <KeyboardArrowDownIcon />

      </div>
      {panelVisibility[0] && (
        <div className="panel">
          We charge ₹99 because we are an organization and we have employees working with salary. We have to pay them as well as for the website. The second reason for this 99 rupees is that everyone can afford it.
        </div>
      )}
      <hr className="horizontal-line" />
      <div className="benefit-item" onClick={() => handleTogglePanel(1)}>
        <i className="bi bi-images benefit-icon"></i>
        <span>Photos of girls</span><KeyboardArrowDownIcon />
      </div>
      {panelVisibility[1] && (
        <div className="panel">
          We don't ask for pics from girls. So it's a kind request not to ask for it.
        </div>
      )}
      <hr className="horizontal-line" />
      <div className="benefit-item" onClick={() => handleTogglePanel(2)}>
        <i className="bi bi-chat-dots benefit-icon"></i>
        <span>Be serious please</span><KeyboardArrowDownIcon />
      </div>
      {panelVisibility[2] && (
        <div className="panel">
          There are many people who just want to chit chat with girls. The girls' profiles on Nikah Finder are not for chit chat and talking on the phone etc. Be serious in the matter of Nikah.
        </div>
      )}
      <hr className="horizontal-line" />
      <div className="benefit-item" onClick={() => handleTogglePanel(3)}>
        <i className="bi bi-whatsapp benefit-icon"></i>
        <span>Our WhatsApp</span><KeyboardArrowDownIcon />
      </div>
      {panelVisibility[3] && (
        <div className="panel">
          9569592952 <KeyboardArrowDownIcon />
        </div>
      )}
      <hr className="horizontal-line" />
      <div className="benefit-item" onClick={() => handleTogglePanel(4)}>
        <i className="bi bi-envelope benefit-icon"></i>
        <span>Our email</span>
      </div>
      {panelVisibility[4] && (
        <div className="panel">
          vijay9005442298@gmail.com<KeyboardArrowDownIcon />
        </div>
      )}
      <hr className="horizontal-line" />
    </div>
  );
};

export default Benefit;

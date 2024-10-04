import React from 'react';
import img2 from '../../image/crimg3.jpg';
import './mession.css'
function Mission() {
  return (
    <div>
      <div className="card card3 mb-3 w-75 center">
        <img src={img2} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">Our mission</h5>
          <p className="card-text">
            🌟 Our mission is to assist unmarried women, divorced individuals, and widows in finding compatible connections. 🤝 We understand the challenges they face and provide a supportive platform for establishing harmonious and fulfilling lives. 🌺 Respecting cultural values, we maintain modesty, ensuring privacy through no photo sharing and strict hijab boundaries. 📷 No phone numbers are disclosed; we prioritize safety by offering email IDs for secure communication. 💖 Empowering individuals on their journey to meaningful companionship with privacy and cultural values intact. 🌈
          </p>
        </div>
      </div>
      <div className="card card2 mb-3 w-75 center">
        <img src={img2} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">Privacy Policies</h5>
          <p className="card-text">
          
🔐 Privacy First! Your data is secure with us.
 <br></br>
💑 [Your Matrimony Site] is committed to crafting perfect matches.
<br></br>
🚀 Advanced security measures keep your info safe.
<br></br>
🤫 We never share your details with third parties.
<br></br>
✨ Join us for a delightful, secure matrimony experience! 💖
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;

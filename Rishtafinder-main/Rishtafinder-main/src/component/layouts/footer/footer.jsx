import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Tooltip } from 'bootstrap'; 
import './footer.css';

function Footer() {
  useEffect(() => {
const tooltipTriggerList 
= document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));
  }, []);

  return (
    <div>
      <footer>
        <div className="card text">
          <div className="card-header">
            🌟 Your Journey to Love Begins Here! Find Your Perfect Match on RishtaFinder.com 🌟
            <br />
            Join thousands who have discovered the joy of companionship and everlasting love with our exclusive matchmaking services. 🚀💕
          </div>
          <div className="card-body cardf">
            <h5 className="card-title">Discover a Lifetime of Happiness 💖</h5>
            <p className="card-text">
              Explore profiles, connect with potential partners, and embark on the journey of marital bliss with RishtaFinder.com. 💑✨
              <br />
              Our advanced matching algorithms ensure you find someone who complements your values, interests, and aspirations.
            </p>
            <a href="#" className="btn btn-primary">Start Your Search 🔍</a>
          </div>
          <div className="card-footer text-body-dark">
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram bi-lg ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook bi-lg ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"></i>
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-telegram bi-lg ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Telegram"></i>
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp bi-lg ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="WhatsApp"></i>
              </a>
            </div>
            &copy; 2024 RishtaFinder.com. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

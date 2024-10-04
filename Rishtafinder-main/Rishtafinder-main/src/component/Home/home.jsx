import React from 'react';
import criimg2 from '../../image/crimg2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home() {
  return (
    <div>
      <div className="card mb-3 my-4 home" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={criimg2} className="img-fluid rounded-start" alt="Card" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Discover True Connections</h5>
              <header>
                <h1>Welcome to Rishta Finder</h1>
                <p>Your Trusted Partner in the Journey of Matrimony!</p>
              </header>
              <section>
                <p>Are you someone who has experienced widowhood, divorce, or is currently seeking a life partner? Rishta Finder understands the unique challenges you may face, and we are here to provide compassionate support for forging a meaningful and enduring marital bond.</p>
              </section>
              <section>
                <h2>Getting Started:</h2>
                <div className="row">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Create Your Profile</h5>
                        <p className="card-text">Reflect your personality, values, and aspirations for marriage. Our advanced algorithms suggest potential matches based on your preferences.</p>
                        <a href="#" className="btn btn-primary btn-custom">
                          <i className="bi bi-person" /> Start Building
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Connect and Communicate</h5>
                        <p className="card-text">Initiate respectful conversations to build meaningful connections. Embark on your journey to marital happiness with Rishta Finder – Where True Love Begins! 💖✨</p>
                        <a href="#" className="btn btn-primary btn-custom">
                          <i className="bi bi-chat-dots" /> Start Connecting
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Guidance and Support</h5>
                        <p className="card-text">Our team of experts is here to provide support at every step, ensuring a smooth and fulfilling journey towards marriage.</p>
                        <a href="#" className="btn btn-primary btn-custom">
                          <i className="bi bi-hand-holding-heart" /> Get Support
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <p className="card-text">
                <small className="text-body-secondary"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

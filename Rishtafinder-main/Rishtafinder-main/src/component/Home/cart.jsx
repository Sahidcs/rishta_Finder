import React from "react";
import img1 from '../../image/crimg2.jpg';

import './cart.css'; 

function Cart() {
  return (
    <div className="maincart">
    <div className="centered-card">
      <div className="card text-center">
        <div className="card-header">List Of Members</div>
        <div className="card-body">
          <div className="card-group">
            <div className="card m-4 mycard">
              <img src={img1} className="card-img-top" alt="Member 1" />
              <div className="card-body">
                <h5 className="card-title">Member 1</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card m-4">
              <img src={img1} className="card-img-top" alt="Member 2" />
              <div className="card-body">
                <h5 className="card-title">Member 2</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="card m-4">
              <img src={img1} className="card-img-top" alt="Member 3" />
              <div className="card-body">
                <h5 className="card-title">Member 3</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="card-footer text-body-secondary">2 days ago</div>
      
      </div>
   
    </div>
    </div>
  );
}

export default Cart;

import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div>
      <main className="card">
        <div>
          <div className="profile-img">
            <img src={props.url} alt="" />
          </div>
          <div className="open-all">
            <h2>{props.name}</h2>
            <p className="select">{props.age}</p>
            <p>{props.email}</p>
            <p>{props.address}</p>
          </div>
          <div className="btn">
            <button>Github</button>
            <button>Frontend Mentor</button>
            <button>Twitter</button>
            <button>Linkedin</button>
            <button>Instagram</button>
          </div>
        </div>
      </main>
    </div>
  );
}
export default ProfileCard;

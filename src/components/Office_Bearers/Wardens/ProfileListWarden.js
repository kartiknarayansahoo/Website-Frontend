import React from "react";
import ProfileCardHeads from "./ProfileCardWarden";
import styles from './style.module.css'
import styleCont from "../css/ProfileCard.module.css";


function ProfileList(props) {
  return (
    <div className={styleCont.profileContainer}>
      <div className={styles.officeBearersTitle}>
        <div>Current Office-Bearers</div>
      </div>
        {props.profiles.map((profile) => (
          <ProfileCardHeads
            key={profile.id}
            classStyle={profile.classStyle}
            name={profile.name}
            position={profile.position}
            imageUrl={profile.imageUrl}
            twitterUrl={profile.twitterUrl}
            facebookUrl={profile.facebookUrl}
            instagramUrl={profile.instagramUrl}
            linkedinUrl={profile.linkedinUrl}
          />
        ))}
      </div>
  );
}

export default ProfileList;

import React from "react";
import fb from "../img/svg/facebook.svg";
import inst from "../img/svg/instagram.svg";
import '../components/css/footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a href="https://www.facebook.com/lamiya.ismayilova.73/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0">
          <img src={fb} width="20" />
        </a>
        <a href="https://www.instagram.com/aforizm.academy/">
          <img src={inst} width="40" />
        </a>
      </div>
    </footer>

    
  );
}

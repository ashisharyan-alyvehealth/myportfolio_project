import React from "react";
import "./work-card.css";
function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>•{item.work}</p>
        </div>
        <div className="work-desc">
          <p>•{item.work1}</p>
        </div>
        <div className="work-desc">
          <p>•{item.work2}</p>
        </div>
        
      </div>
      <div className="download1">
          <a download href={"https://play.google.com/store/apps/details?id=com.health.immunity"}>
            {/* <i class="fi-rr-cloud-download download-icon" /> */}
            <img className="playstoreimage" src={"https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png"}/>
          </a>
        </div>
    </div>
  );
}

export default WorkCard;
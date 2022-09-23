import React from "react";
import WhiteLogo from "../../assets/images/whitelogo.png";
import PersonalDetailIcon from "../../assets/images/mobile-menu/resume.png";
import ObjectiveIcon from "../../assets/images/mobile-menu/objectives.png";
import EducationIcon from "../../assets/images/mobile-menu/education.png";
import ExperienceIcon from "../../assets/images/mobile-menu/experience.png";
import SkillIcon from "../../assets/images/mobile-menu/pencil.png";
import LanguageIcon from "../../assets/images/mobile-menu/languages.png";
import InterestIcon from "../../assets/images/mobile-menu/daily-tasks.png";
import CertificationIcon from "../../assets/images/mobile-menu/certificate.png";
import ReferenceIcon from "../../assets/images/mobile-menu/referral.png";
import ProjectIcon from "../../assets/images/mobile-menu/strategy.png";

const MobileIndex = () => {
  return (
    <>
      <div className="mobile">
        <header>
          <div className="container">
            <div className="d-flex align-items-center justify-contnte-between py-3">
              <div className="left-content">
                <img
                  src={WhiteLogo}
                  alt="broadway logo"
                  className="broadwaylogo"
                />
                <h2>Generate your CV with us</h2>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="menu-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-3 mb-3">
                  <div className="cv-menu">
                    <img src={PersonalDetailIcon} alt="menu-icon" />
                  </div>
                  <h3 class="cv-menu-title">Personal Detail</h3>
                </div>
                <div className="col-3 mb-3">
                  <div className="cv-menu">
                    <img src={ObjectiveIcon} alt="menu-icon" />
                  </div>
                  <h3 class="cv-menu-title">Objectives</h3>
                </div>
                <div className="col-3 mb-3">
                  <div className="cv-menu">
                    <img src={EducationIcon} alt="menu-icon" />
                  </div>
                  <h3 class="cv-menu-title">Education</h3>
                </div>
                <div className="col-3 mb-3">
                  <div className="cv-menu">
                    <img src={ExperienceIcon} alt="menu-icon" />
                  </div>
                  <h3 class="cv-menu-title">Experience</h3>
                </div>
                <div className="col-3 mb-3">
                  <div className="cv-menu">
                    <img src={SkillIcon} alt="menu-icon" />
                  </div>
                  <h3 class="cv-menu-title">Skills</h3>
                </div>
                <div className="col-3 mb-3">
                  <div className="cv-menu">
                    <img src={LanguageIcon} alt="menu-icon" />
                  </div>
                  <h3 class="cv-menu-title">Languages</h3>
                </div>
                <div className="col-3 mb-3">
                  <div className="cv-menu">
                    <img src={InterestIcon} alt="menu-icon" />
                  </div>
                  <h3 class="cv-menu-title">Interests</h3>
                </div>
                <div className="col-3 mb-3">
                  <div className="cv-menu">
                    <img src={CertificationIcon} alt="menu-icon" />
                  </div>
                  <h3 class="cv-menu-title">Ceritificates</h3>
                </div>
                <div className="col-3 mb-3">
                  <div className="cv-menu">
                    <img src={ReferenceIcon} alt="menu-icon" />
                  </div>
                  <h3 class="cv-menu-title">References</h3>
                </div>
              </div>
              <h5 className="">Add Additional Details</h5>
              <div className="row">
                <div className="col-3 mb-3">
                  <div className="cv-menu">
                    <img src={ProjectIcon} alt="menu-icon" />
                  </div>
                  <h3 class="cv-menu-title">Projects</h3>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MobileIndex;

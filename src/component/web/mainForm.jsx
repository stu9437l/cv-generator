import React from "react";
import DefaultProfile from "../../assets/images/profile_default_image.jpg";
import { FaUpload } from "react-icons/fa";
import Skills from "./skill";
import CvPreview from "./CvPreview";
import Education from "./education";
import Training from "./training";
import Interest from "./interest";
import Language from "./language";
import Reference from "./reference";
import ProjectICon from "../../assets/images/project.png";
const Mainform = () => {
  return (
    <>
      <div className="webForm">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2 className="mb-3 header-tittle">Generate Your CV</h2>
              <form action="">
                <div className="form-group mb-4">
                  <label htmlFor="profile-upload" className="default-label">
                    Upload image
                  </label>
                  <label
                    htmlFor="profile-upload"
                    className="circle-90-90 image-upload"
                  >
                    <img src={DefaultProfile} alt="" className="img-100-100" />
                    <label
                      htmlFor="profile-upload"
                      className="profile-upload edit shadow"
                    >
                      <FaUpload />
                    </label>
                  </label>
                  <input
                    type="file"
                    className="d-none"
                    name="profile-upload"
                    id="profile-upload"
                  />
                </div>
                <div className="form-group">
                  <h3 className="title">Personal detail</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi earum quam amet officiis.
                  </p>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="job-title" className="default-label">
                        Wanted job title
                      </label>
                      <input
                        className="form-control"
                        name="jot-title"
                        id="job-title"
                        placeholder="What job you want"
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="fname" className="default-label">
                        First Name
                      </label>
                      <input
                        className="form-control"
                        name="fname"
                        id="fname"
                        placeholder="Enter First Name"
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="fname" className="default-label">
                        Last Name
                      </label>
                      <input
                        className="form-control"
                        name="lname"
                        id="lname"
                        placeholder="Enter Last Name"
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="email" className="default-label">
                        Email Address
                      </label>
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="phone-number" className="default-label">
                        Phone Number
                      </label>
                      <input
                        className="form-control"
                        name="phone-number"
                        id="phone-number"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="website" className="default-label">
                        Website
                      </label>
                      <input
                        className="form-control"
                        name="website"
                        id="website"
                        placeholder="Enter Website link"
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="linkedin" className="default-label">
                        Linkedin URL
                      </label>
                      <input
                        className="form-control"
                        name="linkedin"
                        id="linkedin"
                        placeholder="Enter Linkeding Url"
                      />
                    </div>
                    <div className="col-12 mb-0">
                      <label htmlFor="address" className="default-label">
                        Adress
                      </label>
                      <textarea
                        className="form-control pt-2"
                        name="address"
                        id="address"
                        placeholder="Enter Address"
                        rows={4}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h3 className="title">Professional Summary</h3>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi earum quam amet officiis.
                  </p>
                  <div className="row mb-3">
                    <div className="col-12 mb-0">
                      <label htmlFor="objective" className="default-label">
                        Objectives
                      </label>
                      <textarea
                        className="form-control pt-2"
                        name="objective"
                        id="objective"
                        placeholder="To continue my career with an organization that ............"
                        rows={4}
                      ></textarea>
                    </div>
                  </div>
                  <h4 className="hint-obj">Choose hint Objectives :</h4>

                  <div className="row mb-2">
                    <div className="col-1">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="check-objective"
                        id="check-objective"
                      />
                    </div>
                    <div className="col-11">
                      <label
                        htmlFor="check-objective"
                        className="radio-check-label"
                      >
                        To continue my career with an organication that wil
                        utilize my MANAGWMWNT, SUPERVISION & ADMINISTRATIVWW
                        skills to benefit mutual growth and success.
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="check-objective"
                        id="check-objective"
                      />
                    </div>
                    <div className="col-11">
                      <label
                        htmlFor="check-objective"
                        className="radio-check-label"
                      >
                        To continue my career with an organication that wil
                        utilize my MANAGWMWNT, SUPERVISION & ADMINISTRATIVWW
                        skills to benefit mutual growth and success.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h3 className="title">Professional Skills</h3>
                  <p className="description">
                    Choose 3 of the most important skills to show your talents.
                    Make sure they match the keywords of the job listing in
                    applying via an online system.
                  </p>
                  <Skills />
                </div>
                <div className="form-group">
                  <h3 className="title">Education</h3>
                  <p className="description">
                    Choose 3 of the most important skills to show your talents.
                    Make sure they match the keywords of the job listing in
                    applying via an online system.
                  </p>
                  <Education />
                </div>
                <div className="form-group">
                  <h3 className="title">Training</h3>
                  <p className="description">
                    Choose 3 of the most important skills to show your talents.
                    Make sure they match the keywords of the job listing in
                    applying via an online system.
                  </p>
                  <Training />
                </div>
                <div className="form-group">
                  <h3 className="title">Certification</h3>
                  <p className="description">
                    Choose 3 of the most important skills to show your talents.
                    Make sure they match the keywords of the job listing in
                    applying via an online system.
                  </p>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="certification" className="default-label">
                        Certification Detail
                      </label>
                      <input
                        className="form-control"
                        name="certificate"
                        id="certification"
                        placeholder="Write your certification"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h3 className="title">Interest</h3>
                  <p className="description">
                    Choose 3 of the most important skills to show your talents.
                    Make sure they match the keywords of the job listing in
                    applying via an online system.
                  </p>
                  <Interest />
                </div>
                <div className="form-group">
                  <h3 className="title">Language</h3>
                  <p className="description">
                    Choose 3 of the most important skills to show your talents.
                    Make sure they match the keywords of the job listing in
                    applying via an online system.
                  </p>
                  <Language />
                </div>
                <div className="form-group">
                  <h3 className="title">Reference</h3>
                  <p className="description">
                    Choose 3 of the most important skills to show your talents.
                    Make sure they match the keywords of the job listing in
                    applying via an online system.
                  </p>
                  <Reference />
                </div>
                <button className="btn-custom-primary">Submit</button>
                <div className="other_section_wrapper">
                  <h3 className="title my-4">Add other sections</h3>
                  <div className="mb-3">
                    <label htmlFor="project" class="block-checkbox shadow">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <input
                            type="checkbox"
                            name="other-content"
                            id="project"
                            className="form-check-input me-3"
                          />
                          <label htmlFor="project">Projects</label>
                        </div>
                        <img src={ProjectICon} alt="project-icon" />
                      </div>
                    </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="project" class="block-checkbox shadow">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <input
                            type="checkbox"
                            name="other-content"
                            id="experience"
                            className="form-check-input me-3"
                          />
                          <label htmlFor="experience">Experience</label>
                        </div>
                        <img src={ProjectICon} alt="experience-icon" />
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-6">
              <CvPreview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainform;

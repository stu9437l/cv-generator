import React from "react";
import DefaultProfile from "../../assets/images/profile_default_image.jpg";
const CVReview = () => {
  return (
    <>
      <div className="webForm">
        <div className="container">
          <div className="row">
            <h2 className="mb-3 header-tittle">
              Send prepared cv to specific students
            </h2>
            <div className="col-6">
              <p className="note">
                <span class="title me-2">Note :</span>
                <span class="description">
                  It was good from the point of view of content delivery and
                  applicability in the field of data analysis and research for
                  carrying out quantitative analysis using the established
                  analysis models and procedures
                </span>
              </p>
              <div className="row">
                <form action="">
                  <div className="form-group">
                    <div className="col-12 mb-3">
                      <label htmlFor="generated-link" className="default-label">
                        Generated Link
                      </label>
                      <input
                        className="form-control"
                        name="generated-link"
                        id="generated-link"
                        placeholder="https://merocvgenratorforanothercompanytoapply"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="email" className="default-label">
                        Email Address
                      </label>
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="lal@gmail.com"
                      />
                    </div>
                    <button className="btn-custom-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5 offset-xl-1">
              <div className="cv-review">
                <div className="profile-review-wrapper">
                  <h4 className="title">Studnet CV Preview</h4>
                  <div className="d-flex algin-items-center jusitfy-content-between">
                    <div className="profile">
                      <img src={DefaultProfile} alt="cv image" />
                    </div>
                  </div>
                </div>
                <h4 className="sub-title">Personal Details</h4>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Full Name</th>
                        <td>Lal Bahadur BC</td>
                      </tr>
                      <tr>
                        <th>Email Address</th>
                        <td>lal@gmail.com</td>
                      </tr>
                      <tr>
                        <th>Phone</th>
                        <td>87589745</td>
                      </tr>
                      <tr>
                        <th>Linkedin URL</th>
                        <td>https:linkdin/saurave.cosm</td>
                      </tr>
                      <tr>
                        <th>Webiste</th>
                        <td>www.com.np</td>
                      </tr>
                      <tr>
                        <th>Addtess</th>
                        <td>koteshwar-32, Kathmandu, Nepal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CVReview;

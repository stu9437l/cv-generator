import React from "react";
const OTPVerify = () => {
  return (
    <>
      <div className="webForm">
        <div className="otp-verify-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-6 mx-auto">
                <h2 className="mb-3 header-tittle text-center">
                  Fill the OTP, Check Your varfied Email
                </h2>
                <div className="row">
                  <form action="">
                    <div className="form-group">
                      <div className="col-12 mb-3">
                        <label htmlFor="otp" className="default-label">
                          OTP code
                        </label>
                        <input
                          className="form-control"
                          name="otp"
                          id="otp"
                          placeholder="Enter otp code"
                        />
                      </div>
                      <button className="btn-custom-primary mx-auto">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerify;

import React, { useState } from "react";

const Reference = () => {
  return (
    <>
      <div className="add-new-form">
        <div className={`form-wrapper mb-3`}>
          <div className="col-12 mb-3">
            <label htmlFor={`referent-name`} className="default-label">
              Referent's Name
            </label>
            <input
              className="form-control"
              name="referent-name"
              id={`referent-name`}
              placeholder="What is your referent person ?"
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor={`institute`} className="default-label">
              Institude Name
            </label>
            <input
              className="form-control"
              name="institute"
              id={`institute`}
              placeholder="What is your institute ?"
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor={`phone`} className="default-label">
              Emil / Phone
            </label>
            <input
              className="form-control"
              name="phone"
              id={`phone`}
              placeholder="What is your phone ?"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reference;

import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Interest = () => {
  const [addInterest, setAddInterest] = useState([""]);
  const handleInterest = () => {
    setAddInterest([...addInterest, ""]);
  };
  return (
    <>
      {addInterest.length > 0 &&
        addInterest.map((val, index) => {
          return (
            <div className="add-new-form" key={index}>
              <div className="add-form-heading">
                <a type="button" class="title">
                  <BiChevronDown />
                  Interest{index + 1}
                </a>
                <a type="button" className="del-btn">
                  <RiDeleteBin2Fill />
                </a>
              </div>
              <div className={`form-wrapper mb-3`}>
                <div className="col-12 mb-3">
                  <label
                    htmlFor={`interest-${index}`}
                    className="default-label"
                  >
                    What is your interest ?
                  </label>
                  <input
                    className="form-control"
                    name="interest"
                    id={`interest-${index}`}
                    placeholder="What is your interest ?"
                  />
                </div>
              </div>
            </div>
          );
        })}

      <a type="button" className="add-new-btn" onClick={handleInterest}>
        + Add Education
      </a>
    </>
  );
};

export default Interest;

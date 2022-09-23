import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Language = () => {
  const [addLanguage, setAddLanguage] = useState([""]);
  const handleLanguage = () => {
    setAddLanguage([...addLanguage, ""]);
  };
  return (
    <>
      {addLanguage.length > 0 &&
        addLanguage.map((val, index) => {
          return (
            <div className="add-new-form" key={index}>
              <div className="add-form-heading">
                <a type="button" class="title">
                  <BiChevronDown />
                  language{index + 1}
                </a>
                <a type="button" className="del-btn">
                  <RiDeleteBin2Fill />
                </a>
              </div>
              <div className={`form-wrapper mb-3`}>
                <div className="col-12 mb-3">
                  <label
                    htmlFor={`language-${index}`}
                    className="default-label"
                  >
                    Which language your speak fluently ?
                  </label>
                  <input
                    className="form-control"
                    name="language"
                    id={`language-${index}`}
                    placeholder="Which language your speak fluently ?"
                  />
                </div>
              </div>
            </div>
          );
        })}

      <a type="button" className="add-new-btn" onClick={handleLanguage}>
        + Add Education
      </a>
    </>
  );
};

export default Language;

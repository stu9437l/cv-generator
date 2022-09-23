import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Training = () => {
  const [addTraining, setAddTraining] = useState([""]);
  const handleTraining = () => {
    setAddTraining([...addTraining, ""]);
  };
  return (
    <>
      {addTraining.length > 0 &&
        addTraining.map((val, index) => {
          return (
            <div className="add-new-form" key={index}>
              <div className="add-form-heading">
                <a type="button" class="title">
                  <BiChevronDown />
                  Training Experience{index + 1}
                </a>
                <a type="button" className="del-btn">
                  <RiDeleteBin2Fill />
                </a>
              </div>
              <div className={`form-wrapper mb-3`}>
                <div className="col-12 mb-3">
                  <label
                    htmlFor={`Training-${index}`}
                    className="default-label"
                  >
                    Training Course Name
                  </label>
                  <input
                    className="form-control"
                    name="Training"
                    id={`Training-${index}`}
                    placeholder="What is your Training ?"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label
                    htmlFor={`institute-name-${index}`}
                    className="default-label"
                  >
                    Institude Name
                  </label>
                  <input
                    className="form-control"
                    name="institute-name"
                    id={`institute-name-${index}`}
                    placeholder="What is your e Institute Name?"
                  />
                </div>

                <div className="row">
                  <div className="col-6 mb-3">
                    <label
                      htmlFor={`start-date-${index}`}
                      className="default-label"
                    >
                      Start Year
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="start-date"
                      id={`start-date-${index}`}
                    />
                  </div>
                  <div className="col-6 mb-3">
                    <label
                      htmlFor={`end-date-${index}`}
                      className="default-label"
                    >
                      End Year
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="end-date"
                      id={`end-date-${index}`}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label
                    htmlFor={`description-${index}`}
                    className="default-label"
                  >
                    Description
                  </label>
                  <input
                    className="form-control"
                    name="description"
                    id={`description-${index}`}
                    placeholder="What is your Description ?"
                  />
                </div>
              </div>
            </div>
          );
        })}

      <a type="button" className="add-new-btn" onClick={handleTraining}>
        + Add Training
      </a>
    </>
  );
};

export default Training;

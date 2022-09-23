import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Education = () => {
  const [addEducation, setAddEducation] = useState([""]);
  const handleEducation = () => {
    setAddEducation([...addEducation, ""]);
  };
  return (
    <>
      {addEducation.length > 0 &&
        addEducation.map((val, index) => {
          return (
            <div className="add-new-form" key={index}>
              <div className="add-form-heading">
                <a type="button" class="title">
                  <BiChevronDown />
                  Education{index + 1}
                </a>
                <a type="button" className="del-btn">
                  <RiDeleteBin2Fill />
                </a>
              </div>
              <div className={`form-wrapper mb-3`}>
                <div className="col-12 mb-3">
                  <label htmlFor={`course-${index}`} className="default-label">
                    Course / Degree
                  </label>
                  <input
                    className="form-control"
                    name="course"
                    id={`course-${index}`}
                    placeholder="What is your course ?"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor={`school-${index}`} className="default-label">
                    School / University
                  </label>
                  <input
                    className="form-control"
                    name="school"
                    id={`school-${index}`}
                    placeholder="What is your school ?"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor={`grade-${index}`} className="default-label">
                    Grade / Scrore
                  </label>
                  <input
                    className="form-control"
                    name="grade"
                    id={`grade-${index}`}
                    placeholder="What is your Grade ?"
                  />
                </div>
                <div className="row">
                  <div className="col-6">
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
                  <div className="col-6">
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
              </div>
            </div>
          );
        })}

      <a type="button" className="add-new-btn" onClick={handleEducation}>
        + Add Education
      </a>
    </>
  );
};

export default Education;

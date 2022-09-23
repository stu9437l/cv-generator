import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Skills = () => {
  const [addSkill, setAddSkill] = useState([]);
  const addSkills = () => {
    setAddSkill([...addSkill, ""]);
  };
  const [collapse, setCollapse] = useState(0);
  return (
    <>
      <ul className="m-0 pre-skill-list">
        <li class="me-3">
          <label htmlFor="skills" className="skill-label shadow">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                name="skills"
                id="skills"
                className="form-check-input me-3 position-relative"
              />
              <span>HTML-5</span>
            </div>
          </label>
        </li>
        <li class="me-3">
          <label htmlFor="skills" className="skill-label shadow">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                name="skills"
                id="skills"
                className="form-check-input me-3 position-relative"
              />
              <span>Node Js</span>
            </div>
          </label>
        </li>
        <li class="me-3">
          <label htmlFor="skills" className="skill-label shadow">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                name="skills"
                id="skills"
                className="form-check-input me-3 position-relative"
              />
              <span>React Native</span>
            </div>
          </label>
        </li>
        <li class="me-3">
          <label htmlFor="skills" className="skill-label shadow">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                name="skills"
                id="skills"
                className="form-check-input me-3 position-relative"
              />
              <span>Cascading Stylesheet</span>
            </div>
          </label>
        </li>
        <li class="me-3">
          <label htmlFor="skills" className="skill-label shadow">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                name="skills"
                id="skills"
                className="form-check-input me-3 position-relative"
              />
              <span>javascript</span>
            </div>
          </label>
        </li>
        <li class="me-3">
          <label htmlFor="skills" className="skill-label shadow">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                name="skills"
                id="skills"
                className="form-check-input me-3 position-relative"
              />
              <span>JQuery</span>
            </div>
          </label>
        </li>
        <li class="me-3">
          <label htmlFor="skills" className="skill-label shadow">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                name="skills"
                id="skills"
                className="form-check-input me-3 position-relative"
              />
              <span>React Js</span>
            </div>
          </label>
        </li>
        <li class="me-3">
          <label htmlFor="skills" className="skill-label shadow">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                name="skills"
                id="skills"
                className="form-check-input me-3 position-relative"
              />
              <span>Mondo DB</span>
            </div>
          </label>
        </li>
        <li class="me-3">
          <label htmlFor="skills" className="skill-label shadow">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                name="skills"
                id="skills"
                className="form-check-input me-3 position-relative"
              />
              <span>Redux toolkit</span>
            </div>
          </label>
        </li>
      </ul>
      {addSkill.length > 0 &&
        addSkill.map((val, index) => {
          return (
            <div className="add-new-form" key={index}>
              <div className="add-form-heading">
                <a
                  type="button"
                  class="title"
                  onClick={() => {
                    setCollapse(index);
                  }}
                >
                  <BiChevronDown />
                  Skills{index + 1}
                </a>
                <a type="button" className="del-btn">
                  <RiDeleteBin2Fill />
                </a>
              </div>
              <div
                className={`form-wrapper mb-3 ${
                  collapse === index ? "d-block" : "d-none"
                }`}
              >
                <div className="col-12 mb-3">
                  <label htmlFor={`skills-${index}`} className="default-label">
                    Skills title :{index + 1}
                  </label>
                  <input
                    className="form-control"
                    name="skill"
                    id={`skills-${index}`}
                    placeholder="What is your skills"
                  />
                </div>
              </div>
            </div>
          );
        })}

      <a type="button" className="add-new-btn" onClick={addSkills}>
        + Add Skills
      </a>
    </>
  );
};

export default Skills;

import React from "react";
import DefaultProfile from "../../assets/images/profile_default_image.jpg";

const CvPreview = () => {
  return (
    <div className="realtime-cv-wrapper">
      <h5 class="">Real time Prefview of your CV</h5>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <div className="left-content">
                <div className="circle-60-60">
                  <img
                    className="profile-image"
                    src={DefaultProfile}
                    alt="profie image"
                  />
                </div>
                <h6 className="job-title">Web Designing</h6>
                <h2 className="fullname">
                  <span>Lal Bahadur </span>
                  <span className="lname">Budha</span>
                </h2>

                <div className="content-section">
                  <div className="cv-title">
                    <h3>Contact Info</h3>
                  </div>
                  <div className="contact-info">
                    <h4>Address</h4>
                    <p>Maitidevi-32, Kathmandu, Nepal</p>
                  </div>
                  <div className="contact-info">
                    <h4>Phone Nubmer</h4>
                    <p>+977-98777676</p>
                  </div>
                  <div className="contact-info">
                    <h4>Email Address</h4>
                    <p>lal@gmail.com</p>
                  </div>
                  <div className="contact-info">
                    <h4>Linkedin</h4>
                    <p>linkedin.com/lal/7hf6d</p>
                  </div>
                  <div className="contact-info">
                    <h4>Website</h4>
                    <p>https://www.com.np</p>
                  </div>
                </div>
                <div className="content-section">
                  <div className="cv-title">
                    <h3>Hard Skills</h3>
                  </div>
                  <ul className="bold-content-list">
                    <li>Node JS</li>
                    <li>React Js</li>
                    <li>React Native</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>javascript</li>
                  </ul>
                </div>
                <div className="content-section">
                  <div className="cv-title">
                    <h3>Interest</h3>
                  </div>
                  <ul className="light-content-list">
                    <li>Travelling</li>
                    <li>Reading Articles</li>
                    <li>Listing Musics</li>
                  </ul>
                </div>
                <div className="content-section">
                  <div className="cv-title">
                    <h3>Language</h3>
                  </div>
                  <ul className="light-content-list">
                    <li>Nepali</li>
                    <li>English</li>
                    <li>HIndi</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="right-content">
                <div className="content-section">
                  <div className="cv-title">
                    <h3>Professional Summary</h3>
                  </div>
                  <div className="content-info">
                    <p>
                      Obtain a challenging leadeship position applying creative
                      problem solving and lean management skills with a growing
                      company to achieve optimun utilization of its resources
                      and maximum profits.
                    </p>
                  </div>
                </div>
                <div className="content-section">
                  <div className="cv-title">
                    <h3>Educaation</h3>
                  </div>
                  <div className="content-info">
                    <div className="course-content">
                      <div className="d-flex align-itmes-center justify-content-between">
                        <h6 className="course-name">BE Computer</h6>
                        <h6 className="passed-year">
                          <span>2016</span> - <span>2020</span>
                        </h6>
                      </div>
                      <h6 className="institute-name">
                        Dhangadhi Enginerring College
                      </h6>
                      <p>With Distinction Division</p>
                    </div>
                    <div className="course-content">
                      <div className="d-flex align-itmes-center justify-content-between">
                        <h6 className="course-name">HSEB (+2)</h6>
                        <h6 className="passed-year">
                          <span>2014</span> - <span>2016</span>
                        </h6>
                      </div>
                      <h6 className="institute-name">
                        National Academy of Science & Techology
                      </h6>
                      <p>With Distinction Division</p>
                    </div>
                    <div className="course-content">
                      <div className="d-flex align-itmes-center justify-content-between">
                        <h6 className="course-name">BE Computer</h6>
                        <h6 className="passed-year">
                          <span>2014 </span>
                        </h6>
                      </div>
                      <h6 className="institute-name">
                        S.L.C. (School Leaving Certificate)
                      </h6>
                      <p>With Distinction Division</p>
                    </div>
                  </div>
                </div>
                <div className="content-section">
                  <div className="cv-title">
                    <h3>Training Experience</h3>
                  </div>
                  <div className="d-flex align-itmes-center">
                    <h6 className="course-name mb-0">Web Designing</h6>
                    <h6 className="institute-name mb-0">
                      {" / "} Broadway Infosys Technology
                    </h6>
                  </div>
                  <p className="mb-1">
                    From <b>12 July, 2022</b> to <b>12 July, 2022</b>
                  </p>
                  <p>
                    It was good from the point of view of content delivery and
                    applicability in the field of data analysis and research for
                    carrying out quantitative analysis using the established
                    analysis models and procedures e.g., for carrying out both
                    parametric and non-parametric testing and choosing the right
                    method for such analysis, for instance, when to use
                    chi-square,
                  </p>
                </div>
                <div className="content-section">
                  <div className="cv-title">
                    <h3>Certification</h3>
                  </div>
                  <p className="">
                    <b>Web Designing</b> from Broadway Infosys Technology
                  </p>
                </div>
                <div className="content-section">
                  <div className="cv-title">
                    <h3>References</h3>
                  </div>
                  <h6 className="referent-name">Sajan Kafley</h6>
                  <h6 className="institute-name">
                    Broadway Infosys Technology
                  </h6>
                  <p className="">+9867656545</p>
                  <div className="referent-brand">
                    <svg
                      enable-background="new 0 0 210 71"
                      viewBox="0 0 210 71"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m0 0h210v71h-210z" fill="none" />
                      <path
                        d="m37.16221 55.86993c5.86357 0 10.7584-1.1727 14.12358-3.46715-4.18099 3.31419-9.53468 5.30271-15.2963 5.30271-3.31421 0-6.42444-.66283-9.27976-1.83555 0-.00001 10.45248-.00001 10.45248-.00001z"
                        fill="#0054c0"
                      />
                      <path
                        d="m53.83517 50.10833c1.68259-1.98851 2.60037-4.5379 2.54939-7.59716 0-7.24024-5.20074-12.0841-12.13507-12.69592 4.28297-.50988 8.36197-3.82408 8.36197-10.09557 0-3.05926-.96877-5.4047-2.70235-7.24024 6.52642 4.43593 10.80938 11.93112 10.80938 20.44604.05103 6.67941-2.60033 12.69595-6.88332 17.18285z"
                        fill="#0054c0"
                      />
                      <path
                        d="m23.90543 54.49328c-7.54617-4.28297-12.59396-12.33902-12.59396-21.5678 0-7.95407 3.7221-14.99038 9.5347-19.52828v38.9546s10.04457-1.83555 10.29951-7.90309c0-.40791 0-1.5806 0-1.5806v-31.8673h1.93753c5.25174 0 8.71888 2.75333 8.71888 9.58568 0 6.88334-4.07901 9.33074-8.36197 9.33074v.66284c6.06753 0 11.47223 3.11024 11.21729 11.06431-.20396 8.36199-12.44099 11.6252-20.75198 12.8489z"
                        fill="#0054c0"
                      />
                      <path
                        d="m51.6937 6.66684h6.37346v6.37347h-6.37346z"
                        fill="#ff3f00"
                      />
                      <path
                        d="m58.01618 3.09769h3.05925v3.05926h-3.05925z"
                        fill="#ff3f00"
                      />
                      <path
                        d="m59.23987 6.62578h1.83556v1.87661h-1.83556z"
                        fill="#ff3f00"
                      />
                      <path
                        d="m55.67073 3.09769h1.83555v1.83555h-1.83555z"
                        fill="#ff3f00"
                      />
                      <g fill="#0047b0">
                        <path d="m72.08875 34.81202v-15.55123h8.15803c2.9573 0 4.48691 1.88653 4.48691 3.97703 0 1.93753-1.22371 3.2632-2.70232 3.56914 1.6316.25494 3.00826 1.88653 3.00826 3.82406 0 2.34543-1.5806 4.181-4.5379 4.181zm9.27977-11.01334c0-.96877-.71382-1.68259-1.83555-1.68259h-4.13v3.36518h4.13c1.12172.00002 1.83555-.66282 1.83555-1.68259zm.30592 6.37346c0-.96877-.71384-1.83555-1.98852-1.83555h-4.28296v3.62012h4.28296c1.22372 0 1.98852-.66285 1.98852-1.78457z" />
                        <path d="m96.3079 34.81202-3.05927-5.50667h-2.44742v5.50667h-3.3142v-15.55123h7.29122c3.26322 0 5.20075 2.14147 5.20075 4.99679 0 2.75333-1.73359 4.23197-3.41618 4.63988l3.51814 5.91456c.05101-.00002-3.77306-.00002-3.77308-.00002.00001.00001.00004.00001.00004.00002zm.35692-10.50345c0-1.32569-1.01977-2.0905-2.34544-2.0905h-3.46715v4.18099h3.46715c1.32569 0 2.34544-.81579 2.34544-2.09049z" />
                        <path d="m101.76359 27.0619c0-4.69087 3.41618-8.05605 8.10703-8.05605 4.69087 0 8.15802 3.36518 8.15802 8.05605s-3.41618 8.05605-8.15802 8.05605c-4.63988.00001-8.10703-3.36518-8.10703-8.05605zm12.84888 0c0-2.90629-1.88653-5.09877-4.74185-5.09877-2.8553 0-4.69086 2.19248-4.69086 5.09877s1.83555 5.09877 4.69086 5.09877c2.90631-.00001 4.74185-2.19247 4.74185-5.09877z" />
                        <path d="m130.31667 34.81202-.96875-2.65135h-6.67937l-.96875 2.65135h-3.77308l6.01655-15.55123h4.13001l6.01654 15.55123zm-4.28296-12.23704-2.44743 6.67939h4.84383z" />
                        <path d="m135.51741 34.81202v-15.55123h6.11855c4.89481 0 8.25998 3.11023 8.25998 7.80111s-3.36517 7.75012-8.25998 7.75012c0 .00002-6.11853.00002-6.11855 0zm11.01334-7.75012c0-2.75333-1.68257-4.89481-4.89481-4.89481h-2.80434v9.73864h2.80434c3.11025 0 4.89481-2.19247 4.89481-4.84383z" />
                        <path d="m163.71359 34.81202-2.75334-10.70741-2.7023 10.70741h-3.51816l-4.43594-15.55123h3.72209l2.75331 11.21729 2.95729-11.21729h2.60036l2.95729 11.21729 2.70233-11.21729h3.72211l-4.43593 15.55123z" />
                        <path d="m182.93594 34.81202-.96875-2.65135h-6.67941l-.96875 2.65135h-3.77307l6.01654-15.55123h4.12999l6.01654 15.55124c0 .00001-3.77309.00001-3.77309-.00001zm-4.28297-12.23704-2.44739 6.67939h4.84383z" />
                        <path d="m190.94101 34.81202v-6.37346l-6.01656-9.17778h3.7731l3.87508 6.27147 3.82407-6.27148h3.7731l-5.96559 9.17777v6.37346z" />
                      </g>
                      <path
                        d="m72.59863 52.50474v-11.98209h2.54939v11.98209z"
                        fill="#00c3ff"
                      />
                      <path
                        d="m85.03963 52.50474-5.71062-7.80111v7.80111h-2.5494v-11.98209h2.60036l5.55766 7.49518v-7.49518h2.54939v11.98209z"
                        fill="#00c3ff"
                      />
                      <path
                        d="m89.16963 52.50474v-11.98209h8.46395v2.24345h-5.91457v2.54938h5.81258v2.24347h-5.81258v4.9458z"
                        fill="#00c3ff"
                      />
                      <path
                        d="m98.09248 46.48821c0-3.62012 2.65134-6.1695 6.22049-6.1695 3.62012 0 6.27149 2.60038 6.27149 6.1695 0 3.62012-2.65137 6.1695-6.27149 6.1695-3.56913.05099-6.22049-2.54939-6.22049-6.1695zm9.8916 0c0-2.24345-1.42765-3.92605-3.62012-3.92605-2.19248 0-3.62013 1.68259-3.62013 3.92605 0 2.24347 1.42767 3.92605 3.62013 3.92605s3.62012-1.68261 3.62012-3.92605z"
                        fill="#00c3ff"
                      />
                      <path
                        d="m110.83941 50.77118 1.37663-1.93753c.86679.86679 2.14149 1.63161 3.8241 1.63161 1.37666 0 2.0905-.66285 2.0905-1.32568 0-2.14147-6.88333-.66285-6.88333-5.14975 0-1.98851 1.73358-3.62012 4.5379-3.62012 1.88654 0 3.46715.56087 4.63988 1.68259l-1.42767 1.88653c-.96877-.91777-2.24347-1.32568-3.46716-1.32568-1.07072 0-1.68257.50988-1.68257 1.2237 0 1.88653 6.88332.61185 6.88332 5.09878 0 2.19247-1.58063 3.82407-4.79283 3.82407-2.29447-.05099-3.97708-.8158-5.09877-1.98852z"
                        fill="#00c3ff"
                      />
                      <path
                        d="m124.86101 52.50474v-4.89481l-4.58888-7.08728h2.9063l2.9573 4.79285 2.95728-4.79285h2.90631l-4.58889 7.08728v4.89481z"
                        fill="#00c3ff"
                      />
                      <path
                        d="m131.18346 50.77118 1.37669-1.93753c.86679.86679 2.14148 1.63161 3.82407 1.63161 1.37666 0 2.0905-.66285 2.0905-1.32568 0-2.14147-6.88335-.66285-6.88335-5.14975 0-1.98851 1.73358-3.62012 4.53792-3.62012 1.88654 0 3.46715.56087 4.63986 1.68259l-1.42764 1.88653c-.96877-.91777-2.24345-1.32568-3.46715-1.32568-1.07074 0-1.68257.50988-1.68257 1.2237 0 1.88653 6.88332.61185 6.88332 5.09878 0 2.19247-1.58061 3.82407-4.79283 3.82407-2.29449-.05099-3.97707-.8158-5.09882-1.98852z"
                        fill="#00c3ff"
                      />
                      <g enable-background="new" fill="#0054c0">
                        <path d="m73.34866 60.17509v6.37466h-.82286v-6.37466z" />
                        <path d="m74.85159 63.21095c0-.47259-.00952-.86038-.03778-1.23893h.73774l.04733.75652h.01875c.22707-.43511.75681-.86038 1.51331-.86038.63391 0 1.61748.37797 1.61748 1.94814v2.73348h-.83241v-2.63885c0-.73748-.27439-1.35261-1.05917-1.35261-.54877 0-.97433.38778-1.11629.85115-.0378.10445-.05656.24582-.05656.38778v2.75253h-.83239c-.00001.00002-.00001-3.33882-.00001-3.33883z" />
                        <path d="m79.98531 65.69862c.24583.1604.68092.33122 1.09698.33122.60534 0 .88924-.30296.88924-.6815 0-.39701-.23661-.61456-.85146-.84133-.82287-.29314-1.21063-.74728-1.21063-1.29605 0-.73748.59609-1.3428 1.57965-1.3428.46339 0 .87019.13213 1.12555.28333l-.20803.60531c-.17976-.11311-.51099-.26486-.93656-.26486-.49165 0-.76604.28391-.76604.62437 0 .37853.27439.54877.87019.77555.7946.30296 1.20113.69997 1.20113 1.38088 0 .80383-.62408 1.37163-1.71182 1.37163-.50144 0-.96481-.1229-1.28652-.31218z" />
                        <path d="m83.8426 63.46657c0-.58685-.01904-1.05945-.03778-1.49455h.74727l.0378.78477h.01875c.34046-.55801.8797-.88865 1.62699-.88865 1.1065 0 1.9389.93597 1.9389 2.32666 0 1.64574-1.00261 2.45882-2.08084 2.45882-.60533 0-1.13504-.26487-1.40916-.71841h-.01904v2.48708h-.82288v-4.9557s0-.00002-.00001-.00002zm.82287 1.21989c0 .12292.01904.2366.03778.34045.15147.57706.65262.97407 1.24844.97407.87972 0 1.3904-.71843 1.3904-1.76866 0-.9175-.48243-1.70228-1.36185-1.70228-.56753 0-1.09726.40683-1.25797 1.03119-.02855.10386-.05685.2268-.05685.34045z" />
                        <path d="m90.14916 60.68577c.00923.28392-.19879.51069-.52973.51069-.29314 0-.50146-.2268-.50146-.51069 0-.29313.21754-.5205.52022-.5205.31217.00002.51096.22736.51097.5205zm-.92702 5.86397v-4.57772h.83238v4.57772z" />
                        <path d="m91.43425 63.40023c0-.53895-.00953-1.00232-.0378-1.42819h.72824l.02829.89848h.03808c.20803-.61456.70919-1.00235 1.26718-1.00235.09464 0 .16071.00922.23662.02827v.78477c-.08513-.01904-.17024-.02829-.28391-.02829-.58629 0-1.00262.44434-1.116 1.0687-.01875.11369-.03778.24582-.03778.38778v2.44033h-.82287v-3.14953z" />
                        <path d="m95.49062 60.68577c.00923.28392-.19879.51069-.52974.51069-.29313 0-.50145-.2268-.50145-.51069 0-.29313.21754-.5205.52021-.5205.31218.00002.51096.22736.51098.5205zm-.92701 5.86397v-4.57772h.83238v4.57772z" />
                        <path d="m96.77573 63.21095c0-.47259-.00952-.86038-.0378-1.23893h.73775l.04732.75652h.01876c.22707-.43511.7568-.86038 1.51331-.86038.63389 0 1.61747.37797 1.61747 1.94814v2.73348h-.8324v-2.63885c0-.73748-.27409-1.35261-1.05917-1.35261-.54877 0-.97435.38778-1.11633.85115-.03777.10445-.05654.24582-.05654.38778v2.75253h-.8324c0 .00002 0-3.33882.00003-3.33883z" />
                        <path d="m105.96695 61.97203c-.01904.33124-.0378.69997-.0378 1.25797v2.65789c0 1.04966-.20831 1.69308-.65264 2.09009-.44463.41605-1.08774.54877-1.6648.54877-.54848 0-1.15381-.13274-1.52283-.37855l.20831-.6336c.30267.18927.77556.3595 1.34308.3595.85114 0 1.47525-.4449 1.47525-1.59843v-.5107h-.01876c-.25534.42529-.74727.76574-1.45649.76574-1.13505 0-1.9484-.96482-1.9484-2.23203 0-1.55112 1.01186-2.43054 2.06179-2.43054.7946 0 1.2297.41605 1.4282.79403h.01904l.03778-.69016h.72826zm-.86067 1.80676c0-.14194-.00951-.26486-.04732-.37853-.15146-.48242-.55801-.87943-1.16333-.87943-.79459 0-1.36212.6711-1.36212 1.73058 0 .89847.45413 1.64574 1.3526 1.64574.51068 0 .97406-.32143 1.15381-.85115.04732-.14194.06636-.30296.06636-.44432 0-.00002 0-.82291 0-.82289z" />
                        <path d="m114.1925 66.26585c-.36873.13272-1.09698.35026-1.95792.35026-.96425 0-1.75885-.24582-2.38321-.84191-.54877-.52972-.88924-1.38087-.88924-2.37398.00982-1.90137 1.31509-3.29148 3.45249-3.29148.73747 0 1.31453.16099 1.5892.29313l-.19908.67169c-.34045-.15119-.76573-.27468-1.40916-.27468-1.5511 0-2.56326.96483-2.56326 2.56324 0 1.61747.97408 2.57306 2.4594 2.57306.53896 0 .90771-.07617 1.09698-.17023v-1.90137h-1.29548v-.66185h2.09931c.00001-.00001.00001 3.06413 0 3.06413h-.00003z" />
                        <path d="m115.41988 63.40023c0-.53895-.0098-1.00232-.03809-1.42819h.72825l.02827.89848h.03808c.20831-.61456.70919-1.00235 1.2672-1.00235.09464 0 .161.00922.23658.02827v.78477c-.08481-.01904-.17023-.02829-.28389-.02829-.58629 0-1.00235.44434-1.116 1.0687-.01846.11369-.03749.24582-.03749.38778v2.44033h-.82288v-3.14953z" />
                        <path d="m122.55972 64.22311c0 1.69305-1.17314 2.43053-2.27937 2.43053-1.23894 0-2.19451-.9077-2.19451-2.35493 0-1.53208 1.00233-2.43053 2.27011-2.43053 1.31453-.00003 2.20377.955 2.20377 2.35493zm-3.63195.04731c0 1.00234.57705 1.75943 1.3901 1.75943.79459 0 1.39069-.74727 1.39069-1.77847 0-.77555-.38777-1.75942-1.37164-1.75942-.98388-.00002-1.40916.90826-1.40915 1.77846z" />
                        <path d="m123.87192 61.97203.60533 2.32667c.13274.51068.25564.98387.34045 1.45647h.02885c.10388-.46338.25506-.95502.40623-1.44725l.74727-2.33588h.69995l.70978 2.28859c.17023.54877.30239 1.03119.40623 1.49456h.02828c.07616-.46337.19909-.94579.35027-1.48476l.65263-2.2984h.82288l-1.47551 4.57772h-.75653l-.69997-2.18471c-.161-.5107-.29313-.96484-.40681-1.5038h-.01904c-.11311.54818-.25504 1.02139-.41605 1.51303l-.73746 2.17547h-.75709l-1.38088-4.57774z" />
                        <path d="m131.50224 60.65751v1.31453h1.19159v.6336h-1.19159v2.46862c0 .56725.16042.88924.62379.88924.21754 0 .37854-.02829.48242-.05714l.03807.62435c-.161.06636-.41605.11369-.73804.11369-.38779 0-.69939-.12292-.89847-.35027-.23601-.24583-.32141-.65263-.32141-1.19161v-2.49689h-.7092v-.63361h.7092v-1.09698z" />
                        <path d="m133.62866 59.83464h.8327v2.85639h.01848c.13271-.23659.34044-.4449.59607-.58685.24583-.14137.53899-.236.85115-.236.61514 0 1.59842.37797 1.59842 1.95792v2.72369h-.83209v-2.62962c0-.73746-.27469-1.36184-1.05946-1.36184-.53897 0-.96484.37853-1.11604.83268-.0473.11311-.05653.23601-.05653.39701v2.76177h-.83269c-.00001-.00001-.00001-6.71515-.00001-6.71515z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvPreview;

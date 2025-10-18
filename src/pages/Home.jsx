import React from "react";
import "./Home.css";
import image1 from "../assets/grid1.png"
import image2 from "../assets/grid2.png"
import image3 from "../assets/grid3.png"
import image4 from "../assets/grid7.png"
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
    {/* section1 */}
      <div className="megaparentFranfdfather">
        <div className="sesction1MegaParent d-flex justify-content-center align-items-center">
          <div className="section1SecondParent">
            <div className="section1headingParent">
              <h2 className="text-center">Designed to get hired.</h2>
              <h3 className="text-center">
                Your skills, your story, your next job — all in one.
              </h3>
            </div>
            <div className="text-center">
              <button className="makeResumeBtn">MAKE YOUR RESUME</button>
            </div>
          </div>
        </div>
{/* section2 */}
        <div className="section2ParentMega">
          <div className="section2BackgroundWhite">
            <h2 className="section2parentHeading text-center mt-4">Tools</h2>
            <div className="row container ms-5">
              <div className="col-12 col-md-6">
                <div className="eachSectionSection2">
                  <h3 className="sectioneachHeading">Resume</h3>
                  <p className="section2EachPara">
                    Create unlimited new resumes and easily edit them
                    afterwards.
                  </p>
                </div>
                <div className="eachSectionSection2">
                  <h3 className="sectioneachHeading">Cover Letters</h3>
                  <p className="section2EachPara">
                    Easily write professional cover letters.
                  </p>
                </div>
                <div className="eachSectionSection2">
                  <h3 className="sectioneachHeading">Jobs</h3>
                  <p className="section2EachPara">
                    Automatically receive new and relevant job postings.
                  </p>
                </div>
                <div className="eachSectionSection2">
                  <h3 className="sectioneachHeading">Applications</h3>
                  <p className="section2EachPara">
                    Effortlessly manage and track your job applications in an
                    organized manner.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 text-center">
                <img
                  className="section2image"
                  src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="transparentDiv"></div>
        </div>
{/* section3 */}
        <div className="section3megaparent mb-5">
          <h2 className="text-center mt-4">Testimony</h2>

          <div className="row ms-5">
            <div className="col-6 mt-3">
              <h3>Trusted by professionals worldwide.</h3>
              <p>
                At LiveCareer, we don't just help you create résumés — we help
                you land the job. Whether you're a seasoned professional or just
                starting out, our tools are designed to get results.
                 </p>
                <p>In fact,
                users who used LiveCareer reported getting hired an average of
                48 days faster.</p> 
                <p>Join thousands of job-seekers who’ve
                fast-tracked their careers with a résumé that truly stands out.</p> 
             
            </div>
            <div className="col-6">
              <div className="row mt-2">
                <div className="col-3">
                  <img className="imaheSection3" src={image1} alt="" />
                </div>
                <div className="col-3">
                  <img className="imaheSection3" src={image2} alt="" />
                </div>
                <div className="col-3">
                  <img className="imaheSection3" src={image3} alt="" />
                </div>
                <div className="col-3">
                  <img className="imaheSection3" src={image4} alt="" />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-3">
                  <img className="imaheSection3" src={image1} alt="" />
                </div>
                <div className="col-3">
                  <img className="imaheSection3" src={image2} alt="" />
                </div>
                <div className="col-3">
                  <img className="imaheSection3" src={image3} alt="" />
                </div>
                <div className="col-3">
                  <img className="imaheSection3" src={image4} alt="" />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-3 h-50">
                  <img className="imaheSection3" src={image1} alt="" />
                </div>
                <div className="col-3">
                  <img className="imaheSection3" src={image2} alt="" />
                </div>
                <div className="col-3">
                  <img className="imaheSection3" src={image3} alt="" />
                </div>
                <div className="col-3">
                  <img className="imaheSection3" src={image4} alt="" />
                </div>
              </div>
              
            </div>
          </div>
        </div>





      </div>
      <Footer/>
    </>
  );
};

export default Home;

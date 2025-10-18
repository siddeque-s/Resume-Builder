import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown, faFileLines } from '@fortawesome/free-solid-svg-icons';
import "./ResumeGenerator.css"
import Footer from '../components/Footer';

const ResumeGenerator = () => {
  return (
    <>
      <div>
        <div className='sectin1ParentGener'>
          <h2 className='text-center'>Create a job-winning Resume in minutes</h2>
          <div className="row mt-5">
            <div className="col-md-1 "></div>
            <div className="mt-4 col-md-4 col-12 text-center erachSectionSection2Gene">
              <div className='mb-4'>
                <FontAwesomeIcon className='icons1resume'  icon={faFileLines} />
              </div>
              <h3>Add your information</h3>
              <p>Add pre-written examples to each section</p>

              <h5>Step 1</h5>
            </div>
            <div className="col-md-2"></div>
            <div className=" mt-4 col-md-4 col-12 text-center erachSectionSection2Gene">
                <div className='mb-4'>
                  <FontAwesomeIcon className='icons1resume11' icon={faFileArrowDown} />
                     
                </div>
             
              <h3>Download your Resume</h3>
              <p>Download and start applying</p>

              <h5>Step 2</h5>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className='parentbtnresume text-center mt-5'>
            <button className='btnGenerSection1'>LET'S START</button>
          </div>
        </div>
        <Footer/>
      </div>
      
    </>
  );
}

export default ResumeGenerator;

import React from 'react'
import './css/About.css'


const About = () => {

  return (
    <>
      <div className="about-container container">
        <div className="about">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  What is EasyNotes ?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">EasyNotes is the web based application that can be used to saved or keep your notes privately. It can manages the saved notes of the user and also it is very efficient to used and secure.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  What kind of Tasks it can perform ?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  There are several types of tasks that are performed by the EasyNotes that are described as follow
                  <li>1. It can creates a new notes for the user</li>
                  <li>2. Notes can be Updateable</li>
                  <li>3. Notes can be Removable</li>
                  <li>4. Manages the saved notes of the specific user</li>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Steps to use ?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <li>1. Create an account of EasyNotes</li>
                  <li>2. Sign in to your account</li>
                  <li>3. Enjoy your EasyNotes application</li>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  Technologies used ?
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Technologies used for implementing the EasyNotes application are as follow
                  <li>1. HTML5, CSS3, Js</li>
                  <li>2. Bootstrap Framework</li>
                  <li>3. React Js Framework </li>
                  <li>4. Node Js, Express Js </li>
                  <li>5. Packages for Backend : bcrypt js, cors, express-validator, jsonwebtoken, mongoose, nodemon</li>
                  <li>6. Database used : MongoDB</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
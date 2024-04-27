import React from 'react'

import PropTypes from 'prop-types'

import './our-approach.css'

const OurApproach = (props) => {
  return (
    <div className="our-approach-container">
      <div className="our-approach-steps">
        <h1 className="our-approach-text">{props.heading}</h1>
        <span className="our-approach-text01">
          <span>We Build Tech for Future</span>
          <br></br>
        </span>
        <div className="our-approach-container01">
          <div className="our-approach-step">
            <div className="our-approach-container02">
              <div className="our-approach-line"></div>
              <div className="our-approach-line01"></div>
              <div className="our-approach-container03">
                <svg viewBox="0 0 1024 1024" className="our-approach-icon">
                  <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                </svg>
              </div>
              <div className="our-approach-line02"></div>
            </div>
            <div className="our-approach-container04">
              <h1 className="our-approach-text04">
                <span>Ideate</span>
              </h1>
              <div className="our-approach-container05">
                <li className="list-item"></li>
                <span className="our-approach-text06">{props.text}</span>
              </div>
              <div className="our-approach-container06">
                <li className="list-item"></li>
                <span className="our-approach-text07">{props.text1}</span>
              </div>
              <div className="our-approach-container07">
                <li className="list-item"></li>
                <span className="our-approach-text08">{props.text2}</span>
              </div>
              <div className="our-approach-container08">
                <li className="list-item"></li>
                <span className="our-approach-text09">{props.text3}</span>
              </div>
              <div className="our-approach-container09">
                <li className="list-item"></li>
                <span className="our-approach-text10">{props.text4}</span>
              </div>
              <ul className="list">
                <li className="list-item"></li>
              </ul>
            </div>
          </div>
          <div className="our-approach-step1">
            <div className="our-approach-container10">
              <div className="our-approach-line03"></div>
              <div className="our-approach-container11">
                <svg viewBox="0 0 1024 1024" className="our-approach-icon2">
                  <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                </svg>
              </div>
              <div className="our-approach-line04"></div>
            </div>
            <div className="our-approach-container12">
              <h1 className="our-approach-text11">
                <span>Design</span>
              </h1>
              <div className="our-approach-container13">
                <li className="list-item"></li>
                <span className="our-approach-text13">
                  <span>
                    Develop detailed user personas to understand the target
                    audience.
                  </span>
                  <span></span>
                </span>
              </div>
              <div className="our-approach-container14">
                <li className="list-item"></li>
                <span className="our-approach-text16">
                  <span>
                    Create wireframes and mockups to illustrate the user
                    interface.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="our-approach-container15">
                <li className="list-item"></li>
                <span className="our-approach-text19">{props.text5}</span>
              </div>
              <div className="our-approach-container16">
                <li className="list-item"></li>
                <span className="our-approach-text20">{props.text6}</span>
              </div>
              <div className="our-approach-container17">
                <li className="list-item"></li>
                <span className="our-approach-text21">{props.text7}</span>
              </div>
            </div>
          </div>
          <div className="our-approach-step2">
            <div className="our-approach-container18">
              <div className="our-approach-line05"></div>
              <div className="our-approach-container19">
                <svg viewBox="0 0 1024 1024" className="our-approach-icon4">
                  <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                  <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                </svg>
              </div>
              <div className="our-approach-line06"></div>
            </div>
            <div className="our-approach-container20">
              <h1 className="our-approach-text22">
                <span>Develop</span>
              </h1>
              <div className="our-approach-container21">
                <li className="list-item"></li>
                <span className="our-approach-text24">
                  <span>
                    Write and review code according to coding standards.
                  </span>
                  <span></span>
                </span>
              </div>
              <div className="our-approach-container22">
                <li className="list-item"></li>
                <span className="our-approach-text27">{props.text8}</span>
              </div>
              <div className="our-approach-container23">
                <li className="list-item"></li>
                <span className="our-approach-text28">{props.text9}</span>
              </div>
              <div className="our-approach-container24">
                <li className="list-item"></li>
                <span className="our-approach-text29">{props.text10}</span>
              </div>
              <div className="our-approach-container25">
                <li className="list-item"></li>
                <span className="our-approach-text30">{props.text11}</span>
              </div>
            </div>
          </div>
          <div className="our-approach-container26">
            <div className="our-approach-step3">
              <div className="our-approach-container27">
                <div className="our-approach-line07"></div>
                <div className="our-approach-container28">
                  <div className="our-approach-container29">
                    <div className="our-approach-line08"></div>
                  </div>
                  <div className="our-approach-container30">
                    <svg viewBox="0 0 1024 1024" className="our-approach-icon7">
                      <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                    </svg>
                  </div>
                </div>
                <div className="our-approach-line09"></div>
              </div>
              <div className="our-approach-container31">
                <h1 className="our-approach-text31">
                  <span>Deploy</span>
                  <br></br>
                </h1>
                <div className="our-approach-container32">
                  <li className="list-item"></li>
                  <span className="our-approach-text34">{props.text12}</span>
                </div>
                <div className="our-approach-container33">
                  <li className="list-item"></li>
                  <span className="our-approach-text35">{props.text13}</span>
                </div>
                <div className="our-approach-container34">
                  <li className="list-item"></li>
                  <span className="our-approach-text36">{props.text14}</span>
                </div>
                <div className="our-approach-container35">
                  <li className="list-item"></li>
                  <span className="our-approach-text37">{props.text15}</span>
                </div>
                <div className="our-approach-container36">
                  <li className="list-item"></li>
                  <span className="our-approach-text38">{props.text16}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

OurApproach.defaultProps = {
  text7: 'Establish a design system for consistency across the product.',
  text16: 'Provide training and support for end-users and stakeholders.',
  text10:
    'Regularly conduct code reviews for collaboration and quality assurance.',
  heading: 'Our 4 Stage Process',
  text6: 'Incorporate feedback from stakeholders and potential users.',
  text1: 'Brainstorming sessions to generate creative ideas.',
  text4:
    'Create rough prototypes or concepts to visualize potential solutions.',
  text15: 'Monitor system performance during and after deployment.',
  text2: 'Define the problem statement and set clear objectives.',
  text14: 'Implement version control and release management.',
  text3: 'Prioritize and select the most viable ideas.',
  text5: 'Define the information architecture and navigation flow.',
  text13: 'Create deployment plans and documentation.',
  text: 'Conduct market research to identify trends and user needs.',
  text9: 'Integrate different components of the system.',
  text12: 'Prepare for deployment by conducting thorough testing.',
  text11: 'Continuously test and debug to identify and fix issues.',
  text8: 'Implement unit testing to ensure code quality.',
}

OurApproach.propTypes = {
  text7: PropTypes.string,
  text16: PropTypes.string,
  text10: PropTypes.string,
  heading: PropTypes.string,
  text6: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text15: PropTypes.string,
  text2: PropTypes.string,
  text14: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text13: PropTypes.string,
  text: PropTypes.string,
  text9: PropTypes.string,
  text12: PropTypes.string,
  text11: PropTypes.string,
  text8: PropTypes.string,
}

export default OurApproach

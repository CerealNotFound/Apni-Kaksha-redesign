import React from "react";
import BoyPng from "../../assets/Saly-13.png";
import "./CoursePage.css";
import IntroLecture from "../lectures/IntroLecture/IntroLecture.js";
import HtmlLecture from "../lectures/HtmlLecture/HtmlLecture.js";
import CssLecture from "../lectures/CssLecture/CssLecture.js";
import ProjectLecture from "../lectures/ProjectLecture/ProjectLecture.js";
import BootstrapLecture from "../lectures/BootstrapLecture/BootstrapLecture.js";
import JavascriptLecture from "../lectures/JavascriptLecture/JavascriptLecture.js"

const CoursePage = () => {
  return(
      <section id="course-page-wrapper">
        <div id="course-flex-wrapper">
          <div id="course-ul-wrapper">
            <ul>
              <li><h1>Contents</h1></li>
              <li>6 sections • 37 lectures • 10hr 5min 45s total length</li>
            </ul>
            <ul id="lecture-ul">
              <IntroLecture />
              <HtmlLecture />
              <CssLecture />
              <ProjectLecture />
              <BootstrapLecture />
              <JavascriptLecture />
            </ul>
          </div>
          <img alt="boy-coding" className="images-png" src={BoyPng}/>
        </div>
      </section>
  )
}

export default CoursePage;
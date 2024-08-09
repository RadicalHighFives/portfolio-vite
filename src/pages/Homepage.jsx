import { useEffect } from "react";
import PageNav from "../components/PageNav";
import "../sass/main.scss";

export default function Homepage() {
  useEffect(function () {
    const links = document.querySelectorAll(".navigation__link");
    const checkbox = document.getElementById("navi-toggle");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        checkbox.checked = false;
      });
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {
          checkbox.checked = false;
        });
      });
    };
  }, []);

  return (
    <>
      <PageNav />

      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main"> Israel Soto </span>
            <span className="heading-primary--sub"> Software Engineer </span>
          </h1>
          <a href="#section-projects" className="btn btn--white btn--animated">
            Portfolio
          </a>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">ABOUT ME</h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Welcome.
              </h3>
              <p className="paragraph">
                Hi, Im a Software Engineer. I enjoy building software and
                embedded applications. I love problem solving, I am always
                continuously learning, which allows me to stay at the forefront
                of technology trends, ensuring i can deliver innovative
                solutions and drive efficiency.
              </p>
              <p className="paragraph">
                I’ve had the privilege of working on a wide range of projects
                from building web applications to architecting backend-end
                systems.
              </p>
              <p className="paragraph">
                With a strong background in programming, I’m committed to
                delivering high quality code, and contributing to the success of
                any team I join.
              </p>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  srcSet="src/img/workbench-small.png  300w, src/img/workbench-large.png 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 1"
                  className="composition__photo composition__photo--p1"
                  src="/src/img/workbench-large.png"
                />

                <img
                  srcSet="src/img/monitor-small.png 300w, src/img/monitor-large.png 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 2"
                  className="composition__photo composition__photo--p2"
                  src="/src/img/monitor-large.png"
                />
                <img
                  srcSet="src/img/profile-sm.png 300w, src/img/profile-large.png 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 3"
                  className="composition__photo composition__photo--p3"
                  src="src/img/profile-large.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-skills" id="section-skills">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-third">Technical Skills</h2>
          </div>

          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-react-color"></span>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  React
                </h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-logo_sass_icon"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Sass</h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-badge_css_css3_achievement_award_icon">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                </span>
                <h3 className="heading-tertiary u-margin-bottom-small">CSS</h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-badge_html_html5_achievement_award_icon">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                </span>
                <h3 className="heading-tertiary u-margin-bottom-small">Html</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-logo_python_icon">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Python
                </h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-C">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                </span>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  .NET C#
                </h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-C-CPlusPlus">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  C/C++
                </h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-java_logo_logos_icon">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                  <span className="path5"></span>
                  <span className="path6"></span>
                  <span className="path7"></span>
                  <span className="path8"></span>
                </span>
                <h3 className="heading-tertiary u-margin-bottom-small">Java</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-android_robot_technology_mobile_smartphone_icon">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                </span>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Android
                </h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-non_service_aws_specific_copy_icon">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                  <span className="path5"></span>
                  <span className="path6"></span>
                  <span className="path7"></span>
                  <span className="path8"></span>
                  <span className="path9"></span>
                  <span className="path10"></span>
                </span>
                <h3 className="heading-tertiary u-margin-bottom-small">AWS</h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-kubernetes_icon"></span>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Kubernetes
                </h3>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <span className="feature-box__icon icon-database_dbs_files_mdb_mysql_icon">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                  <span className="path5"></span>
                  <span className="path6"></span>
                  <span className="path7"></span>
                  <span className="path8"></span>
                  <span className="path9"></span>
                  <span className="path10"></span>
                  <span className="path11"></span>
                  <span className="path12"></span>
                  <span className="path13"></span>
                  <span className="path14"></span>
                  <span className="path15"></span>
                </span>
                <h3 className="heading-tertiary u-margin-bottom-small">SQL</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="section-projects" id="section-projects">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Portfolio</h2>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      Fitness Tracker
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Android Mobile App</li>
                      <li>Kotlin</li>
                      <li>Database, MVVM</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <a href="#popup-fitness" className="btn btn--white">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      CookGpt
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Mobile App and Web App</li>
                      <li>Swift and Django</li>
                      <li>Computer Vision and Palm API</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <a href="#popup-cook" className="btn btn--white">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      Banking
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>REST APIs</li>
                      <li>JQuery</li>
                      <li>.NET C#</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <a href="#popup-fin" className="btn btn--white">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--4">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      N-Tier Architecture
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Spring APIs</li>
                      <li>Kubernetes</li>
                      <li>Minikube</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <a href="#popup-kube" className="btn btn--white">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--5">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--5">
                      ShelterSpace
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Django and Python</li>
                      <li>CSS, HTML and sass</li>
                      <li>Hackathon Winner</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-5">
                  <div className="card__cta">
                    <a href="#popup-space" className="btn btn--white">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--6">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--6">
                      Safe Driver Report
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Embedded Microcontrollers</li>
                      <li>C++ & Python</li>
                      <li>Computer Vision</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-6">
                  <div className="card__cta">
                    <a href="#popup-safe" className="btn btn--white">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--7">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--7">
                      MES
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Manufacturing Execution System</li>
                      <li>Camstar, SQL</li>
                      <li>C# & Python</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-7">
                  <div className="card__cta">
                    <a href="#popup-mes" className="btn btn--white">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--8">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--8">
                      Flow Player
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Javascript</li>
                      <li>HTML and CSS</li>
                      <li>Hardware</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-8">
                  <div className="card__cta">
                    <a href="#popup-flow" className="btn btn--white">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--9">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--9">
                      Personal Assistant
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>Javascript</li>
                      <li>Chrome extension</li>
                      <li>Google apis</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-9">
                  <div className="card__cta">
                    <a href="#popup-lucky" className="btn btn--white">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-contact" id="section-contact">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Contact Me</h2>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full name"
                      id="name"
                      required
                    />
                    <label className="form__label">Full name</label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      Email address
                    </label>
                  </div>

                  <div className="form__group">
                    <textarea
                      className="form__input form__textarea"
                      placeholder="Your Message"
                      id="message"
                    ></textarea>
                    <label htmlFor="message" className="form__label">
                      Your Message
                    </label>
                  </div>
                  <div className="form__group u-margin-bottom-medium"></div>

                  <div className="form__group">
                    <button className="btn btn--green">Send &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__logo-box">
          <picture className="footer__logo">
            <source
              srcSet="/src/img/laptop-small-1x.png 1x, /src/img/laptop-small-2x.png 2x"
              media="(max-width: 37.5em)"
            />
            <img
              srcSet="/src/img/laptop-1x.png 1x, /src/img/laptop-2x.png 2x"
              alt="Full logo"
              src="/src/img/laptop-2x.png"
            />
          </picture>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#section-about" className="footer__link">
                    About
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#section-contact" className="footer__link">
                    Contact Us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#section-skills" className="footer__link">
                    Skills
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#section-projects" className="footer__link">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by{" "}
              <a href="" className="footer__link">
                {" "}
                IsraelSoftwareDevlabs{" "}
              </a>{" "}
              using{" "}
              <a href="https://vitejs.dev/guide/" className="footer__link">
                {" "}
                Vite React
              </a>
              . Copyright &copy; by IsraelDevLabs. You are allowed to use this
              webpage for both personal or commercial.
            </p>
          </div>
        </div>
      </footer>

      <div className="popup" id="popup-fitness">
        <div className="popup__content">
          <div className="popup__left">
            <iframe
              src="https://drive.google.com/file/d/1gfUc95eBc-F1ORvqAm_Oup_8_cpEQtzB/preview"
              width="480px"
              height="646px"
            ></iframe>
          </div>

          <div className="popup__right">
            <a href="#section-projects" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">Fitness App tracker</h2>
            <h3 className="heading-tertiary">
              Application to Track your sets and repitions
            </h3>
            <p className="popup__text">
              Worked as a software engineer, to build my very own fitness
              tracker. Instead of writing down my sets and repititions on paper,
              I created a mobile app to track my workouts. It is still a work in
              progress.
              <br />
              <br />
              Technologies Used: Kotlin, java, and Android studio.
            </p>
          </div>
        </div>
      </div>

      <div className="popup" id="popup-cook">
        <div className="popup__content">
          <div className="popup__left">
            <iframe
              src="https://drive.google.com/file/d/1KlRDBHEQRLD5D8a34qyTp8s849vtxkIU/preview"
              width="480px"
              height="646px"
            ></iframe>
          </div>

          <div className="popup__right">
            <a href="#section-projects" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">CookGpt</h2>
            <h3 className="heading-tertiary">Mobile and Web App.</h3>
            <p className="popup__text">
              The team won 3rd place in the Google I/O Extended Hackathon. The
              web and mobile applications allow an individual to snap a photo of
              their ingredients from their refrigerator and provide quick and
              easy recipes. The application is powered by Artificial
              intelligence and computer vision.
              <br />
              <br />
              ● Developed an app using SwiftUI that takes a photo, detects
              ingredients, and shows AI-generated recipes.
              <br />
              <br />● Built a web application using Django, Python, Javascript,
              and Bootstrap to demo the application.
            </p>
          </div>
        </div>
      </div>

      <div className="popup" id="popup-fin">
        <div className="popup__content">
          <div className="popup__left">
            <img src="/src/img/Zellev2.png" alt="" className="popup__img" />
          </div>

          <div className="popup__right">
            <a href="#section-projects" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">Fin-tech</h2>
            <h3 className="heading-tertiary">Mobile, web and API&lsquo;s</h3>
            <p className="popup__text">
              Designed and implemented Zelle into the Online Banking and Mobile
              platform using C#, JQuery, Apache Camel, and Spring Boot, Docker,
              solving the problem of sending money to friends, family, and
              businesses.
              <br />
              <br />
              ● Architect internal API&lsquo;s to streamline reusability for
              internal and external stakeholders
              <br />
              ● Designed using PlantUML and Visio, document requirements, and
              program internal software applications
              <br />● Built new mobile and online banking platform features to
              improve users&lsquo; experiences with the company&lsquo;s software
              and increase VCCU&lsquo;s bottom line
            </p>
          </div>
        </div>
      </div>

      <div className="popup" id="popup-kube">
        <div className="popup__content">
          <div className="popup__left">
            <img
              src="/src/img/KubernetesV1.png"
              alt=""
              className="popup__img"
            />
            <img
              src="/src/img/ArchitectureV1.png"
              alt=""
              className="popup__img"
            />
          </div>

          <div className="popup__right">
            <a href="#section-projects" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">API&lsquo;s</h2>
            <h3 className="heading-tertiary">
              API ARCHITECTURE FOR N-TIER SYSTEMS
            </h3>
            <p className="popup__text">
              At a high level I deployed three different APIs. Minikube was used
              to deploy kubernetes cluster. Kubernetes can scale down resources
              and automate deployements. Docker was used to facilitate fast
              software deployment with the help of CI/CD. The kubernetes
              dashboard allowed for editing, troubleshooting containerized
              applications.
              <br />
              <br />
              ● Developed APIs using Spring/Spring Boot, Java and Apache Camel.
              <br />
              ● Built a web application using Javascript, and Bootstrap to demo
              the application.
              <br />● Used unit testing techniques with the JUnit testing
              framework.
            </p>
          </div>
        </div>
      </div>

      <div className="popup" id="popup-space">
        <div className="popup__content">
          <div className="popup__left">
            <img src="/src/img/searchpage.png" alt="" className="popup__img" />
            <img
              src="/src/img/shelterhomepage.PNG"
              alt=""
              className="popup__img"
            />
          </div>

          <div className="popup__right">
            <a href="#section-projects" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">ShelterSpace</h2>
            <h3 className="heading-tertiary">
              Tracking beds for Homeless shelters
            </h3>
            <p className="popup__text">
              Team won Grand prize to AngelHack HACKcelerator 2017 Cohort, which
              allows teams to continue building project alongside with 50
              startups from across the globe. This web platform allowed homeless
              shelters to both register available beds, shelters and homeless
              individuals can search for beds across a given region.
              <br />
              <br />
              ● Developed an website/Application that updates the number of beds
              for Homeless shelters in real-time
              <br />● Used Django, python, javascript, HTML, CSS to design the
              web application with interfacing hardware
            </p>
          </div>
        </div>
      </div>

      <div className="popup" id="popup-safe">
        <div className="popup__content">
          <div className="popup__left">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZqoyZDW0nWI"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="popup__right">
            <a href="#section-projects" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">Safe Driver Report system</h2>
            <h3 className="heading-tertiary">Hardware and Software Project</h3>
            <p className="popup__text">
              The Goal of this project was to bring awareness to the
              driver&lsquo;s bad driving habits. The system track bad driving
              behavior, which notified the driver in real time. Different
              modules were implemented to track tailgating, distracted driving,
              and speeding.
            </p>
          </div>
        </div>
      </div>

      <div className="popup" id="popup-mes">
        <div className="popup__content">
          <div className="popup__left">
            <iframe
              src="https://drive.google.com/file/d/1tcEqbeJFgwazNljWrlh3krH06QE3AFi-/preview"
              width="640"
              height="480"
            ></iframe>
          </div>

          <div className="popup__right">
            <a href="#section-projects" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">MES</h2>

            <p className="popup__text">
              Worked as a software engineer, modeler, and adminstrator for MES
              Software Platform. I&lsquo;ve built multiple software tools for
              automation and Manufacturing. The project above was one of many
              applications I Coded. Watch Automation Demo
              <br />
              <br />
              Technologies Used: C#, VB.NET, SQL, Python, Microsoft SQL Server,
              Business Objects, Zebra, ZPL, Camstar, WebI, Camstar Designer.
              Ignition Automation.
            </p>
          </div>
        </div>
      </div>

      <div className="popup" id="popup-flow">
        <div className="popup__content">
          <div className="popup__left">
            <img src="/src/img/Flow.JPG" alt="" className="popup__img" />
          </div>

          <div className="popup__right">
            <a href="#section-projects" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">Flow Player</h2>
            <h3 className="heading-tertiary">Hardware and Software Project</h3>
            <p className="popup__text">
              Team won 1st place and a $2,500 Scholarship to Coding house -
              Developed a web radio station that was controlled by a Myo
              armband!
            </p>
          </div>
        </div>
      </div>

      <div className="popup" id="popup-lucky">
        <div className="popup__content">
          <div className="popup__left">
            <iframe
              src="https://drive.google.com/file/d/1yie3uJhqZKhHMeKptF68YsJu6_KwHrCh/preview"
              width="640"
              height="480"
            ></iframe>
          </div>

          <div className="popup__right">
            <a href="#section-projects" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">Safe Driver Report system</h2>
            <h3 className="heading-tertiary">Hardware and Software Project</h3>
            <p className="popup__text">
              Developed a virtual assistant chrome extension for better web
              browser control.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import "../sass/main.scss";

function PageNav() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#section-about" className="navigation__link">
              <span>01</span>About Me
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-projects" className="navigation__link">
              <span>02</span>Portfolio
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-skills" className="navigation__link">
              <span>03</span>Skills
            </a>
          </li>
          <li className="navigation__item">
            <a href="#section-contact" className="navigation__link">
              <span>04</span>Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;

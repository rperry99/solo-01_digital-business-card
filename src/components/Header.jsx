import './../component-styles/header-styles.css';

function Header() {
  return (
    <header>
      <h1>Russ Perry</h1>
      <p className="subtitle">Front End Developer</p>
      <a className="website" href="https://russintech.com">
        russintech.com
      </a>
    </header>
  );
}

export default Header;

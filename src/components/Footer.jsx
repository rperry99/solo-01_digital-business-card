import '../component-styles/footer-styles.css';

function Footer() {
  return (
    <footer>
      <a
        href="https://twitter.com/russintech"
        className="social-link"
        target="_blank"
      >
        <i class="fa-brands fa-square-x-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/snapsbyrp/"
        className="social-link"
        target="_blank"
      >
        <i class="fa-brands fa-square-instagram"></i>
      </a>
      <a
        href="https://github.com/rperry99"
        className="social-link"
        target="_blank"
      >
        <i class="fa-brands fa-square-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/russ-perry-22b638a8/"
        className="social-link"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </footer>
  );
}

export default Footer;

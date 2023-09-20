import './../component-styles/call-to-actions-styles.css';

function CallToActions() {
  return (
    <div className="cta-container">
      <a
        className="cta cta-email"
        href="mailto:rperry1886@gmail.com"
        target="_blank"
      >
        <i class="fa-solid fa-envelope"></i>
        Email
      </a>
      <a
        className="cta cta-linkedin"
        href="https://www.linkedin.com/in/russ-perry-22b638a8/"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
        LinkedIn
      </a>
    </div>
  );
}

export default CallToActions;

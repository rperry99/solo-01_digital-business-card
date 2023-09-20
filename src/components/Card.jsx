import Headshot from './Headshot';
import Header from './Header';
import CallToActions from './CallToActions';
import Footer from './Footer';
import '../component-styles/card-styles.css';

function Card() {
  return (
    <div className="card">
      <Headshot />
      <Header />
      <CallToActions />
      <Footer />
    </div>
  );
}

export default Card;

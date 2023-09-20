import Headshot from './Headshot';
import Footer from './Footer';
import '../component-styles/card-styles.css';

function Card() {
  return (
    <div className="card">
      <Headshot />
      <Footer />
    </div>
  );
}

export default Card;

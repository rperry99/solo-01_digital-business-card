import Headshot from './Headshot';
import Header from './Header';
import Footer from './Footer';
import '../component-styles/card-styles.css';

function Card() {
  return (
    <div className="card">
      <Headshot />
      <Header />
      <Footer />
    </div>
  );
}

export default Card;

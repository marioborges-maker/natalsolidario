import '../../App.css';
import Hero from '../../components/Hero';
import Timeout from '../../components/Timeout';
import Last from '../../components/Last';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className='Container'>
      <Hero />
      <Timeout />
      <Last />
      <Footer />
    </div>
  );
}

export default Home;

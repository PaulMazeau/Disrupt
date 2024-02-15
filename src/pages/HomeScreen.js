import Banner from '../components/Banner';
import CdBox from '../components/cdBox';
import CdGrid from '../components/cdGrid';
import '../styles/homepage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <Banner/>
      <CdGrid/>
    </div>
  );
}

export default HomePage;

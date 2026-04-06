import withoutAuth from '../../HOC/withoutAuth';
import CounterSection from './CounterSection';
import Footer from './Footer';
import HerSection from './HeroSection';
import PopulerCourse from './PopulerCourse';
import TrendingCourse from './TrendingCourse';

const Home = () => {
  return (
    <>
      <HerSection/>
      <CounterSection/>
      <PopulerCourse/>
      <TrendingCourse/>
      <Footer/>
    </>
  );
}

export default withoutAuth(Home);

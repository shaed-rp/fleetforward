import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PanelInfo from './components/PanelInfo';
import TopicsSection from './components/TopicsSection';
import TakeawaysSection from './components/TakeawaysSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <HeroSection />
      <PanelInfo />
      <TopicsSection />
      <TakeawaysSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;


import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PanelInfo from './components/PanelInfo';
import TopicsSection from './components/TopicsSection';
import TakeawaysSection from './components/TakeawaysSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-primary-navy text-primary-navy dark:text-gray-50 font-inter">
        <Header />
        <HeroSection />
        <PanelInfo />
        <TopicsSection />
        <TakeawaysSection />
        <Footer />
        <ScrollToTop />
              </div>
    </ThemeProvider>
  );
}

export default App;


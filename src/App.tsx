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
      <div className="min-h-screen bg-apple-gray-1 dark:bg-apple-gray-11 text-apple-gray-11 dark:text-apple-gray-1 font-apple">
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


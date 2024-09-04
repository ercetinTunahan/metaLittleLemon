import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Loading from './components/Loading';
import BookTablePage from './components/BookTablePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 saniye bekleme süresi, isteğe bağlı olarak ayarlanabilir
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HeroSection />
                <Highlights />
                <Testimonials />
                <About />
                <Footer />
              </div>
            }
          />
          <Route path="/book-table" element={<BookTablePage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

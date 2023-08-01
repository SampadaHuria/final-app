// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import VegetablesGallery from './components/VegetablesGallery';
import ProductsPage from './components/ProductsPage';
import DealOfTheDay from './components/DealOfTheDay';
import CustomerReviews from './components/CustomerReviews';
import NewsletterSubscription from './components/NewsletterSubscription';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <VegetablesGallery />
      <ProductsPage />
      <DealOfTheDay />
      <CustomerReviews />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
}

export default App;

import { Favorite } from "./components/Favorite";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Recommended } from "./components/Recommended";



function App() {
  return (
   
      <div className="App">
        <Header />
        <Favorite />
        <Recommended />
        <Footer />
      </div>
  
  );
}

export default App;

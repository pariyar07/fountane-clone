import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Homepage from "./Pages/Home";

function App() {
  return (
    <div className="App flex flex-col m-auto siteWidth">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;

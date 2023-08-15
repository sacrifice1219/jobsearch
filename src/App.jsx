import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Jobs from "./Components/JobDiv/Jobs";
import Value from "./Components/ValueDiv/Value";
import Footer from "./Components/FooterDiv/Footer";
import Search from "./Components/SearchDiv/Search";
import './App.css';


const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  );
};

export default App;

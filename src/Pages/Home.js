import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Post from '../Components/Posts/Posts'
function Home() {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Post />
      <Footer />
    </div>
  );
}

export default Home;

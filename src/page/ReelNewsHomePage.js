import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import FeaturedArticle from "../components/FeaturedArticle";
import Header from "../components/Header";
import SidebarArticles from "../components/SidebarArticle";

const ReelNewsHomePage = () => {
  return (
    <div className="container-fluid px-0">
      <Header />
      <NavBar />
      <main className="container py-4">
        <div className="row">
          <div className="col-12 col-md-8 mb-4 mb-md-0">
            <FeaturedArticle />
          </div>
          <aside className="col-12 col-md-4">
            <SidebarArticles />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ReelNewsHomePage;

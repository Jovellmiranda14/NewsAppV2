import React from "react";
import "../style/SidebarArticle.css";
const articles = [
  {
    image: "../assets/image1.jpg",
    author: "Daniel Kim",
    date: "June 25, 2025",
    title: "As Investors Bet On Ad Recovery",
    excerpt: "Analysts report a strong rebound in digital ad spending...",
  },
  {
    image: "../assets/image2.jpg",
    author: "Alicia Tran",
    date: "June 22, 2025",
    title: "Markets Cautious Optimism",
    excerpt: "After months of hikes, the Fed hints at holding pattern...",
  },
  {
    image: "../assets/image3.jpg",
    author: "Marcus Liu",
    date: "June 16, 2025",
    title: "Ethereum Leads 12% Weekly Gain",
    excerpt: "Renewed institutional interest and regulatory clarity...",
  },
  {
    image: "../assets/image4.jpg",
    author: "Laila Mendoza",
    date: "May 2, 2025",
    title: "After Two-Year Market Freeze",
    excerpt: "A wave of physical branch shutdowns underscores...",
  },
  {
    image: "../assets/image5.jpg",
    author: "Rahul Dasai",
    date: "April 18, 2025",
    title: "Retail Closures Accelerate",
    excerpt: "Challenges remain as late 2025 offerings, signaling renewal...",
  },
];

const SidebarArticles = () => (
  <>
    {articles.map((article, index) => (
      <div
        key={index}
        className="border-color-gray pb-2 mb-2 d-flex align-items-start"
      >
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: 169,
            height: 120,
            marginTop: "8px",
            marginLeft: "10px",
            marginRight: "12px",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <div
          className="mt-0 pb-1"
          style={{ marginRight: "1rem", paddingTop: ".1px" }}
        >
          <small className="text-muted" style={{ fontSize: "12px" }}>
            by {article.author} | {article.date}
          </small>
          <h5 className="mt-0 fw-bold" style={{ fontSize: "23px" }}>
            {article.title}
          </h5>
          <p className="mb-0 text-secondary" style={{ fontSize: "14px" }}>
            {article.excerpt}
          </p>
        </div>
      </div>
    ))}
  </>
);

export default SidebarArticles;

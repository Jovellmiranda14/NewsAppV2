import React from "react";
import "../style/SidebarArticle.css"; // Ensure this path is correct
const articles = [
  {
    image: "../assets/image1.jpg",
    author: "Daniel Kim",
    date: "June 25, 2025",
    title: "As Investors Bet On Ad Recovery",
    excerpt: "Analysts report a strong rebound in digital ad spending...",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Alicia Tran",
    date: "June 22, 2025",
    title: "Markets Cautious Optimism",
    excerpt: "After months of hikes, the Fed hints at holding pattern...",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Marcus Liu",
    date: "June 16, 2025",
    title: "Ethereum Leads 12% Weekly Gain",
    excerpt: "Renewed institutional interest and regulatory clarity...",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Laila Mendoza",
    date: "May 2, 2025",
    title: "After Two-Year Market Freeze",
    excerpt: "A wave of physical branch shutdowns underscores...",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
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
        className="border-color-gray pb-3 mb-2 d-flex align-items-start"
        style={{ paddingRight: "2px" }} // Add space between border and text
      >
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: 169,
            height: 120,
            marginTop: "15px",
            marginLeft: "10px",
            marginRight: "16px",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <div className="mt-1">
          <small className="text-muted" style={{ fontSize: "11px" }}>
            by {article.author} | {article.date}
          </small>
          <h5 className="mt-1 fw-bold" style={{ fontSize: "20px" }}>
            {article.title}
          </h5>
          <p
            className="mb-0 text-secondary"
            style={{ fontSize: "14px", marginRight: "0.1rem" }}
          >
            {article.excerpt}
          </p>
        </div>
      </div>
    ))}
  </>
);

export default SidebarArticles;

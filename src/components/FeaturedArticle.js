import React from "react";

const featuredArticles = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Jane Roberts",
    date: "June 19, 2025",
    title: "City Officials Unveil New Plan To Improve Transit System",
    summary:
      "A bold new initiative aims to reduce congestion, expand service hours, and modernize infrastructure across the city's busiest routes.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Jane Roberts",
    date: "June 19, 2025",
    title: "City Officials Unveil New Plan To Improve Transit System",
    summary:
      "A bold new initiative aims to reduce congestion, expand service hours, and modernize infrastructure across the city's busiest routes.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Jane Roberts",
    date: "June 19, 2025",
    title: "City Officials Unveil New Plan To Improve Transit System",
    summary:
      "A bold new initiative aims to reduce congestion, expand service hours, and modernize infrastructure across the city's busiest routes.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Jane Roberts",
    date: "June 19, 2025",
    title: "City Officials Unveil New Plan To Improve Transit System",
    summary:
      "A bold new initiative aims to reduce congestion, expand service hours, and modernize infrastructure across the city's busiest routes.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Jane Roberts",
    date: "June 19, 2025",
    title: "City Officials Unveil New Plan To Improve Transit System",
    summary:
      "A bold new initiative aims to reduce congestion, expand service hours, and modernize infrastructure across the city's busiest routes.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Jane Roberts",
    date: "June 19, 2025",
    title: "City Officials Unveil New Plan To Improve Transit System",
    summary:
      "A bold new initiative aims to reduce congestion, expand service hours, and modernize infrastructure across the city's busiest routes.",
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Mark Chen",
    date: "June 20, 2025",
    title: "NASA Launches New Mars Rover With AI-Powered Navigation",
    summary:
      "The next generation Mars rover will explore deeper terrains and analyze rock samples using cutting-edge AI.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Samantha Lee",
    date: "June 18, 2025",
    title: "New Education Policy Puts Emphasis on Digital Literacy",
    summary:
      "Schools across the country will integrate coding, data analysis, and online safety into core curricula by 2026.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Samantha Lee",
    date: "June 18, 2025",
    title: "New Education Policy Puts Emphasis on Digital Literacy",
    summary:
      "Schools across the country will integrate coding, data analysis, and online safety into core curricula by 2026.",
  },{
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Samantha Lee",
    date: "June 18, 2025",
    title: "New Education Policy Puts Emphasis on Digital Literacy",
    summary:
      "Schools across the country will integrate coding, data analysis, and online safety into core curricula by 2026.",
  },{
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUqO1e1mTTXQVeBH_8-Yn-61PbKqHXrzxHiQ&s",
    author: "Samantha Lee",
    date: "June 18, 2025",
    title: "New Education Policy Puts Emphasis on Digital Literacy",
    summary:
      "Schools across the country will integrate coding, data analysis, and online safety into core curricula by 2026.",
  },
];

const FeaturedArticle = () => {
  const featured = featuredArticles[0];

  return (
    <div className="position-relative">
      {/* Background Image */}
      <img
        src="./assets/sample_image.jpg"
        alt={featured.title}
        className="img-fluid w-100"
        style={{ height: "650px", width: "534px", objectFit: "cover" }}
      />

      {/* Overlayed Text */}
      <div
        className="position-absolute p-4 text-white bg-opacity-50 w-100"
        style={{ bottom: "12%", marginRight: "100px" }}
      >
        <small className="fs-6">
          {featured.author} | {featured.date}
        </small>
        <h2 className="fw-bold mt-2">{featured.title}</h2>
        <p style={{ color: "rgba(255, 213, 213, 0.8)" }} className="fs-5">
          {featured.summary}
          {""}
        </p>
      </div>

      {/* Thumbnails */}
      <div className="d-flex overflow-auto mt-1">
        {featuredArticles.map((article, index) => (
          <img
            key={index}
            src={article.image}
            alt={`thumb-${index}`}
            className="me-2 border-dark"
            style={{ width: 80, height: 80, objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticle;

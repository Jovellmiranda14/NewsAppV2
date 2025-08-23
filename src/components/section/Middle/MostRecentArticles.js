import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../style/MostRecentArticles.css";

const recentArticlesData = [
  {
    id: 1,
    avatar: "/assets/avatar-julian.jpg",
    author: "Julian Rawford",
    title: "Remote Work Reshapes Commercial Real Estate Outlook",
    content: "The shift to remote work is transforming the commercial real estate landscape, with companies rethinking their office space needs. This article delves into the implications for landlords and tenants alike.",
    category: "Business",
    date: "March 25",
    readTime: "4 Min Read",
    image: "/assets/sample_image2.jpg", // ✅ Same image for all
  },
  {
    id: 2,
    avatar: "/assets/avatar-sophie.jpg",
    author: "Sophie Greenhills",
    title: "Can Central Banks Tame Inflation Without Stalling Growth?",
    content: "As inflation remains stubbornly high, central banks face a delicate balancing act. This article explores the challenges and strategies they are employing to maintain economic stability.",
    category: "Economy",
    date: "March 25",
    readTime: "6 Min Read",
    image: "/assets/sample_image.jpg",
  },
  {
    id: 3,
    avatar: "/assets/avatar-darius.jpg",
    author: "Darius Wong",
    title: "Digital Payments Take Over: Is Cash Finally Dying?",
    content: "The digital era is here, and it's transforming the way we pay for goods and services. This article examines the role of digital payments in the modern world.",
    category: "Tech & Finance",
    date: "March 25",
    readTime: "4 Min Read",
    image: "/assets/sample_image.jpg",
  },
  {
    id: 4,
    avatar: "/assets/avatar-amelia.jpg",
    author: "Amelia Carter Sr",
    title: "Markets Brace For Impact As Trade Tensions Rise",
    content: "As trade tensions between the United States and China intensify, market watchers brace for a potential impact on global financial markets.",
    category: "Finance",
    date: "March 25",
    readTime: "5 Min Read",
    image: "/assets/sample_image.jpg",
  },
];

const MostRecentArticles = () => {
  return (
    <Row className="gx-5">
      {/* Left Column */}
      <Col md={5}>
        <h4 className="most-recent-title mb-4 text-uppercase text-body-tertiary border-bottom border-3 fw-bold border-light-subtle">
          Most Recent
        </h4>
        {recentArticlesData.map((article) => (
          <div key={article.id} className="d-flex mb-4 align-items-start">
            <span className="fs-3 fw-bold text-muted me-3">
              {String(article.id).padStart(2, "0")}
            </span>
            <div>
              <div className="d-flex align-items-center mb-1">
                <Image
                  src={article.avatar}
                  roundedCircle
                  width="24"
                  height="24"
                  className="me-2"
                />
                <small className="text-muted">{article.author}</small>
              </div>
              <h6 className="fw-semibold">{article.title}</h6>
              <p className="text-muted small mb-0">
                {article.category} / {article.date} / {article.readTime}
              </p>
            </div>
          </div>
        ))}
      </Col>

      <Col md={7}>
        <div className="recent-articles-wrapper">
          {/* First Article - Full Width */}
          {recentArticlesData[0] && (
            <div className=" mb-4" style={{ position: "relative" }}>
              <div className="article-content" style={{ position: "relative" }}>
                {/* Article Image */}
                {recentArticlesData[0].image && (
                  <div style={{ position: "relative" }}>
                    <img
                      src={recentArticlesData[0].image}
                      alt={recentArticlesData[0].title}
                      className="article-image"
                      style={{ width: "100%", height: "auto" }}
                    />
                    {/* Overlay Text */}
                    <div
                      className="overlay-text"
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "20px",
                        color: "white",
                      }}
                    >
                      <div className="article-content">
                        {/* Author with Avatar */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img
                            src={recentArticlesData[0].avatar}
                            alt={recentArticlesData[0].author}
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                          <small>{recentArticlesData[0].author}</small>
                        </div>
                        {/* Title */}
                        <h5 className="article-title mt-2">{recentArticlesData[0].title}</h5>
                        {/* Content */}
                        <p>{recentArticlesData[0].content}</p>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="row">
            {recentArticlesData.slice(1, 3).map((article) => (
              <div className="col-md-6" key={article.id}>
                <div className="article-card mb-3" style={{ position: "relative" }}>
                  <div className="article-content" style={{ position: "relative" }}>
                    {/* Article Image */}
                    {article.image && (
                      <div style={{ position: "relative" }}>
                        <img
                          src={article.image}
                          alt={article.title}
                          className="article-image"
                          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                        {/* Overlay Text */}
                        <div
                          className="overlay-text"
                          style={{
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            width: "100%",
                            color: "white",
                          }}
                        >
                          <small>{article.author}</small>
                          <div style={{ fontSize: "0.8rem" }}>
                            {article.category} · {article.date} · {article.readTime}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Title below the image */}
                    <h5 className="article-title mt-2">{article.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MostRecentArticles;

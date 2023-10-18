import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-success">{source}</span>
        </div>
        <img
          className="card-img-top"
          src={
            imageUrl
              ? imageUrl
              : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/pixel-buds-pro-092613840-16x9.jpg?VersionId=Ce1RmDOfodzS4I5y1p2YT9rptMx5GQcl"
          }
          alt="..."
        />{" "}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

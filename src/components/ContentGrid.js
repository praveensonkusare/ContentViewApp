import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const ContentGrid = ({ searchQuery }) => {
  const [content, setContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    fetchContent();
  }, []);

  useEffect(() => {
    const filtered = content.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredContent(filtered);
  }, [searchQuery, content]);

  const fetchContent = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://test.create.diagnal.com/data/page${page}.json`
      );
      const newContent = response.data.page["content-items"].content;

      setContent((prevContent) => [...prevContent, ...newContent]);
      setFilteredContent((prevFilteredContent) => [
        ...prevFilteredContent,
        ...newContent,
      ]);

      setPage((prevPage) => prevPage + 1);

      if (newContent.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  return (
    <InfiniteScroll
      dataLength={filteredContent.length}
      next={fetchContent}
      hasMore={hasMore}
      endMessage={
        <p style={{ textAlign: "center" }}>No more content to load.</p>
      }
    >
      <div className="grid-container">
        {filteredContent.map((item, index) => (
          <div className="grid-item" key={index}>
            <img
              src={`https://test.create.diagnal.com/images/${item["poster-image"]}`}
              alt={item.name}
            />
            <p className="grid-item p">{item.name}</p>
          </div>
        ))}
      </div>
      {filteredContent.length === 0 && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <CircularProgress color="inherit" />
        </div>
      )}
    </InfiniteScroll>
  );
};

export default React.memo(ContentGrid);

import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading]);

  return (
    <main>
      <div className="section-title">
        <h2>{loading ? "loading..." : "pagination"}</h2>
        <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
          {followers.map((follower, index) => {
            return <Follower key={index} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

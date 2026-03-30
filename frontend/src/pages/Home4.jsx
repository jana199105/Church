import React, { useState, useEffect } from "react";
import "../Events.css";
import "../App.css"

export default function Home() {
  const [newsItems, setNewsItems] = useState([]);
  const [openMonth, setOpenMonth] = useState(null); // tracks which month is expanded

  useEffect(() => {
    fetch("https://church-bq2s.onrender.comevents/monthly")
      .then((res) => res.json())
      .then((data) => {
        const formatted = Object.entries(data).map(([month, events]) => ({
          month,
          events,
        }));
        setNewsItems(formatted);
        console.log("Fetched monthly events:", formatted);
      })
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  const toggleMonth = (month) => {
    setOpenMonth(openMonth === month ? null : month);
  };

  return (
    <aside className="news-side">
      <h2 className="news-head">News & Events</h2>
      <div className="news-box">
        {newsItems.length > 0 ? (
          newsItems.map((group, i) => (
            <div key={i} className="news-group">
              <h3
                className="month-title"
                onClick={() => toggleMonth(group.month)}
              >
                {group.month}
                <span className="toggle-icon">
                  {openMonth === group.month ? "▲" : "▼"}
                </span>
              </h3>
              <hr />
              {openMonth === group.month && (
                <div className="event-list">
                  {group.events.map((e, j) => (
                    <div key={j} className="news-item">
                      <span className="news-date">
                        {new Date(e.date_from).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                        })}{" "}
                        -{" "}
                        {new Date(e.date_to).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                      <h4 className="news-title">{e.header}</h4>
                      <p className="news-desc">{e.sub_header}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No upcoming events.</p>
        )}
      </div>
    </aside>
  );
}

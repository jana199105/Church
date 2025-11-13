import React, { useEffect, useState } from "react";
import "../App.css";
import "../Events.css";
import Navbar from "../components/Navbar";

export default function NewsEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/events/monthly")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <Navbar />
        <div className="events-container">
          <h2>Loading events...</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      <section className="events-page">
        
        <h2 className="events-title">
          <span role="img" aria-label="calendar">📅</span> News & Events
        </h2>

        {events.length === 0 ? (
          <p className="no-events">No upcoming events.</p>
        ) : (
          events.map((monthData, index) => (
            <div className="month-section" key={index}>
              <h3 className="month-heading">{monthData.month}</h3> <br/>
              <hr className="divider" />
              {monthData.events.map((event, idx) => (
                <div className="event-card" key={idx}>
                  <h4 className="event-title">{event.header}</h4>
                  <p className="event-description">{event.sub_header}</p>
                  <p className="event-date">
                    📅 {event.date_from} → {event.date_to}
                  </p>
                </div>
              ))}
            </div>
          ))
        )}
      </section>
    </>
  );
}

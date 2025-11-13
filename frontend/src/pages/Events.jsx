import React, { useEffect, useState } from "react";
import "../NewEvents.css";
import Navbar from "../components/Navbar";
export default function Events() {
  const [events, setEvents] = useState([]);
  const [header, setHeader] = useState("");
  const [subHeader, setSubHeader] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [editingId, setEditingId] = useState(null);

  const fetchEvents = async () => {
    const res = await fetch("http://127.0.0.1:5000/events");
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddOrUpdate = async () => {
    const payload = { header, sub_header: subHeader, date_from: dateFrom, date_to: dateTo };
    if (editingId) {
      await fetch(`http://127.0.0.1:5000/events/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      setEditingId(null);
    } else {
      await fetch("http://127.0.0.1:5000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    }
    setHeader("");
    setSubHeader("");
    setDateFrom("");
    setDateTo("");
    fetchEvents();
  };

  const handleDelete = async (id) => {
    await fetch(`http://127.0.0.1:5000/events/${id}`, { method: "DELETE" });
    fetchEvents();
  };

  const handleEdit = (event) => {
    setHeader(event.header);
    setSubHeader(event.sub_header);
    setDateFrom(event.date_from);
    setDateTo(event.date_to);
    setEditingId(event._id);
  };

  return (
    <div className="events-container"> <Navbar/> <br/>
      <div className="event-form">
        <h2>Add New Event</h2>
        <input
          type="text"
          placeholder="Event Header (e.g., Feast of St. Therese)"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <textarea
          placeholder="Event Sub-Header / Description"
          value={subHeader}
          onChange={(e) => setSubHeader(e.target.value)}
        />
        <div className="date-inputs">
          <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
          <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
        </div>
        <button onClick={handleAddOrUpdate}>{editingId ? "Update Event" : "Add Event"}</button>
      </div>

      <h2 className="upcoming-header">Upcoming Events</h2>
      <div className="event-list">
        {events.length === 0 ? (
          <p className="no-events">No upcoming events.</p>
        ) : (
          events.map((event) => (
            <div className="event-card" key={event._id}>
              <h3>{event.header}</h3>
              <p>{event.sub_header}</p>
              <p className="event-date">
                📅 {event.date_from
                  ? `${new Date(event.date_from).toLocaleDateString()}${
                      event.date_to ? " – " + new Date(event.date_to).toLocaleDateString() : ""
                    }`
                  : "Date not set"}
              </p>
              <div className="event-actions">
                <button className="edit-btn" onClick={() => handleEdit(event)}>✏️ Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(event._id)}>🗑️ Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

import { FaCalendarAlt, FaClock } from "react-icons/fa";
import "../App.css";

export default function MassSchedule() {
  const schedule = [
    {
      date: "Sunday, Oct 19, 2025",
      times: [
        { lang: "English", value: "06:00 AM, 09:30 AM, 12:00 PM, 05:00 PM" },
        { lang: "Kannada", value: "08:15 AM" },
        { lang: "Konkani", value: "11:00 AM" },
        { lang: "Malayalam", value: "06:15 PM" },
        { lang: "Tamil", value: "07:00 AM" },
      ],
    },
    {
      date: "Monday, Oct 20, 2025",
      times: [
        { lang: "English", value: "06:30 AM, 12:00 PM" },
      ],
    },
    {
      date: "Tuesday, Oct 21, 2025",
      times: [
        { lang: "English", value: "06:30 AM, 12:00 PM, 06:30 PM" },
        { lang: "Kannada", value: "05:00 PM" },
        { lang: "Malayalam", value: "04:15 PM" },
        { lang: "Tamil", value: "05:45 PM" },
      ],
    },
  ];

  return (
    <div className="mass-card">
      <h2 className="mass-heading">Mass Schedule</h2>
      <div className="icon">
        <FaClock />
      </div>

      {schedule.map((day, index) => (
        <div key={index} className="mass-day">
          <p className="mass-date">
            <FaCalendarAlt /> <span>{day.date}</span>
          </p>
          <ul>
            {day.times.map((t, i) => (
              <li key={i}>
                <strong>{t.lang}</strong> – {t.value}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="office">
        <h3>Parish Office Timings</h3>
        <p>Weekdays: 09:30 AM - 1:00 PM, 03:30 PM - 07:00 PM</p>
        <p>Sundays: 08:00 AM - 12:00 PM</p>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    fetch("http://localhost:3001/api/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch(() => alert("⚠️ Failed to fetch data from the server!"));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = (index) => {
    if (window.confirm("Delete?")) {
      fetch(`http://localhost:3001/api/messages/${index}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          fetchMessages();
        });
    }
  };

  const handleStatusChange = (index, status) => {
    fetch(`http://localhost:3001/api/messages/${index}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetchMessages();
      });
  };

  return (
    <div style={{ maxWidth: 900, margin: "2rem auto" }}>
      <h2>📊 Admin — Contact Messages</h2>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((m, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.message}</td>
                <td>{new Date(m.date).toLocaleString()}</td>
                <td>
                  <span
                    style={{
                      color: m.status === "new" ? "red" : "green",
                      fontWeight: "bold",
                    }}
                  >
                    {m.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleStatusChange(i, "read")}
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      padding: "5px 8px",
                      marginRight: "5px",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    Mark as Read
                  </button>

                  {/* 📨 Reply товч */}
                  <a
                    href={`mailto:${m.email}?subject=Re: Your message&body=Hello ${m.name},%0D%0A%0D%0A`}
                    style={{
                      backgroundColor: "#007bff",
                      color: "white",
                      padding: "5px 8px",
                      borderRadius: "5px",
                      marginRight: "5px",
                      textDecoration: "none",
                    }}
                  >
                    Reply
                  </a>

                  <button
                    onClick={() => handleDelete(i)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 8px",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

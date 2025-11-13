import { useEffect, useState } from "react";
import "./admin.css"; 

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
    if (window.confirm("Delete this message?")) {
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

  const handleReply = (index, replyText) => {
    fetch(`http://localhost:3001/api/messages/${index}/reply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply: replyText }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetchMessages();
      });
  };

  return (
    <div className="admin-container">
      <h2>📊 Admin — Contact Messages</h2>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Status</th>
              <th>Reply</th>
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
                <td className={`status ${m.status}`}>
                  {m.status.toUpperCase()}
                </td>
                <td>
                  {m.reply ? (
                    <span className="reply-text">💬 {m.reply}</span>
                  ) : (
                    <>
                      <input
                        type="text"
                        placeholder="Reply..."
                        className="reply-input"
                        id={`reply-${i}`}
                      />
                      <button
                        className="send-btn"
                        onClick={() =>
                          handleReply(
                            i,
                            document.getElementById(`reply-${i}`).value
                          )
                        }
                      >
                        Send
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    className="mark-btn"
                    onClick={() => handleStatusChange(i, "read")}
                  >
                    Mark as Read
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(i)}
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

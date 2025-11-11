import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./messages.json";

// 🧩 Туслах функцүүд
function loadMessages() {
  if (fs.existsSync(DATA_FILE)) {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  }
  return [];
}
function saveMessages(messages) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
}

// ✅ Илгээсэн мессеж хадгалах
app.post("/api/message", (req, res) => {
  const { name, email, message } = req.body;
  const messages = loadMessages();

  const newMsg = {
    name,
    email,
    message,
    date: new Date().toISOString(),
    status: "new", // 🔹 шинэ мессежийн төлөв
  };

  messages.push(newMsg);
  saveMessages(messages);
  res.status(200).json({ success: true, message: "Message saved!" });
});

// ✅ Бүх мессеж авах
app.get("/api/messages", (req, res) => {
  res.json(loadMessages());
});

// ✅ Мессеж устгах
app.delete("/api/messages/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const messages = loadMessages();

  if (index >= 0 && index < messages.length) {
    messages.splice(index, 1);
    saveMessages(messages);
    res.json({ success: true, message: "Message deleted!" });
  } else {
    res.status(404).json({ success: false, message: "Message not found!" });
  }
});

// ✅ Мессежийн төлөв өөрчлөх
app.patch("/api/messages/:index/status", (req, res) => {
  const { status } = req.body;
  const index = parseInt(req.params.index);
  const messages = loadMessages();

  if (messages[index]) {
    messages[index].status = status;
    saveMessages(messages);
    res.json({ success: true, message: `Status updated to '${status}'` });
  } else {
    res.status(404).json({ success: false, message: "Message not found!" });
  }
});

app.listen(3001, () => console.log("🚀 Server running on port 3001"));

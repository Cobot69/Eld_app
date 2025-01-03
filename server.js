import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri =
  "mongodb+srv://admin:0xH6VRgZu4FI6bUp@cluster0.nrh8r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

let db;
client.connect().then(() => {
  db = client.db("Senior"); // Database name
  console.log("Connected to MongoDB");
});

// Registration route
app.post("/register", async (req, res) => {
  const { username, phone, password } = req.body;

  if (!username || !phone || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingUser = await db.collection("users").findOne({
      $or: [{ username }, { phone }],
    });
    if (existingUser) {
      return res.status(400).json({ error: "Username or phone already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, phone, password: hashedPassword };
    await db.collection("users").insertOne(newUser);

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { usernameOrPhone, password } = req.body;

  if (!usernameOrPhone || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const user = await db.collection("users").findOne({
      $or: [{ username: usernameOrPhone }, { phone: usernameOrPhone }],
    });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


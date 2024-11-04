const express = require("express");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const mysql = require("mysql2");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

const db = {
  host: "localhost",
  user: "root",
  password: "KarthiK7775",
  database: "staff",
};

function checkAuth(req, res, next) {
  // const cookie = req.cookies.myCookie;
  // if (!cookie) {
  //   res.status(401).json({ success: false, message: "Not authorized" });
  // }
  // next();
}

app.get("/api/students/:className", checkAuth, (req, res) => {
  const className = req.params.className;
  const filePath = path.join(__dirname, `${className}.csv`);

  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.json(results);
    })
    .on("error", (error) => {
      console.error("Error reading CSV file:", error);
      res.status(500).send("Error reading CSV file");
    });
});

app.post("/api/attendance", checkAuth, (req, res) => {
  const { register, present, absent, onDuty, class_name } = req.body;

  const connection = mysql.createConnection(db);

  try {
    connection.query(
      `delete from log where class_name=? and date = ?`,
      [class_name, formatDate(new Date())],
      (error, results) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Deleted Successfully");
        }
      }
    );
  } finally {
    connection.query(
      "INSERT INTO log (date, class_name, present, absent, onDuty) VALUES (?, ?, ?, ?, ?)",
      [
        formatDate(new Date()),
        class_name,
        JSON.stringify(present),
        JSON.stringify(absent),
        JSON.stringify(onDuty),
      ],
      (error, results) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Inserted Successfully");
        }
        connection.end();
      }
    );
  }
});

app.post("/api/attend", checkAuth, (req, res) => {
  const { class: className, attendanceType, date } = req.body;
  const connection = mysql.createConnection(db);

  const query = `SELECT ${attendanceType} FROM log WHERE class_name = ? AND date = ?`;
  const params = [className, date];

  connection.query(query, params, (err, results) => {
    if (err) {
      console.error("Error fetching attendance data:", err);
      return res.status(500).json({ error: "Error fetching attendance data" });
    }

    if (results.length > 0 && results[0][attendanceType]) {
      try {
        const attendanceData = results[0][attendanceType];
        const filteredData = JSON.parse(attendanceData);
        return res.json(filteredData);
      } catch (parseError) {
        console.error("Error parsing attendance data:", parseError);
        return res.status(500).json({ error: "Error parsing attendance data" });
      }
    } else {
      console.warn("No data found or data is undefined");
      return res.json([]);
    }

    connection.end();
  });
});

app.get("/attendance", checkAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/view-attendance", checkAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

app.post("/login", (req, res) => {
  const dbs = mysql.createConnection(db);
  const { email, password } = req.body;

  const query = "SELECT * FROM details WHERE email = ? AND password = ?";
  dbs.query(query, [email, password], (error, results) => {
    if (error) {
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }
    if (results.length > 0) {
      const name = email.split("@")[0];
      res.cookie("myCookie", name, {
        maxAge: 900000,
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
      });
      res.json({ success: true });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("myCookie", {
    httpOnly: true,
    secure: false,
    sameSite: "Strict",
  });
  res.json({ success: true, message: "Logged out successfully" });
});

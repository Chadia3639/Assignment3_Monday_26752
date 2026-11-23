// npm install express cors
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample data (replace with your database)
let offices = [
  { id: 1, name: "JOYRA", officeNumber: "304" },
  { id: 2, name: "Finance", officeNumber: "101" },
  { id: 3, name: "Admissions", officeNumber: "205" },
];

// GET /api/offices?search=joy
// Find by office name OR office number. No search => return all offices.
app.get("/api/offices", (req, res) => {
  const search = (req.query.search || "").trim().toLowerCase();

  if (!search) return res.json(offices);

  const results = offices.filter(
    (o) =>
      o.name.toLowerCase().includes(search) ||
      String(o.officeNumber).toLowerCase().includes(search)
  );
  res.json(results);
});

// DELETE /api/offices/:id
app.delete("/api/offices/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = offices.some((o) => o.id === id);

  if (!exists) return res.status(404).json({ message: "Office not found" });

  offices = offices.filter((o) => o.id !== id);
  res.json({ message: "Office deleted" });
});

app.listen(5000, () => console.log("API running on http://localhost:5000"));
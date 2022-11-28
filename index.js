import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import { familyMembers } from "./routes/family-members.js";
import { items } from "./routes/items.js";
import { categories } from "./routes/categories.js";
import { families } from "./routes/families.js";
import cookieParser from "cookie-parser";

const app = express();

mongoose
  .connect("mongodb+srv://Varshaah:1234@cluster0.cl50hxc.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error("could not connect to MongoDB: ", err));

app.use(
  cors({
    origin: ["http://localhost:3001", "https://web.postman.co/"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/family-members", familyMembers);
app.use("/api/items", items);
app.use("/api/categories", categories);
app.use("/api/families", families);

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

app.get("/", (req, res) => {
  res.send("Househould Expenses");
});

// addFamId('6301484a2e02fc3afc5ff1c5', 'testId');

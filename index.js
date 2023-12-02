import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs", { currentPage: "/" });
});

app.get("/contactme", (req, res) => {
    res.render("index.ejs", { currentPage: "/contactme" });
});

app.post("/contactme", (req, res) => {
    const { name, email, subject, message } = req.body;
    res.render("index.ejs", {
        currentPage: "/contactme",
        name: name,
        email: email,
        subject: subject,
        message: message
    });
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

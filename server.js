import express from "express";
const app = express();
const port = 3000;

// Statisches Verzeichnis für Dateien bereitstellen
app.use(express.static("public"));

// Route für GET-Anfragen auf "/"
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

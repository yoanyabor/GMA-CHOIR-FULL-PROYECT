const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

// API middlewares
app.use(express.json()); // To accept JSON data
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// API ROUTES
app.get("/form", (req, res) => {
  console.log("Connected");
  res.send("API working");
});

app.get("/form", (req, res) => {
  res.sendFile(`${__dirname}/public/form.html`);
  res.send("Form data received and saved");
});

app.post("/formPost", (req, res) => {
  const newData = req.body;
  const filePath = "submissions.json";
  console.log(newData);

  // Read the existing file or start with an empty array if the file doesn't exist
  fs.readFile(filePath, (err, data) => {
    let jsonData = [];
    if (!err && data.length) {
      jsonData = JSON.parse(data);
    }

    // Add the new data
    jsonData.push(newData);

    // Write the updated array back to the file
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Error writing to file", writeErr);
        res.status(500).send("Error processing your request");
      } else {
        console.log("Data saved to file");
        res.send("Form data received and saved");
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

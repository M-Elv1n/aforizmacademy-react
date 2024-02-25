const express = require("express");
const path = require("path");
const app = express();

// Сервируем статические файлы из папки build
app.use(express.static(path.join(__dirname, "build")));

// Любой запрос, который не сопоставлен с файлом в папке build, будет перенаправлен на index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Слушаем порт 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

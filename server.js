const express = require("express");
const port = 8000;
const app = express();
cors = require("cors");
db = "jokesAPI"


app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));



require("./server/config/mongoose.config")(db);
require("./server/routes/jokes.routes")(app);
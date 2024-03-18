const app = require("./app.js");
const connectDB = require("./db/index.js");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

connectDB()
  .then(() =>
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is listening on ${process.env.PORT}`);
    })
  )
  .catch((err) => console.log(err));

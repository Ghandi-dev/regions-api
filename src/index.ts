import express from "express";
import bodyParser from "body-parser";
import router from "./routes/api";
import db from "./utils/database";
import docs from "./docs/route";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware";

const app = express();

app.use(cors());

const PORT = 3000;

app.use(bodyParser.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from back-end-acara!",
    data: null,
  });
});

docs(app);

app.use(errorMiddleware.serverRoute());
app.use(errorMiddleware.serverError());

async function init() {
  try {
    const result = await db();
    console.log("database status", result);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
export default app;

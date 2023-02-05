import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io";

const port = 8080;

const app = express();
const httpServer = app.listen(port, () =>
  console.log(`listening on PORT ${port}`)
);

const socketServer = new Server(httpServer);

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use("/", viewsRouter);

export const products = [];

socketServer.on("connection", (socket) => {
  console.log(`New client connected with id: ${socket.id}`);

  socket.on("newProduct", (prod) => {
    socketServer.emit("newProductAdded", prod);
  });
});

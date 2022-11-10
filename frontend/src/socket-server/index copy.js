import { Server } from "socket.io";

// const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
var http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = 4000;
// const AllRoute = require("../pages/router/index");
const bodyParser = require("body-parser");
// const { Server } = require("http");

const io2 = new Server(4000, {

});

io2.on('connection', (socket) => {
	console.log('소켓 연결 완료')
});

// const httpServer = http.createServer(app).listen(4000);
// 4000번 포트에서 서버를 오픈한다.

// const socketServer = io(httpServer, {
// 	cors: {
// 		origin: "*",
// 		methods: ["GET", "POST"]
// 	}
// });
app.use(bodyParser.json());
app.use(cors());
// app.use("/", AllRoute);

// socketServer.on('connect');
// io.on('connection', (socket) => {
// 	console.log('소켓 연결 완료')
// 	socket.on('test', (req) => {
// 		console.log(req);
// 	});

// 	socket.on('matchJoin', (gameSeq) => {
// 		console.log("join " + gameSeq);
// 		socket.join(gameSeq);
// 	})

// 	socket.on('matchInfoUpdate', (gameSeq, gameInfo) => {
// 		console.log("seq " + gameSeq);
// 		console.log("info " + gameInfo.score1);
// 	})

// 	socket.on('update',(gameSeq, matchInfo) => {
// 		console.log("seq " + gameSeq);
// 		console.log("info " + matchInfo.score1);
// 		io(http.createServer(app)).to(gameSeq).emit('update2', matchInfo);
// 	})
// });

// http.listen(port, () => {
// 	console.log(`express is running on ${port}`);
// });
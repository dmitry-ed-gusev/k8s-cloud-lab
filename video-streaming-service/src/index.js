//
// This code should use library 'express' version 5 (beta 3 on 09.09.2024)
//
const express = require("express");
const os = require("os");
const fs = require("fs");
const app = express();

//
// Throws an error if the PORT environment variable is missing.
//
if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

//
// useful constants for the application
//
const PORT = process.env.PORT;
const VERSION = 'ver. 1';
const MESSAGE = `<h1>Hello World! <i>(host: ${os.hostname()}, version: ${VERSION})</i></h1>`;

//
// Registers a HTTP GET handler for /nginx URI
//
app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)
})

//
// Registers a HTTP GET handler for /jsonplaceholder URI
//
app.get("/jsonplaceholder", async (req, res) => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(url);
    const body = await response.text();
    res.setHeader("Content-Type", "application/json");
    res.send(body);
});

//
// Registers a HTTP GET handler for / URI (root)
//
app.get("/", (req, res) => {
    console.log(MESSAGE)
    res.send(MESSAGE)
});

//
// Registers a HTTP GET route for video streaming URI
//
app.get("/video", async (req, res) => {
    const videoPath = "../videos/SampleVideo_1280x720_1mb.mp4";
    const stats = await fs.promises.stat(videoPath);

    res.writeHead(200, {
        "Content-Length": stats.size,
        "Content-Type": "video/mp4",
    });
    fs.createReadStream(videoPath).pipe(res);
});

//
// Starts the application (HTTP server) and listening to the specified port
//
app.listen(PORT, () => {
    console.log(`Microservice is listening on port ${PORT}, point your browser at http://localhost:${PORT}/video`);
})

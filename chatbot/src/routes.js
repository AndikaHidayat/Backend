const { chatHandler } = require("./handler")


const routes = [
    {
        method: "POST",
        path: "/chat",
        handler: chatHandler
    }
]

module.exports = routes
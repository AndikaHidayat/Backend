const chatHandler = require('./handlers/chathandler');

const routes = [
    {
        method: 'POST',
        path: '/chat',
        handler: chatHandler,
    },
];

module.exports = routes;

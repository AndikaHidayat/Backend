const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const loadModel = require('./services/loadmodel');
const chatHandler = require('./handlers/chathandler');
const InputError = require('./exceptions/inputerror');
require('dotenv').config();

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    // Memuat model AI saat server dimulai
    await loadModel().then(model => {
        server.app.model = model;
    }).catch(err => {
        console.error('Failed to load model:', err);
        process.exit(1);
    });

    server.route(routes);

    // Middleware untuk menangani kesalahan
    server.ext('onPreResponse', function (request, h) {
        const response = request.response;

        // Menangani InputError
        if (response instanceof InputError) {
            const newResponse = h.response({
                status: 'fail',
                message: `${response.message} Silakan coba lagi.`
            })
            newResponse.code(response.statusCode)
            return newResponse;
        }

        return h.continue;
    });

    // Menjalankan server
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

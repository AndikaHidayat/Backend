const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/inputerror');

const chatHandler = async (request, h) => {
    const userInput = request.payload.message;

    try {
        // Memproses input pengguna menggunakan model AI
        const model = request.server.app.model;
        const result = await predictClassification(model, userInput);

        // Mengembalikan respon kepada pengguna
        return result;
    } catch (error) {
        throw new InputError(`Gagal memproses permintaan: ${error.message}`);
    }
};

// Fungsi untuk memprediksi klasifikasi input pengguna
const predictClassification = async (model, userInput) => {
    // Placeholder untuk logika prediksi
    // Anda dapat mengubah atau menambahkan logika prediksi yang sesuai dengan aplikasi Anda
    const aiResponse = {
        message: `Anda berkata: "${userInput}". Saya adalah asisten kesehatan virtual berbasis AI. Bagaimana saya bisa membantu Anda hari ini?`
    };

    return aiResponse;
};

module.exports = chatHandler;

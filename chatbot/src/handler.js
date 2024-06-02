
const chatHandler = (request, h) => {
    const { message } = request.payload;

    // Logika fungsi chatbot
    let responseMessage;
    if (message.toLowerCase().includes('badan panas') || message.toLowerCase().includes('batuk pilek')) {
        responseMessage = 'Anda mungkin mengalami flu. Disarankan untuk istirahat yang cukup.';
    } else if (message.toLowerCase().includes('sakit kepala') || message.toLowerCase().includes('pusing')) {
        responseMessage = 'Anda mungkin mengalami vertigo. Disarankan untuk ke dokter';
    } else if (message.toLowerCase().includes('perut') || message.toLowerCase().includes('diare')) {
        responseMessage = 'Anda mungkin mengalami gangguan pencernaan. Disarankan untuk menjaga pola makan';
    } else {
        responseMessage = 'Maaf, saya tidak dapat mendiagnosis gejala Anda. silahkan masukan gejala medis seperti "badan panas ; sakit kepala ; batuk pilek ; pusing ; diare';
    }


    return h.response({ reply: responseMessage }).code(200);
};

module.exports = {
    chatHandler
};
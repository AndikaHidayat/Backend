const { Firestore } = require('@google-cloud/firestore');

// Fungsi untuk menyimpan data konsultasi pengguna ke Firestore
async function storeConsultationData(userId, consultationData) {
    try {
        // Membuat koneksi ke Firestore
        const db = new Firestore({
            // Konfigurasi Firestore
            // Misalnya, jika menggunakan ID proyek Firestore dari Google Cloud
            projectId: 'your-project-id', // Ganti dengan ID proyek Firestore Anda
        });

        // Mendapatkan koleksi 'consultations'
        const consultationsCollection = db.collection('consultations');

        // Menyimpan data konsultasi ke dalam dokumen dengan ID pengguna
        await consultationsCollection.doc(userId).set(consultationData);

        console.log(`Data konsultasi berhasil disimpan untuk pengguna dengan ID: ${userId}`);
    } catch (error) {
        console.error('Gagal menyimpan data konsultasi:', error);
        throw error; // Melempar error ke handler yang memanggil fungsi ini
    }
}

module.exports = storeConsultationData;

const requestResponse = {
  gagal: (pesan) => {
    return{
      sukses: false,
      pesan: pesan
    }
  },
  sukses: (pesan) => {
    return{
      sukses: true,
      pesan: pesan
    }
  },
  serverError: {
    sukses: false,
    pesan: 'Terjadi Kesalahan di server'
  },
  sukseslogin: (data) => {
    return {
      sukses: true,
      pesan: 'berhasil login',
      data: data
    }
  },
  sukseswithdata: (data) => {
    return{
      sukses: true,
      pesan: 'Berhasil Memnat Data',
      data: data
    }
  }
}

module.exports = { requestResponse }
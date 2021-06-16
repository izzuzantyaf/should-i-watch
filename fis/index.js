const defuzzifikasi = require('./defuzzifikasi')
const { fk_pengahargaan, fk_penonton, fk_rating } = require('./fungsi-keanggotaan')
const fuzzifikasi = require('./fuzzifikasi')
const inferensi = require('./inferensi')

const fuzzy = (crisp_rating = 0, crisp_penonton = 0, crisp_penghargaan = 0) => {

  if (crisp_rating <= 0 || crisp_penonton <= 0 || crisp_penghargaan <= 0)
    return 0

  // fuzzifikasi
  const fuzzy_rating = fuzzifikasi(crisp_rating, fk_rating)
  const fuzzy_penonton = fuzzifikasi(crisp_penonton, fk_penonton)
  const fuzzy_penghargaan = fuzzifikasi(crisp_penghargaan, fk_pengahargaan)

  // inferensi
  const output_inferensi = inferensi(fuzzy_rating, fuzzy_penonton, fuzzy_penghargaan)

  // defuzzifikasi
  const hasil_crisp = defuzzifikasi(output_inferensi)

  return hasil_crisp
}

module.exports = fuzzy
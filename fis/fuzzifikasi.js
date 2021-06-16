const fuzzifikasi = (input = 0, fungsi_keanggotaan) => {
  let nilai_fuzzy = {}
  for (const key in fungsi_keanggotaan) {
    nilai_fuzzy = { ...nilai_fuzzy, ...fungsi_keanggotaan[key](input) }
  }
  console.log(nilai_fuzzy)
  return nilai_fuzzy
}

module.exports = fuzzifikasi
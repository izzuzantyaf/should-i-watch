const defuzzifikasi = ({ 'tidak sukses': tidak_sukses, sukses }) => {
  let hasil_crisp = 0

  if (tidak_sukses !== 0 && sukses !== 0) hasil_crisp = (tidak_sukses * (5 + 10 + 15 + 20 + 25 + 30 + 35 + 40 + 45 + 50) + sukses * (70 + 73 + 76 + 79 + 82 + 85 + 88 + 91 + 94 + 97)) / (tidak_sukses * 10 + sukses * 10)

  else if (tidak_sukses !== 0) hasil_crisp = (tidak_sukses * (2.5 + 5 + 7.5 + 10 + 12.5 + 15 + 17.5 + 20 + 22.5 + 25 + 27.5 + 30 + 32.5 + 35 + 37.5 + 40 + 42.5 + 45 + 47.5 + 50)) / (tidak_sukses * 20)

  else hasil_crisp = (sukses * (71.5 + 73 + 74.5 + 76 + 77.7 + 79 + 80.5 + 82 + 83.5 + 85 + 86.5 + 88 + 89.5 + 91 + 92.5 + 94 + 95.5 + 97 + 98.5 + 100)) / (sukses * 20)

  console.log(hasil_crisp)
  return hasil_crisp.toPrecision(4)
}
module.exports = defuzzifikasi
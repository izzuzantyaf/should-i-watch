const fk_rating = {
  buruk(rating) {
    let nf_buruk = 0
    if (rating > 0 && rating <= 5) nf_buruk = 1
    else if (rating > 5 && rating < 6) nf_buruk = (6 - rating) / (6 - 5)
    else nf_buruk = 0
    return { buruk: nf_buruk }
  },
  sedang(rating) {
    let nf_sedang = 0
    if (rating > 0 && rating <= 5) nf_sedang = 0
    else if (rating > 5 && rating < 6) nf_sedang = (rating - 5) / (6 - 5)
    else if (rating >= 6 && rating <= 7) nf_sedang = 1
    else if (rating > 7 && rating < 8) nf_sedang = (8 - rating) / (8 - 7)
    else nf_sedang = 0
    return { sedang: nf_sedang }
  },
  baik(rating) {
    let nf_baik = 0
    if (rating > 0 && rating <= 7) nf_baik = 0
    else if (rating > 7 && rating < 8) nf_baik = (rating - 7) / (8 - 7)
    else if (rating >= 8) nf_baik = 1
    return { baik: nf_baik }
  }
}

const fk_penonton = {
  sedikit(penonton) {
    let nf_penonton = 0
    if (penonton > 0 && penonton <= 0.5) nf_penonton = 1
    else if (penonton > 0.5 && penonton < 0.8) nf_penonton = (0.8 - penonton) / (0.8 - 0.5)
    else nf_penonton = 0
    return { sedikit: nf_penonton }
  },
  sedang(penonton) {
    let nf_sedang = 0
    if (penonton > 0 && penonton <= 0.6) nf_sedang = 0
    else if (penonton > 0.6 && penonton < 0.8) nf_sedang = (penonton - 0.6) / (0.8 - 0.6)
    else if (penonton == 0.8) nf_sedang = 1
    else if (penonton > 0.8 && penonton < 1.2) nf_sedang = (1.2 - penonton) / (1.2 - 0.8)
    else nf_sedang = 0
    return { sedang: nf_sedang }
  },
  banyak(penonton) {
    let nf_banyak = 0
    if (penonton > 0 && penonton <= 0.9) nf_banyak = 0
    else if (penonton > 0.9 && penonton < 1.2) nf_banyak = (penonton - 0.9) / (1.2 - 0.9)
    else if (penonton >= 1.2) nf_banyak = 1
    return { banyak: nf_banyak }
  }
}

const fk_pengahargaan = {
  sedikit(penghargaan) {
    let nf_sedikit = 0
    if (penghargaan > 0 && penghargaan <= 1) nf_sedikit = 1
    else if (penghargaan > 1 && penghargaan < 2) nf_sedikit = (2 - penghargaan) / (2 - 1)
    else nf_sedikit = 0
    return { sedikit: nf_sedikit }
  },
  sedang(penghargaan) {
    let nf_sedang = 0
    if (penghargaan > 0 && penghargaan <= 1) nf_sedang = 0
    else if (penghargaan > 1 && penghargaan < 3) nf_sedang = (penghargaan - 1) / (3 - 1)
    else if (penghargaan >= 3 && penghargaan <= 4) nf_sedang = 1
    else if (penghargaan > 4 && penghargaan < 6) nf_sedang = (6 - penghargaan) / (6 - 4)
    else nf_sedang = 0
    return { sedang: nf_sedang }
  },
  banyak(penghargaan) {
    let nf_banyak = 0
    if (penghargaan > 0 && penghargaan <= 5) nf_banyak = 0
    else if (penghargaan > 5 && penghargaan < 7) nf_banyak = (penghargaan - 5) / (7 - 5)
    else if (penghargaan >= 7) nf_banyak = 1
    return { banyak: nf_banyak }
  }
}

module.exports = { fk_rating, fk_penonton, fk_pengahargaan }
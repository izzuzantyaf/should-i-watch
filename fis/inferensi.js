const rules = require('./rules')

const pasangkan_terms = (fuzzy_rating, fuzzy_penonton, fuzzy_penghargaan) => {
  const array_pasangan_terms = []
  for (const terms_rating in fuzzy_rating) {
    if (fuzzy_rating[terms_rating] !== 0)
      for (const terms_penonton in fuzzy_penonton) {
        if (fuzzy_penonton[terms_penonton] !== 0)
          for (const terms_penghargaan in fuzzy_penghargaan) {
            if (fuzzy_penghargaan[terms_penghargaan] !== 0) {
              const pasangan_terms = {}
              pasangan_terms['rating_' + terms_rating] = fuzzy_rating[terms_rating]
              pasangan_terms['penonton_' + terms_penonton] = fuzzy_penonton[terms_penonton]
              pasangan_terms['penghargaan_' + terms_penghargaan] = fuzzy_penghargaan[terms_penghargaan]
              console.log(pasangan_terms)
              array_pasangan_terms.push(pasangan_terms)
            }
          }
      }
  }
  return array_pasangan_terms
}

const inferensi = (fuzzy_rating, fuzzy_penonton, fuzzy_penghargaan) => {
  const output_inferensi = {
    'tidak sukses': [0],
    sukses: [0],
  }

  const array_pasangan_terms = pasangkan_terms(fuzzy_rating, fuzzy_penonton, fuzzy_penghargaan)
  array_pasangan_terms.forEach(pasangan_terms => {
    const terms = []
    for (const key in pasangan_terms) {
      terms.push(key.split('_')[1])
    }
    const key = terms.join(' ')
    const fuzzy_output = rules[key](pasangan_terms)
    console.log(fuzzy_output)
    if (fuzzy_output.hasOwnProperty('sukses')) output_inferensi['sukses'].push(fuzzy_output['sukses'])
    if (fuzzy_output.hasOwnProperty('tidak_sukses')) output_inferensi['tidak sukses'].push(fuzzy_output['tidak_sukses'])
  })
  console.log(output_inferensi)

  output_inferensi['tidak sukses'] = Math.max(...output_inferensi['tidak sukses'])
  output_inferensi['sukses'] = Math.max(...output_inferensi['sukses'])

  console.log(output_inferensi)
  return output_inferensi
}

module.exports = inferensi
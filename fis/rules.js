const rules = {
  'buruk sedikit sedikit': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'buruk sedikit sedang': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'buruk sedikit banyak': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },

  'buruk sedang sedikit': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'buruk sedang sedang': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'buruk sedang banyak': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },

  'buruk banyak sedikit': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'buruk banyak sedang': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'buruk banyak banyak': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },


  'sedang sedikit sedikit': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'sedang sedikit sedang': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'sedang sedikit banyak': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },

  'sedang sedang sedikit': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'sedang sedang sedang': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },
  'sedang sedang banyak': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },

  'sedang banyak sedikit': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },
  'sedang banyak sedang': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },
  'sedang banyak banyak': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },


  'baik sedikit sedikit': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'baik sedikit sedang': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'baik sedikit banyak': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },

  'baik sedang sedikit': (pasangan_terms) => { return { tidak_sukses: Math.min(...Object.values(pasangan_terms)) } },
  'baik sedang sedang': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },
  'baik sedang banyak': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },

  'baik banyak sedikit': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },
  'baik banyak sedang': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },
  'baik banyak banyak': (pasangan_terms) => { return { sukses: Math.min(...Object.values(pasangan_terms)) } },
}

module.exports = rules
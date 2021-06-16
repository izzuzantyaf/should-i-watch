import Head from 'next/head'
import { useState } from 'react'
const fuzzy = require('../fis/')

export default function Home() {

  const [crispOutput, setCrispOutput] = useState(0)

  const hitungCrispOutput = () => {
    const crispRating = document.querySelector('input#rating').value
    const crispPenonton = document.querySelector('input#viewers').value
    const crispPenghargaan = document.querySelector('input#awards').value
    setCrispOutput(() => fuzzy(crispRating, crispPenonton, crispPenghargaan))
  }

  return (
    <section className="homepage px-6">
      <Head>
        <title>Should I Watch</title>
        <meta name="description" content="Should I Watch" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container max-w-5xl mx-auto">
        <h1 className="font-black text-4xl mt-8">Should I Watch</h1>
        <div className="flex flex-col space-y-2 mt-4">
          <div>Rating:</div>
          <input type="number" className="border rounded-md px-2 py-1" id="rating" placeholder="Rating" min="0" defaultValue="0" onChange={hitungCrispOutput} />
          <div>Penonton (juta):</div>
          <input type="number" className="border rounded-md px-2 py-1" id="viewers" placeholder="Viewers" min="0" defaultValue="0" onChange={hitungCrispOutput} />
          <div>Penghargaan:</div>
          <input type="number" className="border rounded-md px-2 py-1" id="awards" placeholder="Awards" min="0" defaultValue="0" onChange={hitungCrispOutput} />
          <div className="font-extrabold text-7xl self-center">{crispOutput}</div>
        </div>
      </div>
    </section>
  )
}

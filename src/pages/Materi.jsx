import React from 'react'

import Timbangan from '../components/Timbangan'
export default function Materi() {
  return (
    <div className="prose max-w-none bg-white p-6 rounded-xl shadow">
      <h2>Pertidaksamaan Linear Satu Variabel</h2>
      <p>Pertidaksamaan linear satu variabel adalah bentuk pertidaksamaan yang hanya memiliki satu variabel berpangkat satu.</p>
      <p>Contoh: <strong>2x + 3 &lt; 7</strong></p>
      <p>Langkah-langkah menyelesaikan pertidaksamaan:</p>
      <ol>
        <li>Pindahkan semua variabel ke satu sisi</li>
        <li>Pindahkan konstanta ke sisi lain</li>
        <li>Selesaikan operasi aljabar</li>
      </ol>
      <Timbangan />
    </div>
  )
}

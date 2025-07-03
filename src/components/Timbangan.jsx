import React, { useState } from 'react'

export default function Timbangan() {
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Simulasi Timbangan Pertidaksamaan</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-4">
        <textarea
          value={left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder="Isi sisi kiri (contoh: 2x + 3)"
          className="w-full md:w-1/3 h-28 border p-2 rounded text-center"
        />
        <div className="text-4xl font-bold text-gray-600">≶</div>
        <textarea
          value={right}
          onChange={(e) => setRight(e.target.value)}
          placeholder="Isi sisi kanan (contoh: 7)"
          className="w-full md:w-1/3 h-28 border p-2 rounded text-center"
        />
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg font-medium">Tampilan Timbangan</p>
        <div className="relative w-full h-32 mt-4 flex justify-center items-center">
          <div className="absolute w-64 h-2 bg-gray-500 top-16"></div>
          <div className="w-28 h-20 bg-blue-100 border rounded p-2 flex items-center justify-center text-center">
            {left || 'Kiri'}
          </div>
          <div className="w-8 h-8 bg-gray-500 rotate-45 mx-4"></div>
          <div className="w-28 h-20 bg-red-100 border rounded p-2 flex items-center justify-center text-center">
            {right || 'Kanan'}
          </div>
        </div>
      </div>
    </div>
  )
}

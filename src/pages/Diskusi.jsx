import React from 'react'

export default function Diskusi() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Materi Diskusi</h2>
        <p>Pertidaksamaan linear digunakan untuk menyatakan hubungan yang tidak setara, seperti lebih dari (&gt;), kurang dari (&lt;), dan seterusnya.</p>
        <p>Contoh soal: <strong>3x - 5 &gt; 1</strong>. Bagaimana menyelesaikannya?</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">Diskusi</h2>
        <textarea className="w-full h-[300px] border p-2 rounded" placeholder="Tulis pendapat atau tanya di sini..."></textarea>
      </div>
    </div>
  )
}

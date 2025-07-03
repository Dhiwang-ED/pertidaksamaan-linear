import React, { useState } from 'react';
import 'mathlive';
import '../../node_modules/mathlive/dist/mathlive-static.css';

const levels = {
  1: [
    'x + 3 < 7', 'x - 5 > 2', '2x < 10', '3x + 1 ≥ 4', '5x ≤ 15',
    'x + 8 > 12', 'x - 6 < 3', '4x ≥ 20', '2x + 3 < 9', 'x - 1 > 0',
    'x + 5 ≤ 10', '6x ≥ 18', 'x + 2 < 7', 'x - 3 ≥ 1', 'x + 4 > 9'
  ],
  2: [
    '2x + 3 > 9', '3x - 4 < 8', '4x + 5 ≥ 17', '5x - 2 ≤ 18', '6x + 1 > 13',
    '2x - 7 < 3', 'x/2 + 4 ≥ 10', '3x + 2 ≤ 11', 'x - 3 > 2', '2x/3 + 1 < 5',
    'x/4 - 2 ≥ 1', '3(x + 2) ≤ 15', '4(x - 1) ≥ 12', 'x + 3 < x + 7', 'x/3 + 2x/5 > 4'
  ],
  3: [
    '2(x + 1) > x + 5', '3x - 2(x - 1) < 4', '4(x - 2) + 3 ≥ 2x + 5',
    '5(x + 1) ≤ 3x + 7', 'x/2 + x/3 < 5', '(x - 2)/4 ≥ (x + 1)/6',
    '2(x - 3) + 4 < 3x - 1', '3(x + 2) - 4 > 2x + 5', 'x - 1 ≤ (2x + 3)/2',
    'x/5 + 2x/3 > 4', '3(x - 2) + 2 ≤ 2(x + 1)', '2x - (x + 3) ≥ 1',
    '4(x - 1) + 2x < 3x + 10', '(2x + 1)/3 > (x - 2)/2', 'x - (x - 4)/2 ≤ 6'
  ]
};

export default function Latihan() {
  const [level, setLevel] = useState('1');

  return (
    <div className="space-y-4">
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="p-2 border rounded bg-white"
      >
        <option value="1">Level 1 (Dasar)</option>
        <option value="2">Level 2 (Menengah)</option>
        <option value="3">Level 3 (Lanjutan)</option>
      </select>

      {levels[level].map((soal, index) => (
        <div key={index} className="bg-white rounded-xl shadow p-4 grid md:grid-cols-2 gap-4">
          <div className="font-medium text-lg">Soal {index + 1}: Selesaikan {soal}</div>
          <div className="border rounded p-2 bg-gray-50 min-h-[80px]">
            <math-field virtual-keyboard-mode="manual" style={{ width: '100%' }}></math-field>
          </div>
        </div>
      ))}
    </div>
  );
}

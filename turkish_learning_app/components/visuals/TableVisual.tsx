import React from 'react';
import { TableData } from '../../types/grammar';

interface TableVisualProps {
  data?: TableData;
  title: string;
  description?: string;
}

export default function TableVisual({ data, title, description }: TableVisualProps) {
  if (!data) {
    return (
      <div className="p-4 border rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        <p className="mt-4 text-sm text-amber-600">Table data not provided</p>
      </div>
    );
  }

  const { headers, rows, caption, footnote } = data;

  return (
    <div className="overflow-x-auto">
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      {description && <p className="mt-1 mb-4 text-sm text-gray-500">{description}</p>}
      
      <table className="min-w-full divide-y divide-gray-300 border-collapse border border-gray-300">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index}
                scope="col"
                className="px-3 py-3.5 text-sm font-semibold text-gray-900 bg-gray-100 border border-gray-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, cellIndex) => {
                // Handle both string cells and complex cell objects
                const content = typeof cell === 'string' ? cell : cell.text;
                const highlight = typeof cell === 'string' ? false : cell.highlight;
                
                return (
                  <td 
                    key={cellIndex}
                    className={`px-3 py-3 text-sm text-gray-500 border border-gray-300 ${
                      highlight ? 'bg-yellow-100 font-medium' : ''
                    }`}
                  >
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      
      {caption && (
        <p className="mt-2 text-sm text-center text-gray-500 italic">{caption}</p>
      )}
      
      {footnote && (
        <p className="mt-3 text-xs text-gray-500">{footnote}</p>
      )}
    </div>
  );
}

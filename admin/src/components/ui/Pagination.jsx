import React from 'react'

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg bg-dark-200">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="border-b border-gray-700 px-4 py-2 text-left text-xs uppercase text-gray-400"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-dark-300">
              {columns.map((col) => (
                <td key={col.accessor} className="border-b border-gray-700 px-4 py-2 text-gray-200">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

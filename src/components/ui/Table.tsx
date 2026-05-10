import React from 'react';

interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

const Table = ({ headers, children }: TableProps) => {
  return (
    <div className="table-container">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="table-header">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="hover:bg-slate-50/50 transition-colors duration-300">
    {children}
  </tr>
);

export const TableCell = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <td className={`table-cell ${className}`}>
    {children}
  </td>
);

export default Table;

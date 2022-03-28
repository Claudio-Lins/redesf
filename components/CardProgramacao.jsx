import React from 'react';

export function CardProgramacao() {
  return (
    <div className="flex divide-x max-w-xs h-auto rounded-md overflow-hidden border shadow">
      <div className="w-1/3 flex justify-center items-center bg-red-200">
        IMG
      </div>
      <div className="w-2/3">
        <div className="w-full p-1 text-center font-bold border-b">
          07:00 as 08:00
        </div>
        <div className="w-full text-center py-1 px-2 leading-tight h-20 flex justify-center items-center">
          Os trapalhões e as minas do Rei Salomão
        </div>
      </div>
    </div>
  );
}

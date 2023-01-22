import { Attack } from "@/interfaces/pokemon-interface";
import React from "react";
import tw from "tailwind-styled-components";

export default function AttackCard({
  attacks,
  title,
}: {
  attacks: Attack[];
  title: string;
}) {
  return (
    <div className="mt-3">
      <Header>{title}</Header>

      <table className="table-fixed border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
        <thead className="bg-slate-50 dark:bg-slate-700">
          <tr>
            <RowHeader>Name</RowHeader>
            <RowHeader>Type</RowHeader>
            <RowHeader>Damage</RowHeader>
          </tr>
        </thead>
        <tbody>
          {attacks.map((item) => (
            <tr key={item.name}>
              <RowCol>{item.name}</RowCol>
              <RowCol>{item.type}</RowCol>
              <RowCol>{item.damage}</RowCol>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Header = tw.h2`
    text-green-600 font-bold text-xl
`;

const RowHeader = tw.td`
w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-1 text-slate-900 dark:text-slate-200 text-left
`;

const RowCol = tw.td`
border border-slate-300 dark:border-slate-700 p-1 text-slate-500 dark:text-slate-400
`;

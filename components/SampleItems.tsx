import Link from "next/link";
import React from "react";

const items = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"];

export default function SampleItems() {
  return (
    <div className="my-8">
      {items.map((item) => (
        <Link
          href={{
            pathname: "/",
            query: { name: item },
          }}
          key={item}
          className="mr-3 underline underline-offset-8 font-medium text-blue-600"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

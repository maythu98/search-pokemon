import React from "react";

interface TagListInterface {
  title: string;
  items: string[];
  bg: string;
}

export default function TagList({ title, items, bg }: TagListInterface) {
  return (
    <div>
      <h3 className="text-2xl my-2">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item}
            data-testid={`${title.toLowerCase()}-${item}`}
            className={`py-2 px-3 ${bg} text-white text-sm font-semibold rounded-md shadow`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

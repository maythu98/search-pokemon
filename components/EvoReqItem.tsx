import React from "react";

export default function EvoReqItem({
  title,
  desc,
}: {
  title: string;
  desc: string | number;
}) {
  return (
    <div>
      <h1>{title}</h1>
      <span className="font-medium">{desc}</span>
    </div>
  );
}

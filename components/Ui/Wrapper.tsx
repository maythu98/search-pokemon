import { NodeChildInterface } from "@/interfaces/generics";
import React from "react";

export default function Wrapper({ children }: NodeChildInterface) {
  return <div className="flex flex-col container mx-auto p-4">{children}</div>;
}

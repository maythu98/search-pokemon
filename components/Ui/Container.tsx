import { NodeChildInterface } from "@/interfaces/generics";
import React from "react";

export default function Container({ children }: NodeChildInterface) {
  return <div className="flex flex-col container mx-auto">{children}</div>;
}

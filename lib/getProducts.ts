import fs from "fs";
import path from "path";

export interface Machine {
  name: string;
  count: number;
}

export interface MachineDetail {
  name: string;
  count: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  code?: string;
  images: {
    cover: string;
    primary: string;
    secondary: string;
  };
  capacity: {
    daily: string;
  };
  machines: Machine[];
  machineDetails?: {
    title: string;
    items: MachineDetail[];
  };
  description: {
    short: string;
    long: string;
  };
}


export function getProducts(): Product[] {
  const filePath = path.join(process.cwd(), "public", "products.json");
  const json = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(json);
}

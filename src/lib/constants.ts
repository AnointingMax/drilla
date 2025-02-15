import { Equipment1, Equipment2, Equipment3, Equipment4, Operator1, Operator2, Operator3, Operator4, Operator5, Operator6, Operator7, Operator8 } from "@/assets";

export const MAX_FILE_SIZE = 10 * 1024 * 1024;
export const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp", "application/pdf"];

export const OPERATORS = [
   { name: "Site Operators", image: Operator1 },
   { name: "Forklift Drivers", image: Operator2 },
   { name: "Dump Truck Drivers", image: Operator3 },
   { name: "Crane Drivers", image: Operator4 },
   { name: "Excavator Operators", image: Operator5 },
   { name: "Loaders", image: Operator6 },
   { name: "Technicians", image: Operator7 },
   { name: "Truck Drivers", image: Operator8 },
]

export const EQUIPMENT = [
   { name: "Excavator", image: Equipment1 },
   { name: "Tractor", image: Equipment2 },
   { name: "Dump Truck", image: Equipment3 },
   { name: "Crane", image: Equipment4 },
]
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const fakeVehicles = [
  {
    company_id: 1,
    placa: "ABC123",
    brand: "Toyota",
    model: "Corolla",
    name: "Juan Perez",
    phone: "123456789",
    email: "juan.perez@example.com",
  },
  {
    company_id: 1,
    placa: "XYZ789",
    brand: "Honda",
    model: "Civic",
    name: "Maria Gomez",
    phone: "987654321",
    email: "maria.gomez@example.com",
  },
  {
    company_id: 1,
    placa: "DEF456",
    brand: "Ford",
    model: "Focus",
    name: "Carlos Ruiz",
    phone: "555666777",
    email: "carlos.ruiz@example.com",
  },
  {
    company_id: 1,
    placa: "GHI012",
    brand: "Chevrolet",
    model: "Malibu",
    name: "Ana Martinez",
    phone: "444555666",
    email: "ana.martinez@example.com",
  },
  {
    company_id: 1,
    placa: "JKL345",
    brand: "Nissan",
    model: "Sentra",
    name: "Luis Hernandez",
    phone: "333444555",
    email: "luis.hernandez@example.com",
  },
];

export default async function Vehicles() {
  const [vehicles, setVehicles] = useState(fakeVehicles);
  return (
    <div className="p-6">
      <div className="flex gap-4">
        <h1 className="grow text-2xl font-bold ">Vehículos</h1>
        <Button>Crear Vehiculo</Button>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Placa</TableHead>
            <TableHead>Marca</TableHead>
            <TableHead>Modelo</TableHead>
            <TableHead>Propietario</TableHead>
            <TableHead>Telefono</TableHead>
            <TableHead>Correo</TableHead>
            <TableHead className="text-right">Editar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map(({placa, brand, model, name, phone, email}) => (
          <TableRow key={placa}>
            <TableCell className="font-medium">{placa}</TableCell>
            <TableCell>{brand}</TableCell>
            <TableCell>{model}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  );
}

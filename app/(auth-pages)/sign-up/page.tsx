import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default function Signup({ searchParams }: { searchParams: Message }) {
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Registrarse</h1>
        <p className="text-sm text text-foreground">
          Ya tienes una cuenta?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Inicia sesion
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="id">Identificación</Label>
          <Input name="id" type="number" placeholder="Cedula o nit" required />
          <Label htmlFor="companyName">Nombre de la empresa</Label>
          <Input name="companyName" type="string" placeholder="tu compañia" required />
          <Label htmlFor="adminName">Nombre del administrador</Label>
          <Input name="adminName" placeholder="Tu nombre" required />
          <Label htmlFor="email">Correo</Label>
          <Input name="email" placeholder="you@ejemplo.com" required />
          <Label htmlFor="phone">Telefono</Label>
          <Input name="phone" type="number" placeholder="Tu telefono" required />
          <Label htmlFor="address">Direccion</Label>
          <Input name="address" placeholder="Tu ubicación" required />
          <Label htmlFor="password">Contraseña</Label>
          
          <Input
            type="password"
            name="password"
            placeholder="tu contraseña"
            minLength={6}
            required
          />
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Registrarse
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      <SmtpMessage />
    </>
  );
}

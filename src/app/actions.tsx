"use server"
import { Toaster, toast } from "sonner";

export async function sendMessage(formData: FormData) {
  const nombre = formData.get("nombre");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!nombre || !email || !message) {
    () => {
      toast("Para enviarnos un mensaje por favor complete todos los campos");
    };
  }
  <Toaster />;

  console.log({ nombre, email, message });
}

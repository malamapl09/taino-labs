"use server";

import { z } from "zod";
import { getResend } from "@/lib/email/resend";

const contactSchema = z.object({
  nombre: z.string().min(1).max(100),
  empresa: z.string().max(100).optional().default(""),
  email: z.string().email().max(100),
  telefono: z.string().max(30).optional().default(""),
  tipo: z.string().min(1).max(100),
  descripcion: z.string().min(1).max(1000),
  presupuesto: z.string().max(100).optional().default(""),
});

export async function submitContactForm(formData: FormData) {
  const parsed = contactSchema.safeParse({
    nombre: formData.get("nombre"),
    empresa: formData.get("empresa"),
    email: formData.get("email"),
    telefono: formData.get("telefono"),
    tipo: formData.get("tipo"),
    descripcion: formData.get("descripcion"),
    presupuesto: formData.get("presupuesto"),
  });

  if (!parsed.success) {
    return { error: "Datos inválidos. Verifica el formulario." };
  }

  const { nombre, empresa, email, telefono, tipo, descripcion, presupuesto } =
    parsed.data;

  const fecha = new Date().toLocaleString("es-DO", {
    timeZone: "America/Santo_Domingo",
  });

  const to = (process.env.CONTACT_EMAIL || "tu@email.com")
    .split(",")
    .map((e) => e.trim());

  try {
    const resend = getResend();

    await resend.emails.send({
      from: "Taíno Labs <noreply@tainolabs.com>",
      to,
      replyTo: email,
      subject: `[Taíno Labs] Nueva solicitud de ${nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111110;">
          <h2 style="font-size: 20px; margin-bottom: 24px; border-bottom: 2px solid #B8933A; padding-bottom: 12px;">
            Nueva solicitud — Taíno Labs
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 12px; color: #888880; width: 120px; vertical-align: top;">Nombre</td>
              <td style="padding: 8px 12px;">${nombre}</td>
            </tr>
            <tr style="background: #F8F7F4;">
              <td style="padding: 8px 12px; color: #888880; vertical-align: top;">Empresa</td>
              <td style="padding: 8px 12px;">${empresa || "No indicada"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; color: #888880; vertical-align: top;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${email}" style="color: #B8933A;">${email}</a></td>
            </tr>
            <tr style="background: #F8F7F4;">
              <td style="padding: 8px 12px; color: #888880; vertical-align: top;">Teléfono</td>
              <td style="padding: 8px 12px;">${telefono || "No indicado"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; color: #888880; vertical-align: top;">Tipo</td>
              <td style="padding: 8px 12px;">${tipo}</td>
            </tr>
            <tr style="background: #F8F7F4;">
              <td style="padding: 8px 12px; color: #888880; vertical-align: top;">Presupuesto</td>
              <td style="padding: 8px 12px;">${presupuesto || "No indicado"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #F8F7F4; border-left: 3px solid #B8933A;">
            <p style="margin: 0 0 4px; font-size: 12px; color: #888880; text-transform: uppercase; letter-spacing: 0.1em;">Descripción</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${descripcion}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #888880;">
            Fecha: ${fecha}
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch {
    return { error: "Error al enviar. Intenta de nuevo." };
  }
}

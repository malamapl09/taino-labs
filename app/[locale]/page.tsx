import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { FreeBanner } from "@/components/free-banner";
import { Possibilities } from "@/components/possibilities";
import { Trust } from "@/components/trust";
import { Process } from "@/components/process";
import { Payment } from "@/components/payment";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <Hero />
      <FreeBanner />
      <Possibilities />
      <Trust />
      <Process />
      <Payment />
      <ContactForm />
      <Footer />
    </>
  );
}

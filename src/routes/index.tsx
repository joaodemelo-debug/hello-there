import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { JustMinimalLogo } from "@/components/logo";

const WHATSAPP_URL = "https://chat.whatsapp.com/CnEffGahKia2F0Y2F2mE6i?mode=gi_t";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Just Minimal — Comunidade" },
      {
        name: "description",
        content:
          "Get early access when the store opens + 10% off in all products. Join the Just Minimal community on WhatsApp.",
      },
      { property: "og:title", content: "Just Minimal — Comunidade" },
      {
        property: "og:description",
        content:
          "Acesso antecipado a novos lançamentos, informações exclusivas, descontos e muito mais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

export function CommunityPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      {/* hairline frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 border border-border/70 sm:inset-7"
      />
      {/* soft vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, color-mix(in oklab, var(--color-accent) 70%, transparent), transparent 60%)",
        }}
      />

      <header className="relative flex items-center justify-between px-8 pt-9 sm:px-14 sm:pt-12">
        <span className="text-[11px] uppercase tracking-[0.42em] [text-indent:0.42em] text-muted-foreground">
          MMXXVI
        </span>
        <span className="text-[11px] uppercase tracking-[0.42em] [text-indent:0.42em] text-muted-foreground">
          Comunidade
        </span>
      </header>

      <main className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-7 py-12 text-center sm:px-10 sm:py-16">
        <JustMinimalLogo className="rise" />

        <p className="rise mt-12 text-[11px] uppercase tracking-[0.42em] [text-indent:0.42em] text-muted-foreground [animation-delay:120ms] sm:mt-16">
          Antes da loja abrir
        </p>

        <h1 className="rise mt-5 max-w-3xl font-display text-[44px] leading-[1.05] tracking-[-0.01em] sm:text-[70px] [animation-delay:200ms]">
          Get early access when the store opens
          <span className="mt-2 block italic text-primary/90">
            + 10% off in all products
          </span>
        </h1>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rise group mt-11 inline-flex items-center gap-3 bg-primary px-10 py-5 font-sans text-[13px] font-medium uppercase tracking-[0.26em] [text-indent:0.26em] text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [animation-delay:280ms]"
        >
          Entrar na comunidade
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <p className="rise mt-5 text-[12px] tracking-[0.12em] text-muted-foreground [animation-delay:340ms]">
          Abre no grupo de WhatsApp da Just Minimal
        </p>

        <div className="rise mt-14 max-w-2xl border-t border-border pt-7 [animation-delay:400ms]">
          <p className="text-[11px] uppercase leading-[2] tracking-[0.14em] text-muted-foreground">
            Just Minimal community criada pra todos aqueles que acreditam e querem
            fazer parte daquilo que estamos a construir.
          </p>
          <p className="mt-2 text-[11px] uppercase leading-[2] tracking-[0.14em] text-muted-foreground">
            Tendo acesso antecipado a novos lançamentos, informações exclusivas,
            descontos e muito mais.
          </p>
        </div>
      </main>

      <footer className="relative flex flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-border/70 px-8 py-7 sm:px-14">
        {["Acesso antecipado", "Informações exclusivas", "Descontos"].map((item) => (
          <span
            key={item}
            className="text-[10px] uppercase tracking-[0.34em] [text-indent:0.34em] text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </footer>
    </div>
  );
}

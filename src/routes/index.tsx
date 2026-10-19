import { createFileRoute } from "@tanstack/react-router";

import logoAsset from "@/assets/just-minimal-logo.png.asset.json";

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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-[420px] flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <img
          src={logoAsset.url}
          alt="Just Minimal"
          width={1124}
          height={738}
          className="rise h-auto w-[228px] sm:w-[268px]"
        />

        <p className="rise mt-12 text-[11px] font-bold uppercase tracking-[0.2em] [text-indent:0.2em] [animation-delay:120ms]">
          Ainda sem loja... (abre em breve)
        </p>

        <h1 className="rise mt-4 text-[28px] font-extrabold uppercase leading-[1.12] tracking-[-0.015em] sm:text-[34px] [animation-delay:200ms]">
          Get early access when the store opens
          <span className="mt-1 block">+ 10% off in all products</span>
        </h1>

        <p className="rise mt-9 text-[10px] uppercase leading-[1.9] tracking-[0.06em] text-muted-foreground [animation-delay:280ms]">
          Just Minimal community criada pra todos aqueles que acreditam e querem
          fazer parte daquilo que estamos a construir.
          <span className="mt-1 block">
            Tendo acesso antecipado a novos lançamentos, informações exclusivas,
            descontos e muito mais.
          </span>
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rise mt-9 block w-full bg-primary px-6 py-4 text-[12px] font-bold uppercase tracking-[0.16em] [text-indent:0.16em] text-primary-foreground transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [animation-delay:340ms]"
        >
          Entrar na comunidade
        </a>

        <p className="rise mt-4 text-[10px] uppercase tracking-[0.14em] text-muted-foreground [animation-delay:400ms]">
          Abre no grupo de WhatsApp da Just Minimal
        </p>
      </main>
    </div>
  );
}

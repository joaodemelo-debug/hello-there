import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CommunityPage } from "@/routes/index";

// The community button is the one thing this page exists for: it must carry the
// exact WhatsApp invite, opened in a new tab so the page is never left behind.
describe("Just Minimal community page", () => {
  it("links the call to action to the WhatsApp group invite", () => {
    render(<CommunityPage />);

    const cta = screen.getByRole("link", { name: /entrar na comunidade/i });

    expect(cta).toHaveAttribute(
      "href",
      "https://chat.whatsapp.com/CnEffGahKia2F0Y2F2mE6i?mode=gi_t",
    );
    expect(cta).toHaveAttribute("target", "_blank");
    expect(cta).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("promises early access and ten percent off every product", () => {
    render(<CommunityPage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading.textContent).toContain("early access");
    expect(heading.textContent).toContain("10% off in all products");
  });

  // The page joins a WhatsApp group, so it must never ask for a phone number.
  it("never asks the visitor for a phone number", () => {
    const { container } = render(<CommunityPage />);

    expect(screen.queryByRole("textbox")).toBeNull();
    expect(container.querySelector("input")).toBeNull();
    expect(container.textContent).not.toMatch(/phone number|n[úu]mero/i);
  });

  it("shows the Just Minimal signature logo", () => {
    render(<CommunityPage />);

    const logo = screen.getByRole("img", { name: /just minimal/i });

    expect(logo.getAttribute("src")).toContain("just-minimal-logo.png");
  });
});

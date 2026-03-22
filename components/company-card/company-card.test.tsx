import React from "react";
import { render, screen } from "@testing-library/react";

import { CompanyCard } from "./company-card";

describe("CompanyCard", () => {
  it("renders an external anchor for external hrefs", () => {
    render(
      <CompanyCard
        title="Acme"
        description="External company"
        imageUrl="https://files.quartr.com/company-logos/example.png"
        href="https://example.com"
        external
      />
    );

    const link = screen.getByRole("link", {
      name: "Visit Acme (opens in a new tab)",
    });

    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders an internal link for internal hrefs", () => {
    render(
      <CompanyCard
        title="Acme"
        description="Internal company"
        imageUrl="https://files.quartr.com/company-logos/example.png"
        href="/companies/acme"
      />
    );

    const link = screen.getByRole("link", { name: "Visit Acme" });

    expect(link).toHaveAttribute("href", "/companies/acme");
    expect(link).not.toHaveAttribute("target");
  });

  it("applies a max width only when allowWidth is provided", () => {
    const { rerender } = render(
      <CompanyCard
        title="Acme"
        description="A long description"
        imageUrl="https://files.quartr.com/company-logos/example.png"
        href="/companies/acme"
        allowWidth={180}
      />
    );

    expect(screen.getByText("A long description")).toHaveStyle({
      maxWidth: "180px",
    });

    rerender(
      <CompanyCard
        title="Acme"
        description="A long description"
        imageUrl="https://files.quartr.com/company-logos/example.png"
        href="/companies/acme"
      />
    );

    expect(screen.getByText("A long description")).not.toHaveStyle({
      maxWidth: "180px",
    });
  });
});

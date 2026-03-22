import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { CompanyList } from "./company-list";

const companyCardMock = vi.fn(
  ({
    title,
    description,
    imageUrl,
    href,
    external,
    allowWidth,
  }: {
    title: string;
    description: string;
    imageUrl: string;
    href: string;
    external?: boolean;
    allowWidth?: number;
  }) => (
    <div data-testid="card-mock">
      <span>{title}</span>
      <span>{description}</span>
      <span>{imageUrl}</span>
      <span>{href}</span>
      <span>{external ? "external" : "internal"}</span>
      <span>{allowWidth}</span>
    </div>
  )
);

vi.mock("../../components/company-card/company-card", () => ({
  CompanyCard: (props: {
    title: string;
    description: string;
    imageUrl: string;
    href: string;
    external?: boolean;
    allowWidth?: number;
  }) => companyCardMock(props),
}));

describe("CompanyList", () => {
  beforeEach(() => {
    companyCardMock.mockClear();
  });

  it("renders an empty state when there are no companies", () => {
    render(<CompanyList companiesSummary={[]} />);

    expect(screen.getByText("No companies available right now.")).toBeInTheDocument();
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(screen.queryByTestId("card-mock")).not.toBeInTheDocument();
    expect(companyCardMock).not.toHaveBeenCalled();
  });

  it("renders one list item per company", () => {
    render(
      <CompanyList
        companiesSummary={[
          {
            companyId: 1,
            companyName: "Acme",
            description: "First company",
            logoDarkUrl: "https://files.quartr.com/company-logos/acme.png",
            infoUrl: "https://example.com/acme",
          },
          {
            companyId: 2,
            companyName: "Globex",
            description: "Second company",
            logoDarkUrl: "https://files.quartr.com/company-logos/globex.png",
            infoUrl: "https://example.com/globex",
          },
        ]}
      />
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getAllByTestId("card-mock")).toHaveLength(2);
  });

  it("passes the expected props to CompanyCard", () => {
    render(
      <CompanyList
        companiesSummary={[
          {
            companyId: 1,
            companyName: "Acme",
            description: "First company",
            logoDarkUrl: "https://files.quartr.com/company-logos/acme.png",
            infoUrl: "/companies/acme",
          },
        ]}
      />
    );

    expect(companyCardMock).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Acme",
        description: "First company",
        imageUrl: "https://files.quartr.com/company-logos/acme.png",
        href: "/companies/acme",
        external: true,
        allowWidth: 180,
      })
    );
  });
});

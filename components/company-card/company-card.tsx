"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./company-card.module.css";

type CompanyCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  external?: boolean;
  allowWidth?: number;
};

export function CompanyCard({
  title,
  description,
  imageUrl,
  href,
  external = false,
  allowWidth,
}: CompanyCardProps) {
  const linkContent = <img src="/chevron-right.svg" width="24" height="24" alt="" />;
  const ariaLabel = external
    ? `Visit ${title} (opens in a new tab)`
    : `Visit ${title}`;

  const content = (
    <>
      <span className={classes.cardImageWrapper}>
        <Image
          src={imageUrl}
          fill
          sizes="40px"
          alt={title}
          className={classes.cardImage}
        />
      </span>
      <div className={classes.cardContent}>
        <h2 className={classes.cardTitle}>{title}</h2>
        <p
          className={`${classes.cardDescription} ${allowWidth ? classes.cardDescriptionEllipsis : ""}`}
          style={allowWidth ? { maxWidth: `${allowWidth}px` } : undefined}
        >
          {description}
        </p>
      </div>
      <span className={classes.cardIcon} aria-hidden="true">
        {linkContent}
      </span>
    </>
  );

  return (
    <article>
      {external ? (
        <a
          href={href}
          target="_blank"
          className={classes.cardLink}
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {content}
        </a>
      ) : (
        <Link href={href} className={classes.cardLink} aria-label={ariaLabel}>
          {content}
        </Link>
      )}
    </article>
  );
}

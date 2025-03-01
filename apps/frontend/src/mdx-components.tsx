import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { TypographyH1 } from "@/components/typography/typography-h1";
import { TypographyH2 } from "@/components/typography/typography-h2";
import { TypographyH3 } from "@/components/typography/typography-h3";
import { TypographyH4 } from "@/components/typography/typography-h4";
import { TypographyP } from "@/components/typography/typography-p";
import { TypographyLarge } from "@/components/typography/typography-large";
import { TypographySmall } from "@/components/typography/typography-small";
import { TypographyInlineCode } from "@/components/typography/typography-inline-code";
import { TypographyBlockquote } from "@/components/typography/typography-blockquote";
import { HorizontalLine } from "@/components/utility-components/horizontal-line";
import {
  TypographyLI,
  TypographyUL,
} from "./components/typography/typography-list";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <TypographyH1 className="mb-3">{children}</TypographyH1>
    ),
    h2: ({ children }) => (
      <TypographyH2 className="mb-3">{children}</TypographyH2>
    ),
    h3: ({ children }) => (
      <TypographyH3 className="mb-3">{children}</TypographyH3>
    ),
    h4: ({ children }) => (
      <TypographyH4 className="mb-3">{children}</TypographyH4>
    ),
    h5: ({ children }) => <TypographyLarge>{children}</TypographyLarge>,
    h6: ({ children }) => <TypographySmall>{children}</TypographySmall>,
    p: ({ children }) => <TypographyP>{children}</TypographyP>,
    code: ({ children }) => (
      <TypographyInlineCode>{children}</TypographyInlineCode>
    ),
    ul: ({ children }) => <TypographyUL>{children}</TypographyUL>,
    li: ({ children }) => <TypographyLI>{children}</TypographyLI>,
    blockquote: ({ children }) => (
      <TypographyBlockquote>{children}</TypographyBlockquote>
    ),
    hr: () => <HorizontalLine />,
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        sizes="100vw"
        width={300}
        height={800}
        className="h-auto"
        quality={100}
        {...(props as ImageProps)}
      />
    ),

    ...components,
  };
}

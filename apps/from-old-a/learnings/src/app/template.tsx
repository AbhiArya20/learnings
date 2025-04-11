import React from "react";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>Template{children}</div>;
}

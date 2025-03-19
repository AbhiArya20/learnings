import mermaid from "mermaid";
import { useEffect, useState, useTransition } from "react";

interface MermaidProps {
  id: string;
  definition: string;
}

export const MermaidDiagram = ({ definition, id }: MermaidProps) => {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const render = async (id: string, definition: string) => {
      try {
        setError(null);

        const { svg } = await mermaid.render(
          `mermaid-diagram-${id}`,
          definition
        );
        startTransition(() => {
          setSvg(svg);
        });
      } catch (err) {
        setError(String(err));
      }
    };

    render(id, definition);
  }, [definition, id]);

  return (
    <>
      <div
        style={{ width: "50%" }}
        className="mermaid"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {error && (
        <div id="error">
          Whoops! The diagram’s on a coffee break. Try refreshing!
        </div>
      )}
    </>
  );
};

import styled from "styled-components";
import PulsingCursor from "./PulsingCursor";

interface CodeEditorProps {
  code: string;
}

const CodeEditor = ({ code }: CodeEditorProps) => {
  const codeLines = code.split("\n");

  return (
    <CodeContainer>
      {codeLines.map((line, index) => (
        <CodeLine key={index}>
          <LineNumber>{index + 1}</LineNumber>
          <CodeContent>
            {line.includes("{{CURSOR}}") ? (
              <>
                {line.split("{{CURSOR}}")[0]}
                <PulsingCursor />
                {line.split("{{CURSOR}}")[1]}
              </>
            ) : (
              line
            )}
          </CodeContent>
        </CodeLine>
      ))}
    </CodeContainer>
  );
};

const CodeContainer = styled.pre`
  margin: 0;
  padding: 0 1rem;
  overflow-y: auto;
  max-height: 700px;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border-gray);
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const CodeLine = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const LineNumber = styled.span`
  color: var(--color-border-gray);
  min-width: 1.4rem;
  text-align: right;
  user-select: none;
`;

const CodeContent = styled.code`
  color: var(--color-text-light);
  white-space: pre;
  display: flex;
  align-items: center;
`;

export default CodeEditor;

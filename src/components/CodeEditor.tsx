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
  font-family: "Courier New", monospace;
`;

const CodeLine = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const LineNumber = styled.span`
  color: #6a6a6a;
  min-width: 1.4rem;
  text-align: right;
`;

const CodeContent = styled.code`
  color: #e6e6e6;
  white-space: pre;
  display: flex;
  align-items: center;
`;

export default CodeEditor;

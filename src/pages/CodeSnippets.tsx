import styled from "styled-components";
import Terminal from "../components/layout/Terminal";
import CodeEditor from "../components/ui/CodeEditor";

const TypeScriptCode = `random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff
random stuff`;

const CodeSnippets = () => {
  return (
    <Wrapper>
      <Terminal filePath="js &gt; code-snippets.ts">
        <CodeEditor code={TypeScriptCode} />
      </Terminal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  margin: auto;
  max-width: 700px;
  width: 100%;
`;

export default CodeSnippets;

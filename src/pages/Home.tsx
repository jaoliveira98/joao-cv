import styled from "styled-components";
import CodeEditor from "../components/ui/CodeEditor";
import Terminal from "../components/layout/Terminal";

const HTMLCode = `<html lang="en">
  <head>
    <title>JOAO CV</title>
  </head>
  <body>
    <h1>Hi 👋 I'm João</h1>
    <p>
      I'm a software developer with a passion for building web applications{{CURSOR}}
    </p>
  </body>
</html>`;

const App = () => {
  return (
    <Wrapper>
      <Terminal filePath="homepage.html">
        <CodeEditor code={HTMLCode} />
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

export default App;

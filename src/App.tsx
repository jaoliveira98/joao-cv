import styled from "styled-components";
import Terminal from "./components/Terminal";
import CodeEditor from "./components/CodeEditor";

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
      <Terminal filePath="/homepage">
        <CodeEditor code={HTMLCode} />
      </Terminal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  color: white;
  display: flex;
  height: 100vh;
  margin: auto;
  max-width: 700px;

  pre {
    margin: 1rem 0;
  }
`;

export default App;

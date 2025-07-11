import styled from "styled-components";
import CodeEditor from "../components/ui/CodeEditor";
import Terminal from "../components/layout/Terminal";
import TerminalHeader from "../components/layout/TerminalHeader";
import TerminalFooter from "../components/layout/TerminalFooter";

const HTMLCode = `<html lang="en">
  <head>
    <title>JOAO CV</title>
  </head>
  <body>
    <h1>Hi 👋 I'm João</h1>
    
    <h2>Summary</h2>
    <p>
      Dedicated Frontend Developer with over 5 years of experience building responsive, user-focused web applications for news publishing, marketing, and e-commerce. Expert in React.js, TypeScript, JavaScript, and server-side rendering, with a strong focus on CMS-driven platforms and UI/UX design. Proficient in optimising components for performance and accessibility, delivering scalable solutions in agile environments. Skilled in Jest, styled-components, Tailwind CSS and Figma.
    </p>
    
    <h2>Key Skills</h2>
    <ul>
      <li>
        <strong>Frontend Technologies:</strong> React.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, styled-components, Bootstrap
      </li>
      <li>
        <strong>UI/UX Design:</strong> Figma, Adobe XD, responsive and accessible design
      </li>
      <li>
        <strong>Testing & Tools:</strong> Jest, Playwright, React-query, DebugBear, Firebase
      </li>
      <li>
        <strong>Soft Skills:</strong> Agile methodologies, remote collaboration, problem-solving, client communication
      </li>
    </ul>
  </body>
</html>`;

const App = () => {
  return (
    <Wrapper>
      <Terminal>
        <TerminalHeader filePath="homepage.html" />
        <CodeEditor code={HTMLCode} />
        <TerminalFooter />
      </Terminal>
      <Terminal light>
        <iframe
          srcDoc={HTMLCode}
          title="JOAO CV"
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
        >
          <html lang="en">
            <head>
              <title>JOAO CV</title>
            </head>
            <body>
              <h1>Hi 👋 I'm João</h1>

              <h2>Summary</h2>
              <p>
                Dedicated Frontend Developer with over 5 years of experience
                building responsive, user-focused web applications for news
                publishing, marketing, and e-commerce. Expert in React.js,
                TypeScript, JavaScript, and server-side rendering, with a strong
                focus on CMS-driven platforms and UI/UX design. Proficient in
                optimising components for performance and accessibility,
                delivering scalable solutions in agile environments. Skilled in
                Jest, styled-components, Tailwind CSS and Figma.
              </p>

              <h2>Key Skills</h2>
              <ul>
                <li>
                  <strong>Frontend Technologies:</strong> React.js, TypeScript,
                  JavaScript, HTML5, CSS3, Tailwind CSS, styled-components,
                  Bootstrap
                </li>
                <li>
                  <strong>UI/UX Design:</strong> Figma, Adobe XD, responsive and
                  accessible design
                </li>
                <li>
                  <strong>Testing & Tools:</strong> Jest, Playwright,
                  React-query, DebugBear, Firebase
                </li>
                <li>
                  <strong>Soft Skills:</strong> Agile methodologies, remote
                  collaboration, problem-solving, client communication
                </li>
              </ul>
            </body>
          </html>
        </iframe>
      </Terminal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  margin: auto;
  max-width: 1400px;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default App;

import Editor, { type EditorProps } from "@monaco-editor/react";
import { styled } from "styled-components";
import Terminal from "../layout/Terminal";
import { useEditorContext } from "../../hooks/useEditorContext";
import Contact from "../ui/Contact";

interface CodeEditorPageProps {
  language: "html" | "css";
  defaultValue: string;
  filePath: string;
  setCodeFunction: (code: string) => void;
}

const CodeEditorPage = ({
  language,
  defaultValue,
  filePath,
  setCodeFunction,
}: CodeEditorPageProps) => {
  const { combinedCode } = useEditorContext();

  const editorOptions: EditorProps["options"] = {
    wordWrap: "on",
    wrappingStrategy: "advanced",
    formatOnPaste: true,
    formatOnType: true,
    automaticLayout: true,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    tabSize: 2,
    insertSpaces: true,
  };

  return (
    <Wrapper>
      <TitleGroup>
        <Title>
          Hey <WavingHand className="wave">👋</WavingHand> welcome!
        </Title>
        <SubTitle>Why not get to know me while making things fun?</SubTitle>
        <Paragraph>
          Try to edit the code below to see the changes in the preview
        </Paragraph>
      </TitleGroup>
      <ContentContainer>
        <Terminal showHeader showFooter filePath={filePath}>
          <Editor
            height="100%"
            width="100%"
            defaultLanguage={language}
            defaultValue={defaultValue}
            onChange={(code) => setCodeFunction(code || "")}
            options={editorOptions}
            theme="vs-dark"
          />
        </Terminal>
        <Terminal theme="light">
          <PreviewIframe
            srcDoc={combinedCode}
            title="Joao's Curriculum Vitae"
          />
        </Terminal>
      </ContentContainer>
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  justify-content: center;
  margin: auto;
  max-width: 1400px;
  width: 100%;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--color-text-light);
  margin: 0;
`;

const WavingHand = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-text-light);
  font-weight: 200;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  color: var(--color-text-light);
  font-weight: 200;
  margin: 0;
`;

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  width: 100%;
  min-height: 700px;

  @media (max-width: 1000px) {
    flex-direction: column;
    flex-direction: column-reverse;
    padding: 1rem;
    min-height: 500px;
  }
`;

const PreviewIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export default CodeEditorPage;

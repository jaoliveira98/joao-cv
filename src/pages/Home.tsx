import { useEditorContext } from "../hooks/useEditorContext";
import { cvHtmlContent } from "../data/cv";
import CodeEditorPage from "../components/pages/CodeEditorPage";

const Home = () => {
  const { setHtmlCode } = useEditorContext();

  return (
    <CodeEditorPage
      language="html"
      defaultValue={cvHtmlContent}
      filePath="homepage.html"
      setCodeFunction={setHtmlCode}
    />
  );
};

export default Home;

import { useEditorContext } from "../hooks/useEditorContext";
import { cvStylesContent } from "../data/cv";
import CodeEditorPage from "../components/pages/CodeEditorPage";

const Styles = () => {
  const { setCssCode } = useEditorContext();

  return (
    <CodeEditorPage
      language="css"
      defaultValue={cvStylesContent}
      filePath="styles.css"
      setCodeFunction={setCssCode}
    />
  );
};

export default Styles;

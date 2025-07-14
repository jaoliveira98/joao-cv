import { useState, type ReactNode } from "react";
import { cvHtmlContent, cvStylesContent } from "../data/cv";
import { EditorContext, type EditorContextType } from "./EditorContext";

interface EditorProviderProps {
  children: ReactNode;
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {
  const [htmlCode, setHtmlCode] = useState(cvHtmlContent);
  const [cssCode, setCssCode] = useState(cvStylesContent);

  // Function to combine HTML and CSS into a single document
  const combinedCode = htmlCode.replace(
    /<link[^>]*href="[^"]*styles\.css"[^>]*>/i,
    `<style>${cssCode}</style>`
  );

  const value: EditorContextType = {
    htmlCode,
    cssCode,
    setHtmlCode,
    setCssCode,
    combinedCode,
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

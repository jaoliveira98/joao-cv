import { createContext } from "react";

export interface EditorContextType {
  htmlCode: string;
  cssCode: string;
  setHtmlCode: (code: string) => void;
  setCssCode: (code: string) => void;
  combinedCode: string;
}

export const EditorContext = createContext<EditorContextType>({
  htmlCode: "",
  cssCode: "",
  setHtmlCode: () => {},
  setCssCode: () => {},
  combinedCode: "",
});

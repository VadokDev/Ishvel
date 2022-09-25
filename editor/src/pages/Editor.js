import EditorLayout from "../components/templates/EditorLayout";
import Sidebar from "../components/organisms/Sidebar";
import EditorArea from "../components/organisms/EditorArea";

const Editor = () => {
  return (
    <EditorLayout LeftSidebar={Sidebar} Editor={EditorArea}></EditorLayout>
  );
};

export default Editor;

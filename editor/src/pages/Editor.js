import EditorLayout from '../components/templates/EditorLayout';
import Sidebar from '../components/organisms/Sidebar';
import EditorArea from '../components/organisms/EditorArea';
import MetricsArea from '../components/organisms/MetricsArea';
import ToolsArea from '../components/templates/ToolsArea';
import SuggestionsArea from '../components/organisms/SuggestionsArea';

const Editor = () => {
  return (
    <EditorLayout
      LeftSidebar={Sidebar}
      Editor={EditorArea}
      Tools={ToolsArea}
      Testing={SuggestionsArea}
      Suggestions={SuggestionsArea}
      Metrics={MetricsArea}
    ></EditorLayout>
  );
};

export default Editor;

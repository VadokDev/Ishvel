import EditorLayout from '../components/templates/EditorLayout';
import Sidebar from '../components/organisms/Sidebar';
import EditorArea from '../components/organisms/EditorArea';
import SuggestionsArea from '../components/organisms/SuggestionsArea';
import MetricsArea from '../components/organisms/MetricsArea';

const Editor = () => {
  return (
    <EditorLayout
      LeftSidebar={Sidebar}
      Editor={EditorArea}
      Suggestions={SuggestionsArea}
      Metrics={MetricsArea}
    ></EditorLayout>
  );
};

export default Editor;

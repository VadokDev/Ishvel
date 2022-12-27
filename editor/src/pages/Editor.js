import EditorLayout from '../components/templates/EditorLayout';
import Sidebar from '../components/organisms/Sidebar';
import EditorArea from '../components/organisms/EditorArea';
import MetricsArea from '../components/organisms/MetricsArea';
import SuggestionsArea from '../components/organisms/SuggestionsArea';
import CodeArea from '../components/organisms/CodeArea';
import ConfigArea from '../components/organisms/ConfigArea';

const Editor = () => {
  return (
    <EditorLayout
      LeftSidebar={Sidebar}
      Editor={EditorArea}
      Coding={CodeArea}
      Suggestions={SuggestionsArea}
      Metrics={MetricsArea}
      Config={ConfigArea}
    ></EditorLayout>
  );
};

export default Editor;

import JetsMediaViewer from './JetsMediaViewer/JetsMediaViewer';
import { exampleData } from './mock';

function App() {
  return (
    <div className="app">
      <JetsMediaViewer config={exampleData} />
    </div>
  );
}

export default App;

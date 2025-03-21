
import Editor from './components/Editor';
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-bold mb-4">Tripdocks Text Editor</h1>
      <Editor />
    </div>
  );
};

export default App;

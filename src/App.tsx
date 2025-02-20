import ParamEditor from './components/ParamEditor';
import { Model } from './components/ParamEditor';
import { Param } from './components/ParamEditor';

function App() {
  const params: Param[] = [
    { id: 1, name: "Назначение", type: "string" },
    { id: 2, name: "Длина", type: "string" },
    { id: 3, name: "Материал", type: "string" }
  ];

  const initialModel: Model = {
    paramValues: [
      { paramId: 1, value: "повседневное" },
      { paramId: 2, value: "макси" },
      { paramId: 3, value: "хлопок" }
    ],
    colors: ["red", "blue", "green"]
  };
  return (
    <div className="App">
      <ParamEditor params={params} model={initialModel} />
    </div>
  );
}

export default App;

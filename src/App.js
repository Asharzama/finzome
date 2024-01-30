import { useState } from "react";
import From from "./components/From";
import Table from "./components/Table";

function App() {
  const [tableData, setTableData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <From setTableData={setTableData} isEdit={false} tableData={tableData} setIsOpen={setIsOpen}/>
      <Table tableData={tableData} setTableData={setTableData} setIsOpen={setIsOpen} isOpen={isOpen}/>
    </div>
  );
}

export default App;

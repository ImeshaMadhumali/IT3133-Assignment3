import logo from './logo.svg';
import './App.css';
import { students } from './data/StudentsDb'

function App() {
  return (
    <div classname="App">
      <h1>Students Information Portal</h1>
      <hr/>
      <table>
        <body>
          <tr>
            <td>
              <StudentTable students = {students}/>
            </td>
          </tr>
        </body>
      </table>
    </div>
  );
}

export default App;

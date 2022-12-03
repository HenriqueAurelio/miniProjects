
import Header from "./components/Header"
import QuestionCard from "./components/QuestionCard"
import './App.css'
import mock from './mock/question'

function App() {
  const { data } = mock
  return (
    <div className="App">
      <Header />
      {data.map((item, index) => (
        <QuestionCard questionNumber={index + 1} data={item} key={index} />
      ))}
    </div>
  );
}

export default App;

import "./App.css";
import Form from "./Form";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <Form saveTodo={console.warn} />
    </div>
  );
}

export default App;

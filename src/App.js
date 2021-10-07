import React from "react";
import Input from "./components/Input/Input";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className={"app"}>
      <Container>
        <Input label={`Username`} type={`text`} />
        <Input label={`Age (Year)`} type={`number`} />
        <Button title={"Add User"} />
      </Container>
    </div>
  );
}

export default App;

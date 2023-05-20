import { useEffect, useState } from "react";
import styled from "styled-components";
function App() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    // window.addEventListener("mousemove", update);
    window.addEventListener("click", update);
  }, [setX, setY]);

  return (
    <Container>
      <Button>Rendo</Button>
      <Button>Undo</Button>
      <Div>{x}</Div>
      <Div>{y}</Div>
    </Container>
  );
}

export default App;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
`;
const Div = styled.div``;

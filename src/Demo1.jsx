const Button = styled.button`
  // ... style properties
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) => props.$hover && css`
    background: #BF4F74;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`;

export default function Demo1() {
  return (
    <Container>
      <Button>Normal</Button>
      <Button $hover>Hovering</Button>
    </Container>
  );
}

import styled, { css } from "styled-components";



// CSS example
//   export default function App() {
//   return (
//     <div className="container">
//       <button className="button">Normal</button>
//       <button className="button button--hover">Hovering</button>
//     </div>
//   );
// }

// import "../styles.css";
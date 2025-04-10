import Card from './components/Card';
import SideBar from './components/sideBar/sideBar';
import * as _ from "./style";

function App() {

  return (
    <>
      <SideBar/>
      <_.cardDiv>
      <Card />
      </_.cardDiv>
    </>
  )
}

export default App

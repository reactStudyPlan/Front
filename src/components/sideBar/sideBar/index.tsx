import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Drag from '../drag';
import Drop from '../drop';
import { useState } from 'react';

export default function SideBar(){
  const [navPosition, setNavPosition] = useState("left"); // 초기 위치

  return (
    <DndProvider backend={HTML5Backend}>
      <Drop position="left" onDrop={setNavPosition} />
      <Drop position="right" onDrop={setNavPosition} />
      <Drop position="top" onDrop={setNavPosition} />
      <Drop position="bottom" onDrop={setNavPosition} />
      <Drag position={navPosition} />
    </DndProvider>
  );
}
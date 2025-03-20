import { useDrop } from 'react-dnd';
import * as _ from "./style";

const DropZone = ({ position, onDrop }: { position: string; onDrop: (pos: string) => void }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "NAVBAR",
    drop: () => onDrop(position),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return <_.DropArea ref={drop} $active={isOver} $position={position} />;
};

export default DropZone;
import { useDrag } from 'react-dnd';
import * as _ from "./style";

const Drag = ({ position }: { position: string }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "NAVBAR",
    item: { type: "NAVBAR" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <_.Side ref={drag} $position={position} $dragging={isDragging} style={{ opacity: isDragging ? 0 : 1 }}>
      <_.RSide $position={position} />
    </_.Side>
  );
};

export default Drag;

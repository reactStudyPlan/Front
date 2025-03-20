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
    <_.Side ref={drag} $open={true} $position={position} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <_.RSide $open={true}>네비바</_.RSide>
    </_.Side>
  );
};

export default Drag;

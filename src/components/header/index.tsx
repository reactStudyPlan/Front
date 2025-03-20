import { useState } from "react";
import * as _ from "./style";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <_.Side $open={open} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {/* {open && <button onClick={() => setOpen(false)}>↩</button>}  사이드바 안 요소 */}
    </_.Side>
  );
}

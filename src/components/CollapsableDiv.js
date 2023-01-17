import React from 'react';
import { useState } from 'react';
const Collapsable =(props)=>{
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

    return(
      <div className={props.className}>
        <div>COLLAPSABLE/EXPANDABLE</div>

        {/* <h4>{props.infoText}: '{props.infoValue}'</h4> */}
      {!open && <>
        <div>CLOSED</div>
        <button onClick={toggle}>Vis mer</button>
      </>}
      {open && (<>
        {/* <div className={props.className}>
          {props.infoText}: '{props.infoValue}'
        </div> */}
        <div>OPEN</div>
        <div>OPEN</div>
        <div>OPEN</div>
        <div>OPEN</div>
        <div>OPEN</div>
        <button onClick={toggle}>Vis mindre</button>
      </>)}
      
    </div>
    )
}
export default Collapsable;
import React from 'react';
import { useState } from 'react';
import "./HardCodeCollapsableDivCSS.css";
const HardCodeCollapsable =(props)=>{
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

    return(
      <div className='collapsableContainer'>
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
        <div className='openDivs'>
          <div className="idAsBase64" style={{border: "1px solid black"}}>idAsBase64: <br/>{props.data.idAsBase64}</div>
          <div className="id">id: <br/>{props.data.id}</div>
          <div className="navnFormStyrke">navnFormStyrke: <br/>{props.data.navnFormStyrke}</div>
          <div className="varenavn">varenavn: <br/>{props.data.varenavn}</div>
          <div className="atcKode">atcKode: <br/>{props.data.atcKode}</div>
          <div className="preparattype">preparattype: <br/>{props.data.preparattype}</div>
          <div className="infoType">infoType: <br/>{props.data.infoType}</div>
          <div className="legemiddelMerkevareId">legemiddelMerkevareId: <br/>{props.data.legemiddelMerkevareId}</div>
          <div className="markedsforingsdato">markedsforingsdato: <br/>{props.data.markedsforingsdato}</div>
          <div className="typeSoknadSlv">typeSoknadSlv: <br/>{props.data.typeSoknadSlv}</div>
        </div>
        <button onClick={toggle}>Vis mindre</button>

      </>)}
      
    </div>
    )
}
export default HardCodeCollapsable;
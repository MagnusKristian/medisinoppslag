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
        {/* <div>COLLAPSABLE/EXPANDABLE</div> */}

        {/* <h4>{props.infoText}: '{props.infoValue}'</h4> */}
      {!open && <>
        <div>CLOSED</div>
        <button onClick={toggle}>Vis mer</button>
      </>}
      {open && (<>
        {/* <div className={props.className}>
          {props.infoText}: '{props.infoValue}'
        </div> */}
        <div className='openDivs' style={{border: "1px solid blue", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>
          <div className="idAsBase64" style={{border: "1px solid green"}}>idAsBase64: <br/>{props.data.idAsBase64}</div>
          <div className="id"style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>id: <br/>{props.data.id}</div>
          <div className="navnFormStyrke"style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>navnFormStyrke: <br/>{props.data.navnFormStyrke}</div>
          <div className="varenavn"style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>varenavn: <br/>{props.data.varenavn}</div>
          <div className="atcKode"style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>atcKode: <br/>{props.data.atcKode}</div>
          <div className="preparattype"style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>preparattype: <br/>{props.data.preparattype}</div>
          <div className="infoType"style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>infoType: <br/>{props.data.infoType}</div>
          <div className="legemiddelMerkevareId"style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>legemiddelMerkevareId: <br/>{props.data.legemiddelMerkevareId}</div>
          <div className="markedsforingsdato"style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>markedsforingsdato: <br/>{props.data.markedsforingsdato}</div>
          <div className="typeSoknadSlv"style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>typeSoknadSlv: <br/>{props.data.typeSoknadSlv}</div>
        </div>

        <div>OPEN</div>
        <button onClick={toggle}>Vis mindre</button>

      </>)}
      
    </div>
    )
}
export default HardCodeCollapsable;
import "./AlternateResultsCss.css";
import HardCodeCollapsable from "../HardCodeCollapsableDiv";
export const AlternateResults = (props)=>{
  return(
  <>
    <div id="content" className="container">
<div className="panel panel-default">
<div className="panel-body">
	<h6 className="nomargin"> 
		About 1,280 results <small className="text-success">(0.45 seconds) </small>
	</h6>
	<hr className="nomargin-bottom margin-top-10"/>
	
	<div className="clearfix search-result">
		<h4><a href="#">Admin – fully responsive webapp</a></h4>
		<small className="text-success">www.stepofweb.com/</small>
		<p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
	</div>



      {props.searchResults.map(data => (
          <div className="card" key={data.id} style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>
            <strong><a href="#">VARENAVN: '{data.varenavn}'</a></strong>
            <hr/>
		          <small className="text-success">Dashboard / Gallery</small>
		            <small className="text-danger">Dashboard / About</small>
             <p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
            <HardCodeCollapsable data={data}/>
            
          </div>
        ))}
        {props.searchResults.map(data => (
          <div className="card" key={data.id} style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>
            <strong><a href="#">VARENAVN: '{data.varenavn}'</a></strong>
            <hr/>
		          <small className="text-success">Dashboard / Gallery</small>
             <p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
            <HardCodeCollapsable data={data}/>
            
          </div>
        ))}
        {props.searchResults.map(data => (
          <div className="card" key={data.id} style={{border: "1px solid red", borderRadius:"5px", marginRight:"5vw",marginLeft:"5vw",marginTop:"1vh"}}>
            <strong><a href="#">VARENAVN: '{data.varenavn}'</a></strong>
            <hr/>
		            <small className="text-danger">Dashboard / About</small>
             <p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
            <HardCodeCollapsable data={data}/>
            
          </div>
        ))}
        


	<div className="text-center margin-top-20"style={{float:"left", margin:"10px", border:"1px solid black",background:"gray"}} >
		<div className="pagination" style={{float:"left", margin:"10px"}}>
			<div className="disabled" style={{float:"left", margin:"10px"}}><a href="#">Previous</a></div>
			<div className="active" style={{float:"left", margin:"10px"}}><a href="#">1</a></div>
			<div style={{float:"left", margin:"10px"}}><a href="#">2</a></div>
			<div style={{float:"left", margin:"10px"}}><a href="#">3</a></div>
			<div style={{float:"left", margin:"10px"}}><a href="#">Next</a></div>
		</div>
	</div>
	
</div>
</div>

</div>
  </>
  );
}


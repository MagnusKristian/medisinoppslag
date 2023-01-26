export const one = () => {
 let i = 0;
     if (true) {
         i = 0;
         console.log(i+"one");

     } else {
        i = 1;
     }
 }
 
 export const two = () => {
 let i = 0;
     if (true) {
         i = 0;
         console.log(i+"two");
     } else {
        i = 1;
     }
 }

 export const searchFirstName = (searchWord,data)=>{
  console.log(`Here is the data:  ${JSON.stringify(data)}`);
  // console.log(`Here is the data:  ${data}`);

  console.log(`Searched for first name ${searchWord}`);
  // console.log(` ${x}`);

  filterNames(searchWord,data);
 }


 const filterNames = (searchWord,data)=>{
  let match;
  let matchName = "x";
  let matchFound = false;
  let allMatches = [];
  data.forEach(element => {
    if(element.name.first.toLowerCase() == searchWord.toLowerCase()){
      console.log("SUCCESS.");
      match = element;
      matchName = element.name.first +" "+ element.name.last;
      matchFound = true;
      allMatches.push(element);
      console.log(matchName);
    }
  });
  console.log("All matches: "+JSON.stringify(allMatches));
  if(matchFound){
  console.log(`Match found for "${searchWord}": "${JSON.stringify(match)}"`);
  }
  else{
  console.log(`No match found for "${searchWord}"...`);

  }
 }



 export const searchApi = (sp,setSearchValue)=>{

  let errorMessage = "X";
  let results = [{
    "idAsBase64": errorMessage,
    "id": errorMessage,
    "navnFormStyrke": errorMessage,
    "varenavn": errorMessage,
    "atcKode": errorMessage,
    "preparattype": errorMessage,
    "infoType": errorMessage,
    "legemiddelMerkevareId": errorMessage,
    "markedsforingsdato": [errorMessage],
    "typeSoknadSlv": errorMessage
  }];


 console.log("searchApi");

 let tempdata = ([{
  "idAsBase64": "MDAwNC0wMDEyLUlEX0I5RDU2RTU3LUZBMTItNDNFNS04MDdDLTQ2MDlENURFQTk2Mg2",
  "id": "0004-0012-ID_B9D56E57-FA12-43E5-807C-4609D5DEA962",
  "navnFormStyrke": "Melatonin douglas smeltetab 1 mg",
  "varenavn": "Melatonin douglas",
  "atcKode": "N05CH01",
  "preparattype": "Krever godkj. Fritak",
  "infoType": "legemiddel",
  "legemiddelMerkevareId": "ID_B9D56E57-FA12-43E5-807C-4609D5DEA962",
  "markedsforingsdato": ["07/15/2006 00:00:00 +00:00"],
  "typeSoknadSlv": "Søknad vurderes av apotek"
}, {
  "idAsBase64": "MDAwNC0wMDEyLUlEX0E3ODVDMzhGLTdEM0ItNDk5NS05REY2LUJDM0FFMDhERjY3MQ2",
  "id": "0004-0012-ID_A785C38F-7D3B-4995-9DF6-BC3AE08DF671",
  "navnFormStyrke": "Melatonin kal sugetab 5 mg",
  "varenavn": "Melatonin kal",
  "atcKode": "N05CH01",
  "preparattype": "Krever godkj. Fritak",
  "infoType": "legemiddel",
  "legemiddelMerkevareId": "ID_A785C38F-7D3B-4995-9DF6-BC3AE08DF671",
  "markedsforingsdato": ["01/01/2001 00:00:00 +00:00"],
  "typeSoknadSlv": "Søknad vurderes av apotek"
}]);


  // const endpoint = `https://api-qa.helsedirektoratet.no/legemidler/legemidler/sok?queryText=${sp.searchWord}&Top=${sp.resultAmmount}&Skip=0`;
  const endpoint = `https://api-qa.helsedirektoratet.no/legemidler/legemidler/sok?queryText=${"melatonin"}&Top=${"10"}&Skip=${"10"}`;

  let endresult;
  
    fetch(endpoint, {
      method: 'GET',
      // Request headers
      headers: {
          'Cache-Control': 'no-cache',
          'Ocp-Apim-Subscription-Key': `${sp.apiKey}`}
    })
    .then(response => response.json())
    .then(response => { endresult = JSON.stringify(response); console.log(".then-solo: "+JSON.stringify(response)) ; results = JSON.stringify(response); console.log(".then-solo response: "+results) ; return results})
    // .then(response => {results = JSON.stringify(response); console.log(".then - results = response: "+JSON.stringify(results))})

    // .then(response => {
    //   console.log(".then:");

    //   console.log("response.status");
    //   console.log(response.status);
    //   console.log("response.text()");
    //   console.log(response.text());
    //   // results = response;

    //   if(response.status == 401){
    //     let errmsg = response.status;
    //     errorMessage = response.status;
    //     console.log("errormessage if 401: "+response.status);
        
    //   }

    //   results = response.results;
    //   console.log("response.results: "+JSON.stringify(response));
    //   console.log("response.resuuuuults: "+JSON.stringify(response));


    //   console.log("End .then");
    // })
  // } catch (error) {
  //   console.log("CATCH ERROR HERE:");
  //   console.error(error);
  //   results = tempdata;

  // }
  // results = tempdata;

  



  

  return results;

  // const tempForTesting = results.concat(tempdata); 
  // return tempForTesting;

  // return tempdata;
}
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



 export const searchApi = (searchParameters)=>{
 console.log("searchApi");

 
 return ([{
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
}])
 }
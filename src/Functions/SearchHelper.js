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
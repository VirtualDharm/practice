import React from 'react'
let url=`https://api.coindesk.com/v1/bpi/currentprice.json`
function App() {
  function editDesc(d){
    let bpi=d.bpi
    console.log(typeof(bpi))
    let obj = bpi.map((x)=>{return bpi.description})
    console.log("checking obj : ",obj)
    console.log("checking: ",obj.length)
    // for(let i=0;i<bpi.length;i++){
    //   console.log(bpi.description)
    // }
  }
  async function getData(url){
    let myPromise = new Promise(function(resolve, reject) {
      let res
      let result = fetch(url)
      result.then(res =>
        res.json()).then(d => {
            editDesc(d)
        })
      resolve(res);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  getData(url)
  return(
  <>
    <p>Data from api is : </p>
      <p id='demo'></p>
  </>
  )
}
export default App;
async function getMoney(){
    //grab the div from the html using its id
    let div=document.getElementById("coinList");
    
    //this line clears the div
    div.replaceChildren();

    //get information from an api
    var coinGeckoDataRaw = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");

    //conevrt the raw data we get back into "JSON" Javascript Object Notation
    var jsonCoinData = await coinGeckoDataRaw.json();
    //jsonCoinData is an array of objects

    //FOR every coin, I want to create a div
    for(i=0;i<jsonCoinData.length;i++){
        let currentCoin=jsonCoinData[i];
        let pTag=document.createElement("p");
        pTag.innerText=`${currentCoin.name} - $ ${currentCoin.current_price}`;


        //attach the ptag to our div
        div.appendChild(pTag);
    }

    //put that information into the div which has the id of coinList
}
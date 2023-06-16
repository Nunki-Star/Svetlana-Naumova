

var countryInfo = [country, capital]

function setInfo(countryInfo){
    var countryInfo = ['country', 'capital']
    var askCountry = prompt("Please enter the country name:");
    countryInfo[country] = 'askCountry';
    var askCapital = prompt("Please enter the capital of country you've just entered");
    countryInfo['capital'] = askCapital;
    console.log(countryInfo.country, countryInfo.capital)
    
}

function getInfo(countryInfo){
    if(country in countryInfo){
        prompt("country: ", country, "capital: ", capital)
    }
    else{
        prompt("Unfortunately there is no such a country  in the list")
    }
}
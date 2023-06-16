 var countryInfo={};
 

function setInfo(countryName,capitalName) {
        var countryName = prompt("Please enter the name of the country");
        var capitalName = prompt("Please enter the capital of the country");
        countryInfo[countryName] = capitalName;
        console.log(countryInfo);
    }

function getInfo(countryName) {
    var сountryName=prompt('Enter the name of the country');
if ( сountryName in countryInfo )
    alert( 'country: ' + сountryName + ' capital: ' + countryInfo[сountryName] );
else
    alert( 'Unfortunately there is no any info about such a country as ' + сountryName + ' in the list!' );

}

function deleteInfo(countryName) {
    var countryName = prompt("enter the name of the country");
    delete countryInfo[countryName]
    console.log(countryInfo)
}

function countriesList() {
    for ( var i in countryInfo )
       console.log('country: ' + i + '  capital: ' + countryInfo[i])
}






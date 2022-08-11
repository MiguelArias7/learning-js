const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;;


function callApi(urlApi, callback)
{
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true); //Abrir la conexión
    xhttp.onreadystatechange = function(event)
    {
        if(xhttp.readyState === 4)
        {
            if (xhttp.status === 200) 
            {
                callback(JSON.parse(xhttp.responseText));
            }
        }
        else{
            callback("Error");
        }
    }
    xhttp.send();
}

callApi("https://api.escuelajs.co/api/v1/products", console.log)
fetch("https://viacep.com.br/ws/01001000/json/").then(r=>{return r.json()}).then (corpo=>{document.getElementById("span").innerHTML=corpo.cep})



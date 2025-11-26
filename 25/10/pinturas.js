fetch ('pinturas.json')
.then(res => res.json)
.then(data=>{
    console.log(data)
    document.getElementById('Titulodaobra').innerHTML = data.pinturas[0].titulodaobra
    document.getElementById('ano').innerHTML = data.pinturas[0].ano
    document.getElementById('autor').innerHTML = data.pinturas[0].autor
    document.getElementById('Movimento').innerHTML = data.pinturas[0].Movimento
    document.getElementById('Local').innerHTML = data.pinturas[0].Local

})
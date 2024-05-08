function verificar() 
{
    let data = new Date()
    var ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeH.jpg')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovemH.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoH.jpg')
            } else {
                img.setAttribute('src', 'senhor.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeM.jpg')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoM.jpg')
            } else {
                img.setAttribute('src', 'senhora.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}
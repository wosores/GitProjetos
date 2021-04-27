function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }

    //comparador
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero=''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src','sun1.png')                
            }
            else if(idade <21){
                //Jovem
                img.setAttribute('src','sun2.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src','sun3.jpeg')
            }
            else{
                //Idoso
                img.setAttribute('src','sun4.jpeg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src','sun1.png')                
            }
            else if(idade <21){
                //Jovem
                img.setAttribute('src','sun2.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src','sun3.jpeg')
            }
            else{
                //Idoso
                img.setAttribute('src','sun4.jpeg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
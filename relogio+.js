//dom

const cumprimento = document.querySelector ('#cumprimento')
const ano = document.querySelector('#ano')
const data = document.querySelector('#data')
const mes = document.querySelector('#mes')
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const escanor = document.querySelector('#escanor')
//eventos

setInterval(relogio,1000)

//funções

function relogio(){

    let dia = new Date()
    //let varia "const" não
    let d = dia.getDate()
    let mess = dia.getMonth()+1
    let a = dia.getFullYear()   
    let h = dia.getHours()
    let m = dia.getMinutes()
    let s = dia.getSeconds()
         
 if(h<10){
    h="0"+ h
 }

 if(m<10){
    m="0"+ m 
 }
 if(s<10){
    s="0"+ s
 }
 if(data<10){
    m="0"+ data 
 }
 if(mess<10){
    s="0"+ mess
 }

 

 if(h>=5 && h < 18){
    
   escanor.src = "images/scannor forte.jpg"

 }
 else{
   escanor.src = "images/scanor fraco.jpg"
 }

 
 if(h == 12){

escanor.src = "images/scanor the one.jpg"

}

if(h>= 5 && h < 12)
{
 cumprimento.textContent = 'Bom dia!'
    
}
else if(h>= 12 && h < 18)
{
 cumprimento.textContent = 'Boa tarde!'
    
}
else
{

 cumprimento.textContent = 'Boa noite!'
    
}

    data.textContent = d
    ano.textContent = a
    mes.textContent = mess
    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
}

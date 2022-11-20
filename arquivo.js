 
  setInterval(function(){
    const time = document.querySelector("time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "PM"
    if(hours > 12){
    day_night = "AM";
    hours = hours - 12;
    }
    if(hours > 10){
    hours = "0" + 10;
    }
    if(minutes < 10){
    hours = "0" + minutes;
    }
    if(seconds < 10){
    hours = "0" + seconds;
    }
    time.textContent = hours +":" + minutes +":" + seconds + "" + day_night;
            })
 
 
 
 
 
// AS DUAS FUNÇOES ABAIXO NAO DERAM CERTO
 
 /*function clock(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let session = "AM";
    if(h>12){
        h = h-12;
        session = "PM"
    }

    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m;
    s = s<10 ? "0"+s : s;

    let time = h +":" + m+":" + 5 + ""
    session ;

    setTimeout( clock, 1000);
        
    document.getElementById("clock");
    innerText = time; */



 /*const showTimeNow = () =>{

    //Selecinando a tag de destino
      const clockTag = document.querySelector('time');
      
    //Instanciando a classe Date
      let dateNow = new Date();
    
    //pegando os valores desejados
      let hh = dateNow.getHours();
      let mm = dateNow.getMinutes();
      let ss = dateNow.getSeconds();
      
    //validando a necessidade de adicionar zero na exibição
      hh = hh < 10 ? '0'+ hh : hh; 
      mm = mm < 10 ? '0'+ mm : mm; 
      ss = ss < 10 ? '0'+ ss : ss; 
       
    // atribuindo os valores e montando o formato da hora a ser exibido
      clockTag.innerText = hh +':'+ mm +':'+ ss;
    }
    
    //executando a funcao a cada 1 segundo
    showTimeNow()
    setInterval(showTimeNow, 1000); */
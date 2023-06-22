// refer~encias do DOm HTML
const vetjogador=[];
const vetMaq=[];

 const verm =  document.getElementById('verm');
 // lógica do jogo 

verm.onclick = ()=>{
    setTimeout(()=>{
       verm.style.backgroundColor='#FF0000'

    },500);
    verm.style.backgroundColor='#8B0000'

    vetjogador.push(1);
    console.log('Jogador' +  vetjogador);
};

// referencias do DOM HTML

const amarelo =  document.getElementById('amarelo');

// lógica do jogo 

amarelo.onclick = ()=>{
   setTimeout(()=>{
      amarelo.style.backgroundColor='rgb(255, 255, 0)'

   },500);
   amarelo.style.backgroundColor='#CDCD00'

   vetjogador.push(2);
   console.log('Jogador' +  vetjogador);

};

// refer~encias do DOm HTML

const verde =  document.getElementById('verde');

// lógica do jogo 

verde.onclick = ()=>{
   setTimeout(()=>{
      verde.style.backgroundColor='rgb(0, 192, 0)'

   },500);
   verde.style.backgroundColor='#458B00'

   vetjogador.push(3);
   console.log('Jogador' +  vetjogador);

};

// refer~encias do DOm HTML

const azul =  document.getElementById('azul');
const jogarMaquina  = document.getElementById('jogarMaquina');
// lógica do jogo 

azul.onclick = ()=>{
   setTimeout(()=>{
      azul.style.backgroundColor='rgb(0, 0, 255)'

   },500);
    
   azul.style.backgroundColor='#00008B'

   vetjogador.push(4);
   console.log('Jogador' +  vetjogador); 
};

jogarMaquina.onclick = ()=>{
    jogar();
};
function jogar(){
    vetMaq.push(Math.floor(Math.random() * 4 + 1));
    console.log('Maquina ' + vetMaq);
}
function verifygame2(){
   tamVet = vetmaq.length;
   let i = 0, resp;
   while (i < tamVet) {
       if (vetjogador[i] != vetmaq[i]) {
          resp=0;
          vetmaq=[];
          break;
       }else{
           resp=1;
       }
       i += 1;
    }
    console.log('Teste de acerto = ' + resp);
    vetjogador=[];
    
}

verificar.onclick=()=>{
   verifygame();
};
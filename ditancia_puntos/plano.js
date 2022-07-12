Vue.component('plano',{
    template: //html
    `
    <div>
        
        <div class="d-grid gap-2 col-6 mx-auto">
          <button @mousemove="plano" class="btn btn-info">Mostrar Plano </button>
        </div>

        <canvas id="plano" width="600" height="500" @mousemove="plano"/>
    </div>
    
    
    `,
    props:{
        aX:Number,
        aY:Number,
        bX:Number,
        bY:Number,
        cX:Number,
        cY:Number,
        puntos:Number,
    },
    methods:{
        plano() {
          
            // let lienzo1 = this.canvas;
             let c = document.getElementById("plano");
           let lienzo1= c.getContext('2d');
           lienzo1.clearRect(0, 0, c.width, c.height);
     
             let puntos_a_calcular=this.puntos //puede ser solo 2 o 3
             // clores para el plano
             let color_plano={
                 clineas_triangulo:"red",
                 lineas_contador:"green",             
                 numeracion:"blue",
                 letras_eje_XY:"red",
                 letras_puntos_ABC:"indigo",
                 lineas_eje_XY:"green"
              }
     
              let puntosABC={
                  // PARA EL PUNTO A 
                aX:this.aX,
                aY:this.aY,
               // PARA EL PUNTO B
                bX:this.bX,
                bY:this.bY,
               // PARA EL PUNTO C          
                cX:this.cX,
                cY:this.cY
              }
     
     
             let distacia_puntoXY=30;
             let separa_medida_dis=20;
     
             let mover_general=0 // Mueve todo el plano
     
             let mover_ar_ab_XY=0+mover_general; // Mueve el eje X,Y a arriba o abajo ->10
             let mover_de_iz_XY=50+mover_general; // Mueve el eje X,Y a la derecha o izquierda ->10
             
             let obt_mayor_Y=Math.max(puntosABC.aY, puntosABC.bY,puntosABC.cY);
             let obt_menor_Y=Math.min(puntosABC.aY, puntosABC.bY,puntosABC.cY);
             let obt_mayor_X=Math.max(puntosABC.aX, puntosABC.bX,puntosABC.cX);
             let obt_menor_X=Math.min(puntosABC.aX, puntosABC.bX,puntosABC.cX);
     
             let eje_mayor_Y= obt_mayor_Y<0?obt_mayor_Y*(-1)+1:obt_mayor_Y+1;
             let eje_menor_Y=obt_menor_Y<0?obt_menor_Y*(-1)+1:obt_menor_Y+1;
             let eje_mayor_X=obt_mayor_X<0?obt_mayor_X*(-1)+1:obt_mayor_X+1;
             let eje_menor_X=obt_menor_X<0?obt_menor_X*(-1)+1:obt_menor_X+1;
     
             let num_XY ={
                  ini_Y:eje_mayor_Y, // Numero en que inicia el contador en el eje Y positivo
                  fin_Y:eje_menor_Y, // Numero en que termina el contador en el eje Y negativo
                  ini_X:eje_mayor_X, // Numero en que inicia el contador en el eje X positivo
                  fin_X:eje_menor_X, // Numero en que termina el contador en el eje X negativos
     
             }
             //  VARIABLES PARA EL EJE X
               
             let valX={              
                 numX:num_XY.ini_X+num_XY.fin_X,         
                 pos_X_en_Y:(distacia_puntoXY*num_XY.ini_Y)+25+mover_ar_ab_XY, // Mueve el eje X de Abajo a Arriba ->275
                 pos_ini_X:0+mover_de_iz_XY, // Mueve el eje X a la derecha o izquierda            
             }   
             let valX_S={
                 pos_fin_X:valX.pos_ini_X+(distacia_puntoXY*valX.numX),
                 sumaX:valX.pos_ini_X,
                 pos_media_ini_X:valX.pos_X_en_Y-10
             }    
             
             let valX3={
                 pos_media_fin_X:valX_S.pos_media_ini_X+separa_medida_dis
             }
     
             //  VARIABLES PARA EL EJE Y
             let valY={
                 numY:num_XY.ini_Y+num_XY.fin_Y,
                 pos_Y_en_X:(num_XY.fin_X*distacia_puntoXY)+mover_de_iz_XY, // Mueve el eje Y de izquierda a derecha
                 pos_ini_Y:25+mover_ar_ab_XY, //Yueve el eje Y a arriba o abajo ->25            
             }
             let valY_S={
                 pos_fin_Y:valY.pos_ini_Y+(distacia_puntoXY*valY.numY),
                 pos_media_ini_Y:valY.pos_Y_en_X-10,
                 sumaY:valY.pos_ini_Y
             }
             let valY3={
                 pos_media_fin_Y:valY_S.pos_media_ini_Y+separa_medida_dis  
             }
      
           //EJE Y
             lienzo1.beginPath(); 
             lienzo1.font="15pt Verdana";
             lienzo1.fillStyle=color_plano.letras_eje_XY;
             lienzo1.fillText("Y",valY.pos_Y_en_X-2,valY.pos_ini_Y-10);
             lienzo1.strokeStyle=color_plano.lineas_eje_XY;
             lienzo1.moveTo(valY.pos_Y_en_X,valY.pos_ini_Y); 
             lienzo1.lineTo(valY.pos_Y_en_X,valY_S.pos_fin_Y);
             lienzo1.moveTo(valY.pos_Y_en_X,valY.pos_ini_Y); 
             lienzo1.lineTo(valY.pos_Y_en_X,valY_S.pos_fin_Y);
             lienzo1.stroke(); 
             lienzo1.closePath(); 
     
             // Lineas de numeracion de Y
             lienzo1.beginPath(); 
             for(let j=0;j<=valY.numY;j++){   
               let puntos_Y=num_XY.ini_Y-j;     
               lienzo1.strokeStyle = color_plano.lineas_contador     
               lienzo1.moveTo(valY_S.pos_media_ini_Y,valY_S.sumaY);            
               lienzo1.lineTo(valY3.pos_media_fin_Y,valY_S.sumaY); // Lineas del contador del eje Y
               lienzo1.font="10pt Verdana";
               lienzo1.fillStyle = color_plano.numeracion;
               lienzo1.fillText(puntos_Y,valY3.pos_media_fin_Y,valY_S.sumaY+5);

               lienzo1.moveTo(valX.pos_ini_X,valY_S.sumaY);  // Linea cuadricular          
               lienzo1.lineTo(valX_S.pos_fin_X,valY_S.sumaY); // Linea cuadricular

               valY_S.sumaY+=distacia_puntoXY;
              
             }
             lienzo1.stroke(); 
             lienzo1.closePath();
     
           //EJE X
             lienzo1.beginPath(); 
             lienzo1.font="15pt Verdana";
             lienzo1.fillStyle=color_plano.letras_eje_XY;
             lienzo1.fillText("X",valX_S.pos_fin_X+10,valX.pos_X_en_Y+5);
             lienzo1.strokeStyle=color_plano.lineas_eje_XY;
             lienzo1.moveTo(valX.pos_ini_X,valX.pos_X_en_Y);
             lienzo1.lineTo(valX_S.pos_fin_X,valX.pos_X_en_Y);
             lienzo1.stroke();
             lienzo1.closePath();
     
             // Lineas de numeracion de X
               for(let i=0;i<=valX.numX;i++){  
                 lienzo1.strokeStyle = color_plano.lineas_contador;  
                 let puntos_X=i-num_XY.fin_X;        
                 lienzo1.moveTo(valX_S.sumaX,valX_S.pos_media_ini_X);
                 lienzo1.lineTo(valX_S.sumaX,valX3.pos_media_fin_X); // Lineas del contador del eje X
                 lienzo1.font="10pt Verdana";
                 lienzo1.fillStyle = color_plano.numeracion;
                 lienzo1.fillText(puntos_X,valX_S.sumaX-5,valX3.pos_media_fin_X+10);

                 lienzo1.moveTo(valX_S.sumaX,valY.pos_ini_Y); // Linea cuadricular
                 lienzo1.lineTo(valX_S.sumaX,valY_S.pos_fin_Y); // Linea cuadricular
                 
                 valX_S.sumaX+=distacia_puntoXY;
                 
               }                 
               lienzo1.stroke();
               lienzo1.closePath();  
     
               let distancia={
                  d_aX:distacia_puntoXY*puntosABC.aX,
                  d_aY:distacia_puntoXY*puntosABC.aY,
                  d_bX:distacia_puntoXY*puntosABC.bX,
                  d_bY:distacia_puntoXY*puntosABC.bY,
                  d_cX:distacia_puntoXY*puntosABC.cX,
                  d_cY:distacia_puntoXY*puntosABC.cY,
               }
     
                //PARA EL PUNTO A,B
                lienzo1.beginPath(); 
                lienzo1.font="15pt Verdana";
                lienzo1.fillStyle = "blue";
                lienzo1.fillText(`A: (${puntosABC.aX} , ${puntosABC.aY})`,valY.pos_Y_en_X+distancia.d_aX,valX.pos_X_en_Y-distancia.d_aY); //Punto A
                lienzo1.moveTo(valY.pos_Y_en_X+distancia.d_aX,valX.pos_X_en_Y-distancia.d_aY);
                lienzo1.fillStyle = "red";
                lienzo1.fillText(`B: (${puntosABC.bX} , ${puntosABC.bY})`,valY.pos_Y_en_X+distancia.d_bX,valX.pos_X_en_Y-distancia.d_bY); //Punto B
                lienzo1.strokeStyle = color_plano.clineas_triangulo;
                lienzo1.lineTo(valY.pos_Y_en_X+distancia.d_bX,valX.pos_X_en_Y-distancia.d_bY); // X y Y
                lienzo1.stroke(); 
                lienzo1.closePath();
     
                if(puntos_a_calcular==3){
     
                 //PARA EL PUNTO A,C
                lienzo1.beginPath(); 
                lienzo1.font="15pt Verdana";
                lienzo1.fillStyle = color_plano.letras_puntos_ABC;
                lienzo1.fillText("A",valY.pos_Y_en_X+distancia.d_aX,valX.pos_X_en_Y-distancia.d_aY); //Punto A
                lienzo1.moveTo(valY.pos_Y_en_X+distancia.d_aX,valX.pos_X_en_Y-distancia.d_aY);
                lienzo1.fillStyle = "green";
                lienzo1.fillText(`C: (${puntosABC.cX} , ${puntosABC.cY})`,valY.pos_Y_en_X+distancia.d_cX,valX.pos_X_en_Y-distancia.d_cY); //Punto B
                lienzo1.strokeStyle = color_plano.clineas_triangulo;
                lienzo1.lineTo(valY.pos_Y_en_X+distancia.d_cX,valX.pos_X_en_Y-distancia.d_cY); // X y Y
                lienzo1.stroke(); 
                lienzo1.closePath();
     
                //PARA EL PUNTO B,C
                lienzo1.beginPath(); 
                //lienzo1.font="15pt Verdana";
                lienzo1.fillStyle = color_plano.letras_puntos_ABC;
                lienzo1.fillText("B",valY.pos_Y_en_X+distancia.d_bX,valX.pos_X_en_Y-distancia.d_bY); //Punto A
                lienzo1.moveTo(valY.pos_Y_en_X+distancia.d_bX,valX.pos_X_en_Y-distancia.d_bY);
                lienzo1.fillText("C",valY.pos_Y_en_X+distancia.d_cX,valX.pos_X_en_Y-distancia.d_cY); //Punto B
                lienzo1.strokeStyle = color_plano.clineas_triangulo;
                lienzo1.lineTo(valY.pos_Y_en_X+distancia.d_cX,valX.pos_X_en_Y-distancia.d_cY); // X y Y
                lienzo1.stroke(); 
                lienzo1.closePath();
     
                }
                
             
           }
    }

});
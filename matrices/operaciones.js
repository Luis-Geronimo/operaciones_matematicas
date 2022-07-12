const app= new Vue({
    el:'#app',
    data:{
        text:"nada",
        titulo:'Opeaciones con Matrices',
        filA:1,
        colA:1,
        aleatorioA:5,
        filB:1,
        colB:1,
        aleatorioB:5,
        MatrizA:[],
        MatrizB:[],
        MatrizA_impri:"",
        MatrizB_impri:"",
        Suma:[],
        Resta:[],
        Multiplicar:[],
        MultiplicarXn:[],
        Multiplica_X_A:0,
        Multiplica_X_B:0,
        Potencia_A:0,
        Potencia_B:0,
        Sumar_A:0,
        Restar_A:0,
        Sumar_B:0,
        Restar_B:0,
        Resultado:"",
        Pasos:"",
        Matriz_transpuesta:[],
        Matriz_determinante_a:[],
        Matriz_adjunta:[],
        ver_gene_ma:""
    },
    methods:{
        Crear_matriz(tamanio){
            let matriz = new Array(tamanio);
            for (let i = 0; i < tamanio ; i++){ 
              matriz[i]=new Array(tamanio); 
            } 
            return matriz;
        },
         pivote(matriz, piv, cant) {
            let temp = 0;
            temp = matriz[piv][piv];            

            for (let y = 0; y < (cant + 1); y++) {
    
                matriz[piv][y] = matriz[piv][y] / temp;
            }
        },
        muestramatriz(matriz, cant) {
            let pasos="";
            let simbol="";
            for (let x = 0; x < cant; x++) {
                pasos=pasos+"["
                for (let y = 0; y < (cant + 1); y++) {
                    if((y+1)==cant){
                        simbol="\t|"
                    }else{
                        simbol=""
                    }
                    pasos=pasos+("\t" + matriz[x][y] +simbol);
                }
                pasos=pasos+("\t]\n");
            }

            return pasos;
    
        },
        muestramatriz2(matriz, cant) {
            let pasos="";
            for (let x = 0; x < cant; x++) {
                for (let y = 0; y < (cant + 1); y++) {
                    pasos=pasos+("\t" + matriz[x][y] + " |");
                }
                pasos=pasos+("\n");
            }

            return pasos;
    
        },
        hacerceros(matriz, piv, cant) {
            for (let x = 0; x < cant; x++) {
                if (x != piv) {
                    let c = matriz[x][piv];
                    for (let z = 0; z < (cant + 1); z++) {
                        let guardar= ((-1 * c) * matriz[piv][z]) + matriz[x][z];
                        let ver_val=Number(parseFloat(guardar).toFixed(2));
                        //let val=Number(parseFloat( ((-1 * c) * matriz[piv][z]) + matriz[x][z]).toFixed(2))
                        //matriz[x][z] =Number(parseFloat(guardar).toFixed(2))
                        matriz[x][z] =ver_val;
                    }
                }
            }
        },
        Gauss_Jordan(matriz,filas,columnas){
            let pasos="========PASOS========\n" 
            let resul="Los Valores para X son los siguientes:\n\n";
            let piv=0;
            if((filas+1)==columnas){
                //resul="Si se puede hacer"

                for (let i = 0; i < filas; i++) {
                    this.pivote(matriz, piv, filas);
        
                    pasos=pasos+("\nRenglon " + (i+ 1) + " entre el pivote\n");
                    
                    pasos=pasos+this.muestramatriz(matriz, filas);
        
                   // System.out.println("");
        
                   pasos=pasos+("Haciendo ceros\n");
                    this.hacerceros(matriz, piv, filas);
        
                    pasos=pasos+this.muestramatriz(matriz, filas);
                   // System.out.println("");
                    piv++;
                }

                for (let x = 0; x < filas; x++) {
                    resul=resul+("La variable X" + (x + 1) + " es: " + matriz[x][filas])+"\n";
                }

            }else{
                resul="No se pudo realizar\nLa matriz debe tener la dimensión nxn + 1"
            }

            this.Resultado=resul;
            this.Pasos=pasos;

        },
        matrizInversa(matriz) {
            let det=1/this.determinante(matriz).determinante;            
            let det1=this.determinante(matriz).determinante;
            
            let fila=matriz.length;
            let columna=matriz[0].length;
            let nmatriz;

            if(fila==columna){
                if(det1!=0){
                     nmatriz=this.matrizAdjunta(matriz);
                      this.multiplicarMatriz(det,nmatriz);
                }else{
                    this.Resultado="El determinante de la matriz es cero, la matriz es no invertible"
                }
            }else{
                this.Pasos="",
                this.Resultado="No se puedo resolver, la matriz tiene que ser cuadrada"
            }
            
           // return nmatriz;
            //this.Matriz_inversa=nmatriz
       },
       multiplicarMatriz(n,  matriz) {
        this.Resultado="La inversa de la Matriz es:\n";
            for(let i=0;i<matriz.length;i++){
                this.Resultado=this.Resultado+"[\t";
                for(let j=0;j<matriz.length;j++){
                    matriz[i][j]*=n;
                    let ver_resul=Number(parseFloat(matriz[i][j]).toFixed(2)) 
                    this.Resultado=this.Resultado+ver_resul+"\t";
                }
                this.Resultado=this.Resultado+"]\n"
            }           
                
         },
        matrizAdjunta(matriz){
            let fila=matriz.length;
            let columna=matriz[0].length;
    
                if(fila==columna){
                    let adjunta = this.matriz_Transpuesta(this.matrizCofactores(matriz)); 
                    return adjunta
                }else{
                    this.Resultado="La Matriz Tiene que ser cuadrada";
                }
                
         },
         matrizCofactores(matriz,tp){
            let nm=new Array (matriz.length)
            for(let i=0;i<matriz.length;i++) {
                nm [i]=new Array(matriz.length);
                for(let j=0;j<matriz.length;j++) {
                    let det=new Array (matriz.length-1);

                        for (let i = 0; i < det.length; i++) {
                            det [i]=new Array(matriz.length-1);
                          }
                          
                    let detValor;
                    for(let k=0;k<matriz.length;k++) {
                        
                        if(k!=i) {
                            for(let l=0;l<matriz.length;l++) {
                                //det [l]=new Array(matriz.length-1);
                                if(l!=j) {
                                let indice1=k<i ? k : k-1 ;
                                let indice2=l<j ? l : l-1 ;
                                det[indice1][indice2]=matriz[k][l];
                                }
                            }
                        }
                    }
                    detValor=this.determinante(det).determinante;
                    nm[i][j]=detValor * Math.pow(-1, i+j+2);
                }
            }
            if(tp=="MC"){

                let fila=matriz.length;
                let columna=matriz[0].length;
                let resul="";
                this.Pasos="";
    
                if(fila==columna){
                
                     resul="La matriz de Coofactores es:\n";
                    for (let i = 0; i < nm.length; i++) {  
                        resul=resul+"[\t"
                        for (let j = 0; j < nm[i].length; j++) {  
                            resul=resul+nm[i][j]+"\t"
                        }  
                        resul=resul+"]\n"                
                    }
                }else{
                    resul="La Matriz Tiene que ser cuadrada"
                }
                this.Resultado=resul;
            }
            
            return nm;
        },
        // matrizTranspuesta(matriz){
        //     nuevam=new Array (matriz[0].length);
           
        //     for(let i=0; i<matriz.length; i++)
        //     {
        //         nuevam [i]=new Array(matriz.length);
        //         for(let j=0; j<matriz.length; j++)
        //             nuevam[i][j]=matriz[j][i];
        //     }
        //     return nuevam;
        // },
        determinante(matriz,ver_matriz,fila,columna,ma){ 
            //matriz=this.MatrizA; 
            let mostrar="Determinante de la matriz "+ma+" es de "+fila+" * "+columna+"\n";   
            let determinante=0;
            let pasos="========PASOS========\n"  
            let Suma=""; 
            let det=0;   
            let simbol="";  
            let Matriz_determinante
            //Matriz_determinante.clear();

            if(fila==columna){

                if(matriz.length==2){
                   // pasos="";
                    determinante=(matriz[0][0]*matriz[1][1])-(matriz[1][0]*matriz[0][1]);
                    det=determinante
                    pasos=pasos+"("+matriz[0][0]+" * "+matriz[1][1]+") - ("+matriz[1][0]+" * "+matriz[0][1]+") = "+det
                    mostrar=mostrar+ver_matriz+"La determinates es: "+determinante;
                    this.Pasos=pasos; 
                   
               }else{

                for(let i = 0; i<matriz.length; i++){
                    pasos=pasos+"== "+(i+1)+" ==\n"
                        Matriz_determinante = this.Crear_matriz(matriz.length-1);
                       for(let j=0; j<matriz.length; j++){
                           if(j!=i){
                               for(let k=1; k<matriz.length; k++){
                                   let indice=-1;
                                   if(j<i)
                                       indice=j;
                                   else if(j>i)
                                       indice=j-1;
                                   Matriz_determinante[indice][k-1] = matriz[j][k];
                                pasos=pasos+Matriz_determinante[indice][k-1]+"\t";
                               }
                            pasos=pasos+"\n";
                           }
                       }
                       let op;
                       simbol=""
                       if(i%2==0){
                        simbol=" - "   
                        op=matriz[i][0] * this.determinante(Matriz_determinante).determinante;                                              
                           //determinante += matriz[i][0] * this.determinante(nm).determinante;
                           determinante += op;  
                          // op=matriz[i][0] * this.determinante(nm).determinante;  
                          //  let det=determinante
                          // pasos=pasos+""+determinante+" + "+matriz[i][0]+" * "+this.determinante(nm).determinante+"="+det+"\n"; 
                        //    pasos=pasos+matriz[i][0]+" * "+this.determinante(Matriz_determinante).determinante+"="+op+"\n";  
                        //    Suma=Suma+"("+op+")"+simbol   
                                              
                       }                            
                       else{  
                        simbol=" + "
                        op=matriz[i][0] * this.determinante(Matriz_determinante).determinante;  
    
                           determinante -= op;
                           //pasos=pasos+""+determinante+" - "+matriz[i][0]+" * "+this.determinante(nm).determinante+"="+det+"\n";
                        //    pasos=pasos+matriz[i][0]+" * "+this.determinante(Matriz_determinante).determinante+"="+op+"\n";
                        //    Suma=Suma+"("+op+")"+simbol
                           
                        } 

                        pasos=pasos+matriz[i][0]+" * "+this.determinante(Matriz_determinante).determinante+"="+op+"\n";  
                        Suma=Suma+"("+op+")"+simbol  
                       // let Suma=Suma+" + "+op                       
                   }
    
                   mostrar=mostrar+ver_matriz+"La determinates es: "+determinante;
                   det=determinante;  
                   this.Pasos=pasos+"\n"+Suma+" = "+det; 
                
               }      
              
               
               
            }else{
                mostrar=mostrar+ver_matriz+" La matriz tiene que ser cuadrada";
            }
                     
            //let resultado=`La ${determinante}`;
           // Matriz_determinante.splice(0, Matriz_determinante.length);
            return{
                mostrar,
                determinante
            }

            
        },
        // determinante2(matriz,ver_matriz,fila,columna,ma){ 
        //     let determinante=0;
        //     let Matriz_determinante
        //     let mostrar="Determinante de la matriz "+ma+" es de "+fila+" * "+columna+"\n"; 
        //     //Matriz_determinante.clear();

        //     if(fila==columna){

        //         if(matriz.length==2){
        //             determinante=(matriz[0][0]*matriz[1][1])-(matriz[1][0]*matriz[0][1]);                   
        //        }      
        //        for(let i = 0; i<matriz.length; i++){
        //             Matriz_determinante = this.Crear_matriz(matriz.length-1);
        //            for(let j=0; j<matriz.length; j++){
        //                if(j!=i){
        //                    for(let k=1; k<matriz.length; k++){
        //                        let indice=-1;
        //                        if(j<i)
        //                            indice=j;
        //                        else if(j>i)
        //                            indice=j-1;
        //                        Matriz_determinante[indice][k-1] = matriz[j][k];
        //                    }
        //                }
        //            }
                   
        //            if(i%2==0){                                            
        //                determinante += matriz[i][0] * this.determinante2(Matriz_determinante).determinante;
        //            }                            
        //            else{ 
        //                 determinante -= matriz[i][0] * this.determinante2(Matriz_determinante).determinante;
        //             } 
        //            // let Suma=Suma+" + "+op                       
        //        }

        //        mostrar=mostrar+ver_matriz+"La determinates es: "+determinante;
               
               
        //     }else{
        //         mostrar=mostrar+ver_matriz+" La matriz tiene que ser cuadrada";
        //     }
        //     return{
        //         mostrar,
        //         determinante
        //     }

            
        // },
        
        matriz_Transpuesta(matriz,tp){
            
           // let matriz_transp = this.Matriz_transpuesta;
          let matriz_transp=this.Matriz_transpuesta;
          let fila=matriz.length;
          let columna=matriz[0].length;
          matriz_transp=new Array();  
          
          this.Pasos="";
          this.Resultado="";
            if(tp=="T"){
                this.Resultado="La Matriz Transpuesta resultantes es de "+columna+" * "+fila+"\n";
            }else{
                this.Resultado="La Matriz Adjunta es de "+columna+" * "+fila+"\n";
            }

            for(let i=0; i<columna; i++){
                matriz_transp[i]= new Array();
                this.Resultado=this.Resultado+"[\t"
                for(let j=0; j<fila; j++){
                    matriz_transp[i][j]=matriz[j][i];
                    this.Resultado=this.Resultado+matriz_transp[i][j]+"\t"                    
                }
                this.Resultado=this.Resultado+"]\n"
            }
            return matriz_transp;
        },  
        operaciones_matrices(pasar_matriz,fila,columna,num_N,op){
            let matriz=this.MultiplicarXn;
             matriz=new Array();
             this.Pasos=""
                this.Resultado="La Matriz resultantes es de "+fila+" * "+columna+"\n";                  
                let resul=0;
                let pasos_operacion="\t========PASOS========\n"
                let simbol="";                  
                for(let i=0;i< pasar_matriz.length;i++){
                    matriz[i]= new Array();
                    this.Resultado=this.Resultado+"[\t"
                    for(let j=0;j< pasar_matriz[i].length;j++){
                        pasos_operacion= pasos_operacion+" Posicion "+i+","+j+": ";

                        if (op=="*") {
                            resul=pasar_matriz[i][j]*num_N;
                        }
                        if (op=="^") {
                            resul=Math.pow(pasar_matriz[i][j],num_N)
                        }
                        if (op=="+") {
                            resul=pasar_matriz[i][j]+num_N;
                        }
                        if (op=="-") {
                            resul=pasar_matriz[i][j]-num_N;
                        }
                        matriz[i][j]= resul;
                        this.Resultado=this.Resultado+matriz[i][j]+"\t"
                        pasos_operacion =pasos_operacion+simbol+"("+ pasar_matriz[i][j]+" "+op+" "+num_N+")= "+resul+"\n";
                        simbol=""
                    }
                    this.Pasos=pasos_operacion;
                    this.Resultado=this.Resultado+"]\n"
                }
        },
        
        invertir_matriz(){
            let matriz_A=this.MatrizA;
            let matriz_b=this.MatrizB;
            let impriA=this.MatrizA_impri;
            let impriB=this.MatrizB_impri;

            let fila_A=this.filA;
            let columaA=this.colA;
            let num_aleA=this.aleatorioA

            let fila_B=this.filB;
            let columaB=this.colB;
            let num_aleB=this.aleatorioB

            this.MatrizA=matriz_b;
            this.MatrizB=matriz_A;
            
            this.MatrizA_impri=impriB;
            this.MatrizB_impri=impriA;

            this.filA=fila_B;
            this.colA= columaB
            this.aleatorioA=num_aleB
            this.filB=fila_A;
            this.colB= columaA
            this.aleatorioB=num_aleA


            
        },
        actualizar_array(matriz_string,matriz){
            
            let separar =  (matriz_string.split("")+"").replace(/,/g,"")
            let separar_x_esapcio=(separar.split("\t"))
            let borra_corchete=(separar_x_esapcio.filter((item) => item !== '['))
            let borra_corchete2=(borra_corchete.filter((item) => item !== ']'))
                      
            let nueva_matriz = (borra_corchete2.filter((item) => item !== '\n'))+"" // Elimina el \n de todo el array
           // let nueva_matriz2 = (nueva_matriz.filter((item) => item !== ' '))+""
            // Funcion para convertir de string a numeros cada elemento del array
            let matriz_numero = nueva_matriz.split(',').map(Number);

            // matriz_numero.pop(); // Para eliminar el ultimo elemento del array  
           matriz_numero.shift();

            this.ver_gene_ma=matriz_numero
           

           
             
                let contador=0;
                let asignar;
            for (let i = 0; i < matriz.length; i++) {
                
                for (let j = 0; j < matriz[i].length; j++) {                                        
                    asignar=matriz_numero[contador];
                    matriz[i][j]=asignar;
                   contador++;
                }
                
            }

        },
        num_ale(num_maximo){
            let numeros=Math.floor(Math.random()*num_maximo);
            return numeros;
        },
        Generar_Matriz(nom_matriz,filas, columas, num_maximo){
            this.Pasos="";
            this.Resultado=""
            let matriz_imprimi="";
            nom_matriz.splice(0, nom_matriz.length);
            //nom_matriz= new Array(filas);
            for (let i = 0; i < filas; i++) {
                nom_matriz[i]= new Array();
                matriz_imprimi= matriz_imprimi+"\t[\t";
                for (let j = 0; j < columas; j++) {
                    nom_matriz[i][j]=this.num_ale(num_maximo);
                matriz_imprimi= matriz_imprimi+nom_matriz[i][j]+"\t"
                }
                matriz_imprimi= matriz_imprimi+"]\t\n";
            }
            
            return matriz_imprimi;
        },
        Sumar(){
            this.Pasos="";
            if(this.filA==this.filB && this.colA==this.colB){
                this.Suma=new Array();
                this.Resultado="La Matriz resultantes es de "+this.filA+" * "+this.colB+"\n";                  
                let resul=0;
                let pasos_operacion="\t========PASOS========\n"
                let simbol="";                  
                for(let i=0;i< this.MatrizA.length;i++){
                    this.Suma[i]= new Array();
                    this.Resultado=this.Resultado+"[\t"
                    for(let j=0;j< this.MatrizB[i].length;j++){
                        pasos_operacion= pasos_operacion+" Posicion "+i+","+j+": ";
                        resul=this.MatrizA[i][j]+this.MatrizB[i][j];
                        this.Suma[i][j]= resul;
                        this.Resultado=this.Resultado+this.Suma[i][j]+"\t"
                        pasos_operacion =pasos_operacion+simbol+"("+this.MatrizA[i][j]+" + "+this.MatrizB[i][j]+")= "+resul+"\n";
                        simbol=""
                    }
                    this.Resultado=this.Resultado+"]\n"
                    this.Pasos=pasos_operacion;
                }
            }else{
                this.Resultado="No se pudo reliazar la Suma, La Matriz A y la Matriz B no son del mismo tamaño"
            }
        },

        Restar(){
            this.Pasos="";
            if(this.filA==this.filB && this.colA==this.colB){
                this.Resta=new Array();
                this.Resultado="La Matriz resultantes es de "+this.filA+" * "+this.colB+"\n";
                let resul=0;
                let pasos_operacion="\t========PASOS========\n"
                let simbol="";
                
                for(let i=0;i< this.MatrizA.length;i++){
                    this.Resta[i]= new Array();
                    this.Resultado=this.Resultado+"[\t"
                    for(let j=0;j< this.MatrizB[i].length;j++){
                        pasos_operacion= pasos_operacion+" Posicion "+i+","+j+": ";
                        resul=this.MatrizA[i][j]-this.MatrizB[i][j];
                        this.Resta[i][j]= resul;
                        this.Resultado=this.Resultado+this.Resta[i][j]+"\t"
                        pasos_operacion =pasos_operacion+simbol+"("+this.MatrizA[i][j]+" - "+this.MatrizB[i][j]+") = "+resul+"\n";
                        simbol=""
                    }
                    simbol=""
                    this.Pasos=pasos_operacion;
                    this.Resultado=this.Resultado+"]\n"
                }
            }else{
                this.Resultado="No se pudo reliazar la Resta, La Matriz A y la Matriz B no son del mismo tamaño"
            }    
        },
        Multiplicacion(){
            this.Pasos="";
            if(this.colA==this.filB){
                this.Resultado="La Matriz resultantes es de "+this.filA+" * "+this.colB+"\n";
                let Multiplicar=new Array();
                let arregloA=this.MatrizA;
                let arregloB=this.MatrizB;
                let resul=0;
                let pasos_operacion="\t========PASOS========\n"
                let simbol="";

                for(let i=0;i<arregloA.length;i++){
                    Multiplicar[i]= new Array();
                    this.Resultado=this.Resultado+"[\t"
                    for(let j=0;j<arregloB[i].length;j++){         
                        pasos_operacion= pasos_operacion+" Posicion "+i+","+j+":\n";                        
                        for (let k = 0; k < arregloB.length; k++) {
                            resul+=(arregloA[i][k]*arregloB[k][j]);
                            pasos_operacion =pasos_operacion+simbol+"("+arregloA[i][k]+" * "+arregloB[k][j]+")";
                            simbol=" + "
                        }
                        simbol=""
                        pasos_operacion=pasos_operacion+" = "+resul+"\n";
                        Multiplicar[i][j]=resul;
                        this.Resultado= this.Resultado+Multiplicar[i][j]+"\t"
                        resul=0;
                        //pasos_multiplicacion=pasos_multiplicacion+"\n___________________________________________\n"
                        
                    }
                this.Resultado=this.Resultado+"]\n"
                }               
                this.Pasos=pasos_operacion;
                //this.Pasos=pasos_multiplicacion;
            }else{
                this.Resultado=`No se pudo realizar la multiplicacion de la Matriz A por la Matriz B, 
                el numero de columnas de la Matriz A debe ser igual al numero de filas de la Matriz B`;
            }
        }         
    }
})
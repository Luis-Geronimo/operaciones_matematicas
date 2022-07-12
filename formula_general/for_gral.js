Vue.component('for_geral',{
    template://html
    `<div class="container my-2">

        <div class="card">
            <div class="card-header bg-success">
            <h3 class="text-light text-center">Solucion</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-5">

                      <h5 class="text-center text-primary">Para resolver ecuaciones de segundo grado existe un método llamado "Fórmula general", la formula de la 
                                  ecuacion es la siguiente:
                      </h5>
                      <h5 class="text-info bg-light"><b>{{formula}}</b></h5>

                      <h6 class="text-center text-secundary">Tiene una expresion discriminte, que se muestra a continuacion: <b>(b<sup>2</sup> - 4*a*c)</b></h6>
                      <h6>El discriminante puede ser positivo, cero o negativo y esto determina cuántas soluciones (o raíces) existen para la ecuación cuadrática dada:</h6>
                      <ul>
                      <li>Un discriminante <b>positivo</b> indica que la cuadrática tiene <b>dos soluciones reales distintas</b>.</li>
                      <li>Un discriminante de <b>cero</b> indica que la cuadrática tiene una <b>solución real repetida</b>.</li>
                      <li>Un discriminante <b>negativo</b> indica que ninguna de las soluciones <b>son números reales</b>.</li>
                    </ul>
                    </div>
                
                    <div class="col-lg-7">
                        <div class="text-center">
                        <h4 class="text-primary">Resolucion de la ecuacion:</h4>
                        <h5>{{valABC()}}</h5>
                            <div class="text-success" style="overflow-x:auto;">
                            
                            <h5>{{expresion(valA,valB,valC)}}</h5>
                            <h5 v-if="resta_den_raiz>=0">{{operacion()}}</h5>
                            <h5 v-if="resta_den_raiz>=0">{{resultado_x1()}}</h5>
                            <h5 v-if="resta_den_raiz>=0">{{resultado_x2()}}</h5>
                            <h5 class="text-danger" v-if="resta_den_raiz<0">No tiene solucion real ya que el discrimiante es igual a <b>{{resta_den_raiz}}</b> {{no_solucion_real(valA,valB,valC)}}</h5>


                            
                            </div>                               
                            
                        </div>                        
                    </div>

                </div>
                                        
            </div>
        </div>
     <br>
    </div>`,
    props:{
      A_val:Number,
      B_val:Number,
      C_val:Number,
      
    },
    data (){
        return{
            valA:this.A_val,
            valB:this.B_val,
            valC:this.C_val,
            b_x_menos:0,
            b_cuadrado:0,
            multi_4ac:0,
            resta_den_raiz:0,
            dos_x_a:0,
            resul_raiz:0,
            x1:0,
            x2:0,
            formula: "$$x1, x2 = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$",
            no_solucion:"",
            ver_for:null,
        }
    },
    methods:{
        valABC(){
          let sib="+";
          let sic="+";
          if(this.valB<0){
            sib=""
          }
          if(this.valC<0){
            sic=""
          }
                    
           this.ver_for= "$$"+this.valA+"x^2 "+sib+" "+this.valB+" x "+sic+" "+this.valC+" = 0$$";
            return this.ver_for;
        },
        formula_geral(formula){
            formula= "$$x1, x2 = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$";
            return formula;
        },
        no_solucion_real(a,b,c){
         let expre="$$  { \\sqrt{"+b+"^2-4*"+a+"*"+c+"}} = { \\sqrt{"+this.resta_den_raiz+"}}$$"
          return expre;
        },
        expresion(a,b,c,expre){
            expre= "$$x = {-("+b+") \\pm \\sqrt{"+b+"^2-4*"+a+"*"+c+"} \\over 2*"+a+"}$$";
           return expre;
         },
        operacion(expre2) {
          let mul_4ac= 4 * this.valA * this.valC;
          let b_cuadrado=Math.pow(this.valB, 2);
          let resta=b_cuadrado-mul_4ac
          this.multi_4ac=mul_4ac*-1;
          let simbol="  ";
          if(mul_4ac<=0){
            simbol=" + "
          }

            expre2 =
              "$$x = {" +
              (this.b_x_menos = this.valB * -1) +
              " \\pm \\sqrt{" +
              (this.b_cuadrado = b_cuadrado) +simbol
               +
              (this.multi_4ac) +
              "} \\over" +
              (this.dos_x_a = 2 * this.valA) +
              "} = {" +
              this.b_x_menos +
              "\\pm \\sqrt{" +
              (this.resta_den_raiz = resta) +
              "}\\over" +
              this.dos_x_a +
              "} = {" +
              this.b_x_menos +
              " \\pm" +
              (this.resul_raiz = Number(
                parseFloat(Math.sqrt(this.resta_den_raiz)).toFixed(2)
              )) +
              "\\over" +
              this.dos_x_a +
              "} $$";
            return expre2;
          },
          resultado_x1(resultado_x1) {
            resultado_x1 =
              "$$ x1= {" +
              this.b_x_menos +
              " + " +
              this.resul_raiz +
              " \\over " +
              this.dos_x_a +
              "} = {" +
              (this.x1 = Number(
                parseFloat(this.b_x_menos + this.resul_raiz).toFixed(2)
              )) +
              "\\over " +
              this.dos_x_a +
              "}=" +
              Number(parseFloat(this.x1 / this.dos_x_a).toFixed(2)) +
              " $$";
            return resultado_x1;
          },
          resultado_x2(resultado_x2) {
            resultado_x2 =
              "$$ x2= {" +
              this.b_x_menos +
              " - " +
              this.resul_raiz +
              " \\over " +
              this.dos_x_a +
              "} = {" +
              (this.x2 = Number(
                parseFloat(this.b_x_menos - this.resul_raiz).toFixed(2)
              )) +
              "\\over " +
              this.dos_x_a +
              "}=" +
              Number(parseFloat(this.x2 / this.dos_x_a).toFixed(2)) +
              " $$";
            return resultado_x2;
          },
    }


});


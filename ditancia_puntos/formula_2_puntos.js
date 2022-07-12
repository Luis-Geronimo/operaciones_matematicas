Vue.component('form_2_puntos',{
    template: //html
    ` 
          <div class="center">
              <div class="row">

                  <div class="col-lg-6">
                     <h4 class="text-center text-secondary"><b>Punto A</b></h4>
                      <div class="center">
                          <div class="row">
                            <div class="col-lg-6">
                                <label for="punto_AX1"><b>Valor de X1</b></label>
                                <input type="number" name="punto_AX1" id="punto_AX1" class="form form-control" v-model="punto_AX1">
                            </div>
                            <div class="col-lg-6">
                                <label for="punto_AY1"><b>Valor de Y1</b></label>
                                <input type="number" name="punto_AY1" id="punto_AY1" class="form form-control" v-model="punto_AY1">
                            </div>
                          </div>
                      </div>
                  </div>

                  <div class="col-lg-6">
                    <h4 class="text-center text-secondary"><b>Punto B</b></h4>
                     <div class="center">
                         <div class="row">
                           <div class="col-lg-6">
                               <label for="punto_BX2"><b>Valor de X2</b></label>
                               <input  type="number" name="punto_BX2" id="punto_AX1" class="form form-control" v-model="punto_BX2">
                           </div>
                           <div class="col-lg-6">
                               <label for="punto_BY2"><b>Valor de Y2</b></label>
                               <input  type="number" name="punto_BY2" id="punto_AY1" class="form form-control" v-model="punto_BY2">
                           </div>
                         </div>
                     </div>
                 </div>

              </div>
              
              <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h3 class="text-center text-primary"><b>A:</b> ({{punto_AX1}} , {{punto_AY1}})</h3>
                    </div>
                    <div class="col-lg-6">
                         <h3 class="text-center text-danger"><b>B:</b> ({{punto_BX2}} , {{punto_BY2}})</h3>
                    </div>
                </div>
               </div>
               
               <div class="center text-center">
                    <div class="row">
                        <div class="col-lg-6">
                            <p> <b>Dadas las coordenadas de dos puntos distintos:</b></p>
                            <img src="img_formula/A_B_puntos.png" class="rounded float-center" alt="">
                        </div> 
                        
                        <div class="col-lg-6">
                             <p>La <b>fórmula de la distancia entre dos puntos</b> es:</p>                    
                             <img src="img_formula/A_B_formula.png" class="rounded float-center" alt="">
                        </div> 

                    </div>
                    
                </div>

                <hr>
               <div class="card">
                    <div class="card-header bg-success">
                    <h3 class="text-light text-center">Solucion</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                        
                            <div class="col-lg-5">
                                <div class="text-center">
                                    <h5><b>x1: </b>{{punto_AX1}}, <b>y1: </b>{{punto_AY1}}, <b>x2: </b>{{punto_BX2}}, <b>y2: </b>{{punto_BY2}}<h5>
                                    <hr>
                                    <h5>d: (A,B) = √({{punto_BX2}} - {{punto_AX1}})^2 + ({{punto_BY2}} - {{punto_AY1}})^2<h5>
                                    <hr>
                                    <h5>d: (A,B) = √({{resta_x=punto_BX2-punto_AX1}})^2 + ({{resta_y=punto_BY2-punto_AY1}})^2<h5>
                                    <hr>
                                    <h5>d: (A,B) = √{{suma_x=Math.pow(resta_x,2)}} + {{suma_y=Math.pow(resta_y,2)}}</h5>
                                    <hr>
                                    <h5>d: (A,B) = √{{resultado=suma_x+suma_y}}</h5>
                                    <hr>
                                    <h5>d: (A,B) = {{Math.sqrt(resultado)}}</h5>
                                </div>
                            </div>

                            <div class="col-lg-6">  
                             
                            <plano :aX="punto_AX1" :aY="punto_AY1" :bX="punto_BX2" :bY="punto_BY2" :cX="0" :cY="0" :puntos="2"></plano>  
                             </div>

                        </div>
                                                
                    </div>
                </div>
                
          </div>          
         

    
    `,

    data(){
        return{
            punto_AX1: 0,
            punto_AY1: 0,
            punto_BX2: 0,
            punto_BY2: 0,
            resultado_cua:0,
            resta_x:0,
            resta_y:0,
            suma_x:0,
            suma_y:0,
            resultado:0
        }
    },
    methods:{
        ver_plano(){
            this.$refs.plano
        }
    }
});
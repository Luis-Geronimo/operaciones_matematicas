Vue.component('form_3_puntos',{
    template://html
    `
        <div class="center">
              <div class="row">

                  <div class="col-lg-4">
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

                  <div class="col-lg-4">
                    <h4 class="text-center text-secondary"><b>Punto B</b></h4>
                     <div class="center">
                         <div class="row">
                           <div class="col-lg-6">
                               <label for="punto_BX2"><b>Valor de X2</b></label>
                               <input  type="number" name="punto_BX2" id="punto_AX1" class="form form-control" v-model="punto_BX2">
                           </div>
                           <div class="col-lg-6">
                               <label for="punto_BY2"><b>Valor de Y2</b></label>
                               <input type="number" name="punto_BY2" id="punto_AY1" class="form form-control" v-model="punto_BY2">
                           </div>
                         </div>
                     </div>
                 </div>

                 <div class="col-lg-4">
                    <h4 class="text-center text-secondary"><b>Punto C</b></h4>
                     <div class="center">
                         <div class="row">
                           <div class="col-lg-6">
                               <label for="punto_CX3"><b>Valor de X3</b></label>
                               <input  type="number" name="punto_CX3" id="punto_CX1" class="form form-control" v-model="punto_CX3">
                           </div>
                           <div class="col-lg-6">
                               <label for="punto_CY3"><b>Valor de Y3</b></label>
                               <input type="number" name="punto_CY3" id="punto_CY1" class="form form-control" v-model="punto_CY3">
                           </div>
                         </div>
                     </div>
                 </div>

              </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                       <h3 class="text-center text-primary"><b>A:</b> ({{punto_AX1}} , {{punto_AY1}})</h3>
                    </div>
                    <div class="col-lg-4">
                       <h3 class="text-center text-danger"><b>B:</b> ({{punto_BX2}} , {{punto_BY2}})</h3>
                    </div>
                    <div class="col-lg-4">
                        <h3 class="text-center text-success"><b>C:</b> ({{punto_CX3}} , {{punto_CY3}})</h3>
                    </div>
                 </div>
            </div>

            <div class="card">
            <div class="card-header bg-success">
            <h3 class="text-light text-center">Solucion</h3>
            </div>
            <div class="card-body">
                <div class="row">
                
                    <div class="col-lg-4">
                        <div class="text-center">
                            <h4 class="text-primary"><b>(A,B)</b></h4>
                            <h6><b>x1: </b>{{punto_AX1}}, <b>y1: </b>{{punto_AY1}}, <b>x2: </b>{{punto_BX2}}, <b>y2: </b>{{punto_BY2}}<h4>
                            <hr>
                            <h6>d: (A,B) = √({{punto_BX2}} - {{punto_AX1}})^2 + ({{punto_BY2}} - {{punto_AY1}})^2<h4>
                            <hr>
                            <h6>d: (A,B) = √({{resta_ab_x=punto_BX2-punto_AX1}})^2 + ({{resta_ab_y=punto_BY2-punto_AY1}})^2<h4>
                            <hr>
                            <h6>d: (A,B) = √{{suma_ab_x=Math.pow(resta_ab_x,2)}} + {{suma_ab_y=Math.pow(resta_ab_y,2)}}</h4>
                            <hr>
                            <h6>d: (A,B) = √{{resultado_ab=suma_ab_x+suma_ab_y}}</h4>
                            <hr>
                            <h6>d: (A,B) = {{resultado_final_ab=Number(parseFloat(Math.sqrt(resultado_ab)).toFixed(2))}}</h4>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="text-center">
                            <h4 class="text-danger"><b>(A,C)</b></h4>
                            <h6><b>x1: </b>{{punto_AX1}}, <b>y3: </b>{{punto_CY3}}, <b>x3: </b>{{punto_CX3}}, <b>y1: </b>{{punto_AY1}}<h4>
                            <hr>
                            <h6>d: (A,C) = √({{punto_CX3}} - {{punto_AX1}})^2 + ({{punto_CY3}} - {{punto_AY1}})^2<h4>
                            <hr>
                            <h6>d: (A,C) = √({{resta_ac_x=punto_CX3-punto_AX1}})^2 + ({{resta_ac_y=punto_CY3-punto_AY1}})^2<h4>
                            <hr>
                            <h6>d: (A,C) = √{{suma_ac_x=Math.pow(resta_ac_x,2)}} + {{suma_ac_y=Math.pow(resta_ac_y,2)}}</h4>
                            <hr>
                            <h6>d: (A,C) = √{{resultado_ac=suma_ac_x+suma_ac_y}}</h4>
                            <hr>
                            <h6>d: (A,C) = {{resultado_final_ac=Number(parseFloat(Math.sqrt(resultado_ac)).toFixed(2))}}</h4>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="text-center">
                            <h4 class="text-success"><b>(A,B)</b></h4>
                            <h6><b>x2: </b>{{punto_BX2}}, <b>y2: </b>{{punto_BY2}}, <b>x3: </b>{{punto_CX3}}, <b>y3: </b>{{punto_CY3}}<h4>
                            <hr>
                            <h6>d: (B,C) = √({{punto_CX3}} - {{punto_BX2}})^2 + ({{punto_CY3}} - {{punto_BY2}})^2<h4>
                            <hr>
                            <h6>d: (B,C) = √({{resta_bc_x=punto_CX3-punto_BX2}})^2 + ({{resta_bc_y=punto_CY3-punto_BY2}})^2<h4>
                            <hr>
                            <h6>d: (B,C) = √{{suma_bc_x=Math.pow(resta_bc_x,2)}} + {{suma_bc_y=Math.pow(resta_bc_y,2)}}</h4>
                            <hr>
                            <h6>d: (B,C) = √{{resultado_bc=suma_bc_x+suma_bc_y}}</h4>
                            <hr>
                            <h6>d: (B,C) = {{resultado_final_bc=Number(parseFloat(Math.sqrt(resultado_bc)).toFixed(2))}}</h4>
                        </div>
                    </div>                   
                </div>

                <div class="row">
                    <h4 class="text-center">El perímetro del triángulo será la suma de la longitud de los 3 lados:</h4> 
                   
                    <div class="col-lg-6">
                    <plano :aX="punto_AX1" :aY="punto_AY1" :bX="punto_BX2" :bY="punto_BY2" :cX="punto_CX3" :cY="punto_CY3" :puntos="3"></plano>  
                    </div>               
                        
                    <div class="col-lg-6">  

                    
                    <div class="text-center" v-if="resultado_final_ab!=0 || resultado_final_ac!=0 || resultado_final_bc!=0">
                        <h5 class="text-center" v-if="resultado_final_ab==resultado_final_ac && resultado_final_bc==resultado_final_ac"><b>Tipo:</b> Equilatero -> Todos sus lados son iguales.</h5>
                        <h5 class="text-center" v-if="resultado_final_ab==resultado_final_ac || resultado_final_bc==resultado_final_ac"><b>Tipo:</b> Isoceles -> Dos de sus tres lados son de igual longitud.</h5>
                        <h5 class="text-center" v-if="resultado_final_ab!=resultado_final_ac && resultado_final_bc!=resultado_final_ac"><b>Tipo:</b> Escaleno -> Todos sus lados son de diferente longitud.</h5>
                     </div>
                    
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                            <h3 class="text-center text-primary"><b>A:</b> ({{punto_AX1}} , {{punto_AY1}})</h3>
                            </div>
                            <div class="col-lg-4">
                            <h3 class="text-center text-danger"><b>B:</b> ({{punto_BX2}} , {{punto_BY2}})</h3>
                            </div>
                            <div class="col-lg-4">
                                <h3 class="text-center text-success"><b>C:</b> ({{punto_CX3}} , {{punto_CY3}})</h3>
                            </div>
                        </div>
                    </div> 
                    <h5 class="text-center"><b>P: {{resultado_final_ab}} + {{resultado_final_ac}} + {{resultado_final_bc}} = <b>{{resultado_final_ab+resultado_final_ac+resultado_final_bc}}</h5> 
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
            punto_CX3: 0,
            punto_CY3: 0,
            resultado_ab:0,
            resultado_ac:0,
            resultado_bc:0,
            resta_ab_x:0,
            resta_ab_y:0,
            resta_ac_x:0,
            resta_ac_y:0,
            resta_bc_x:0,
            resta_bc_y:0,
            suma_ab_x:0,
            suma_ab_y:0,
            suma_ac_x:0,
            suma_ac_y:0,
            suma_bc_x:0,
            suma_bc_y:0,
            resultado_final_ab:0,
            resultado_final_ac:0,
            resultado_final_bc:0,
            tipo_triangulo:''

        }
    }
});
import React from 'react';
import '../../../../Styles/Calculator.css' 
import { useState } from 'react';




function Calculator () {

     const [Calc, setCalc] = useState("");
     const [result, setResult] = useState("");
     

     const ops = ["/", "*", "+", "-", "."];

     const updateCalc = (value) =>{
if(
     ops.includes(value) && Calc === "" ||
     ops.includes(value) &&ops.includes(Calc.slice(-1)

     
     )
){
     return;
}
     setCalc(Calc + value);     

     if(!ops.includes(value)){
        setResult(eval(Calc + value).toString())  
     }

     }
         
     

     const createDigits = () =>{
          const digits = [];

          for(let i =1; i < 10; i++){
             digits.push(
               <button 
                     onClick={() =>updateCalc(i.toString())} 
                     key ={i}>{i}
               </button>
             )  
          }

          return digits;
     }

     const Calculate =()=> {
          setCalc(eval(Calc).toString());
     }

     const deleteLast = ()=> {
          if(Calc == " "){
               return;
          }

          const value =Calc.slice(0, -1);
          setCalc(value);
     }
     return ( 

          <div className="app-container">
          <div className="calculator">
          <div className="display">

          {result ? <span>{result}</span> : ''} 
          
          { Calc || "0"}

          </div>

          <div className="operators">

               <button onClick ={() => updateCalc("/")}>/
               </button>
               <button onClick ={()=> updateCalc("*")}>*
               </button>
               <button onClick ={()=> updateCalc("+")}>+
               </button>
               <button onClick ={()=> updateCalc("-")}>-</button>

               <button onClick={deleteLast}>DEL</button>
          </div>

          <div className="digits">
               {createDigits()}
               <button onClick ={() => updateCalc("0")}>0
               </button>
               <button onClick ={() => updateCalc(".")}>.
               </button>
               <button onClick={Calculate}>=</button>
          </div>

          </div>

          </div>

          
     );
}





export default Calculator;


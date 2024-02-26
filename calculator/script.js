        // 1.display number in  textbox

        function displayNumber(num){
            result.value+=num
        }
        
        //2.clear textbox
        
        function clearBox(){
            result.value=''
        }
        
        //3.evaluate expression
        
        function evaluateExp(){
            //method-1
            // exp=result.value//6*6
            // output=eval(exp)
            // result.value=output
        
        
        //method-2
        result.value=eval(result.value)
        }
        
        
        //4. Remove last item from text box

        function removelastitem(){
            result.value=result.value.slice(0,-1)
        }

/*
 JS is single thread language.
 All execution in js done in thread.

? Javascript Execution Context
 Global execution context this variable me hota he. [{}]

? Javascript Execution Context Types -> first 2 important
1. Global execution context
2. Function execution context
3. Eval execution context

? Execution in JS ->
1. Global execution
2. Memory Creation phase
3. Execution phase                     

?%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                                                                    
let val1 =10
let val2 =5

function addNum(num1,num2){
let total = num1+num2
return total
}
let result1 =addNum(va1,val2)
let result2 =addNum(10,20)

? Execution 
?1. Global execution hoga this variable me. ye phase only ak hi bar bnta he

?2. Memory Phase
isme sare variable undefine se initialize honge.
val1 -> undefined
val2 -> undefined
addnum -> definition
result1 -> undefined
result2 -> undefined

?3. Execution Phase
val1 <- 10
val2 <- 5
addnum -> iske liye fir se nya environment bnega 
 new variable environment + executino thread

    ?1. Memory Phase
    val1 -> undefined
    val2 -> undefined
    total-> undefined

    ?2. Execution Phase
    num1 ->10
    num2 ->5
    total ->15
ye total global execution ke pas jayegi.
? addnum function complete hote hi jo ye new environment bna he vo delete ho jayega.
*/



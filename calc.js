

// selecting 

let input = document.querySelector("input")


// adding value 

function adding(a){
    input.value += a
}

// clear value 

function clr(){
    input.value = ""
}

// Del value

function del(){
    input.value = input.value.slice(0,input.value.length-1)

}


// final 

function final(){
    input.value = eval(input.value)
}


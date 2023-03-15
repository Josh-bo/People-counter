// count.innerHTML = 5
let counts = 0


function increse(){
    counts += 1
    count.innerHTML = counts
    // console.log(counts)
} 

function save(){
    para.innerText +=  counts + "-"
    count.textContent = 0
    plus()
    counts = 0

}

function plus(){
    let total = Number(counts)
    add.innerHTML = total
}

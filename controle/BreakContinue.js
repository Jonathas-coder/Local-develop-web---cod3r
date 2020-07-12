const list = [1,2,3,4,5,6,7,8,9,10]
for (let i in list){
    if (i == 3){
        break
    }
    console.log(`${i}=${list[i]}`)
}
for (let i in list){
    if (i == 5){
        continue
    }
    console.log(`Indicie ${i}= ${list[i]}`)//vai pular o indicie 5
}

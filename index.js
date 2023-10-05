const prompt = require("prompt-sync")({sigint: true});
let nome = prompt("Digite seu nome: ");
let xp = prompt("Digite quanto de xp vc adquiriu: ");


if (xp <= 1000) {
    grau = "FERRO"
    console.log("O Herói de nome "+nome+"" ,"está no nível de "+grau+"" ,"Com um total de "+xp+"", "xp!!!"); 
}else if (xp > 1000 && xp <= 2000) {
     grau = "BRONZE"
    console.log("O Herói de nome "+nome+"" ,"está no nível de "+grau+"" ,"Com um total de "+xp+"", "xp!!!"); 
}else if (xp > 2000 && xp <= 5000) {
    grau = "PRATA"
    console.log("O Herói de nome "+nome+"" ,"está no nível de "+grau+"" ,"Com um total de "+xp+"", "xp!!!"); 
}if (xp > 6000 && xp <= 7000) {
    grau = "OURO"
    console.log("O Herói de nome "+nome+"" ,"está no nível de "+grau+"" ,"Com um total de "+xp+"", "xp!!!"); 
}if (xp > 7000 && xp <= 8000) {
    grau = "PLATINA"
    console.log("O Herói de nome "+nome+"" ,"está no nível de "+grau+"" ,"Com um total de "+xp+"", "xp!!!"); 
}else if (xp > 8000 && xp <= 9000) {
    grau = "ASCENDENTE"
    console.log("O Herói de nome "+nome+"" ,"está no nível de "+grau+"" ,"Com um total de "+xp+"", "xp!!!"); 
}else if (xp > 9000 && xp <= 10000) {
    grau = "IMORTAL"
    console.log("O Herói de nome "+nome+"" ,"está no nível de "+grau+"" ,"Com um total de "+xp+"", "xp!!1!"); 
}else if (xp > 10000) {
    grau = "RADIANTE"
    console.log("O Herói de nome "+nome+"" ,"está no nível de "+grau+"" ,"Com um total de "+xp+"", "xp!!1!"); 
}
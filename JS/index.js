// Calculando as média das notas dos alunos //

var nomes = [" Lucas Oliveira", "Carlos Pereira", "Kamila Garcia", "Joyce Nakashima"];
var notasA = [5.5, 7.0, 8.5, 9.5];
var notasB = [4.5, 6.5, 6.5, 10.0];

function media(n1, n2) {

    return (n1 + n2) / 2

}

function passou(media) {

    if (media > 6.5) {
        return "Aprovado!";
    } else {
        return "Reprovado!"
    }

}

for (var index in nomes) {

    var nota1 = notasA[index];
    var nota2 = notasB[index];

    var m = media(nota1, nota2)

    console.log(nomes[index] + " - " + nota1 + " , " + nota2 + " = " + m + " - " + passou(m));

}



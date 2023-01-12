// document.getElementById("container").innerHTML = "conteúdo";

let container = document.getElementById("container");

// let macas = 2;
// let banana = 3;
// let soma = macasbanana;

// container.innerHTML = soma;

// let texto = "Meu nome é";
// let nome  = " Gleidson teixeira";

// let soma = texto + nome;

// container.innerHTML = soma;

// const NASCIMENTO = "07/09/90";
// let nome = "Gleidson Teixeira";

// container.innerHTML = nome+ NASCIMENTO;

function somar ()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 + v2;
}
function subtrair ()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 - v2;
}
function multiplicar ()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 * v2;
}
function dividir ()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 / v2;
}




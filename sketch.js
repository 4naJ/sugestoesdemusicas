let palavras;

function setup() {
  createCanvas(650, 300);

  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Shadow, Back to me, Butter"];
  return random(palavras);
}

function inicializaCores() {
  background("white");
  fill("black");
  textSize(70);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();

  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}

function SugestoesDeMusicas(NomeDaMusica, Cantor) {
  // retun ??
}

"use strict";
class Pessoa{
	constructor(nome, idade, altura, peso) {
		this.nome = nome;
		this.idade = idade;
		this.altura = altura;
		this.peso = peso;
	}
	info() {
		console.log('Nome: ' + this.nome + '; Idade: ' + this.idade + '; Altura: ' + this.altura + '; Peso: ' + this.peso);
	}
}

let ian = new Pessoa('Ian Cunha Ramos', 20, 1.87, 80);
ian.info();

const depot = 1;
const retirer = 2;
var nom,numero,soldeIn,code,soldeFinal,montant;


function algo(){
	nom = prompt("Donnez votre nom");
	numero = prompt('Donnez votre numero de compte');
	soldeIn = prompt('Quel est votre solde initial ?');
	soldeIn = parseInt(soldeIn);
	soldeFinal = soldeIn;
	montant = prompt('Quel est le montant de la transaction ?');
	montant = parseInt(montant);
	code = prompt('Que voulez faire de ce montant ? depot : 1, retrait: 2');
	if(code==depot){
		soldeIn=(soldeIn+montant);
		alert("nom : "+nom+" numero de compte : "+numero+" Votre solde initial etait de : "+soldeFinal+" et il est maintenant de : "+soldeIn);
	}
	else if(code==retirer){
		soldeIn=(soldeIn-montant);
		alert("nom : "+nom+" numero de compte : "+numero+" Votre solde initial etait de : "+soldeFinal+" et il est maintenant de : "+soldeIn);
	}
	else if(code !== 1){
		alert('erreur, code de transaction non valide');
	}
	else if(code !== 2){
		alert('erreur, code de transaction non valide');
	}

}

-------------------------------------------------------


var nombres = [];
var compteur = 0;
var ouiOuNon;
var probleme;

function julienVeutDesChoses(){
	while(ouiOuNon !== "oui" && ouiOuNon !== "non"){
	if(compteur < 3){
		nombre[compteur] = prompt("Donnez lui un nombre");
		nombre[compteur] = parseInt(nombre[compteur]);
		compteur++;
		probleme = compteur;
	}
	else if(compteur >= 3){
		ouiOuNon = prompt("Voulez vous entrer un nouveau nombre ? oui ou non ?");
		if(ouiOuNon = "oui"){
			nombre[compteur] = prompt("Donnez lui un nombre");
			nombre[compteur] = parseInt(nombre[compteur]);
			compteur++;
			probleme = compteur;
		}
		else if(ouiOuNon = "non"){

		}
	}
}
}

--------------------

algorithme plusPetit	

variables 	tableau[]:entier
		  	question:chaine <~ "oui"
		  	noDeTours, compteur, nbMini:entier

Debut
	noDeTours <~ 1
	TANT QUE question = "oui"
	FAIRE afficher ("donne moi un nombre entier")
	saisir (tableau[])
	Si noDeTours > 2
		afficher("On continue? oui / non")
		saisir(question)
	Fsi
	noDeTours <~ noDeTours + 1
FINTANTQUE
nbMini <~ tableau[O]
POUR compteur ALLANT de 0 A tailleTableau-1 AU PAS DE 1
	FAIRE Si tableau[compteur] <nbMini
			Alors nbMini <~ tableau[compteur]

		  Fsi

FINPOUR

afficher("le plus petit nombre est" nbMini)


-------------------------------------------------

function plusPetit(){
var tableau[] = newArray;
var question = "oui";
var noDeTours, compteur, nbMini;

nbDeTours = 1;
	while(question = "oui"){
	tableau.push(parsInt(prompt("donne moi un nombre entier")));
		if(noDeTours > 2){
			question=prompt("On continue? oui / non")
		}
		noDeTours++;

	}

	nbMini= tableau[0]
	for(compteur=0; compteur<=tableau.length-1; compteur++){
		if (tableau[compteur] < nbMini){
				nbMini = tableau[compteur];
			}
	}
	alert("le plus petit nombre est "+nbMini);
}
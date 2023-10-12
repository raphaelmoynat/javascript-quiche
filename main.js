
let word = "bonjour"

let prenom = "jean-michel"

//  dans la console : bonjour jean-michel

let phrase = word + " " + prenom

console.log(phrase)


let longueur = phrase.length


// dans la console : bonjour jean-patrick
// remplacer michel par patrick
console.log(longueur)
let nouvellePhrase =  phrase.replace("michel","patrick")

console.log(phrase)
console.log(nouvellePhrase)

///   que l'on obtienne "bonjour jean
//  de deux manieres différentes : avec replace() et avec
//  une nouvelle methode

let phraseCoupee = nouvellePhrase.replace("-patrick","")

console.log(phraseCoupee)

nouvellePhrase = "bonjour jean-patrick"

phraseCoupee = nouvellePhrase.slice(0,12)

console.log(phraseCoupee)

let mot = "coucou"
let nombre = 12
let isYellow = true
let isGreen = false

let tableau = [
                "coucou",
                "pasteque",
                12,
                "carotte",
                 [
                     "chat",
                     "chien",
                     "canne à pêche"
                 ]
              ]
console.log(tableau[4][2])

let maPhrase = "le doux dos dodu de ce dindon bleu danse et se dandine"

let mots = maPhrase.split(" ")

console.log(mots)
// retirer l'élement "bleu" du tableau
mots.splice(7,1)

console.log("mots : ")
console.log(mots)

let phraseCorrigee = mots.join(" ")

console.log(phraseCorrigee)
//reconstruire une chaine de caracteres let phraseCorrigee




/// accéder à un élément du DOM
const maBoiteAChoucroute = document.querySelector(".boiteChoucroute")


const  monChampTexte =document.querySelector(".message")
const monBouton = document.querySelector(".monBouton")





monBouton.addEventListener("click", ()=>{
    //trouve le moyen    de vérifier si l'utilisateur n'a pas utilisé le mot quiche
    // si c'est le cas, on n'accepter pas sa phrase, et on la remplace par
    // désolé "quiche" n'est pas un mot autorisé

    maBoiteAChoucroute.innerHTML += ("<p>"+monChampTexte.value+"</p>")
    monChampTexte.value = ""
} )

let unPeu = "pas beaucoup"
let beaucoup = "pas peu"

beaucoup += unPeu

console.log(beaucoup)









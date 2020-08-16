//Fonctions

//Afficher produit selectionné + détails
//Personnaliser lentille - menu déroulant (pas d'envoi serveur ni réponse)
//Ajouter "selection du nombre d'articles"
//Ajouter au panier + btn
//Envoyer vers page panier

myCameras = [];

let result = "";
fetch("http://localhost:3000/api/cameras")
.then(response => response.json()
.then(function(json){
    json.forEach(function(element){
        myCameras.push(new Camera(element.imageUrl, element.name, element.description, element.lenses, element.price, element._id))
    })
    let myParent = document.getElementById("proposition_modeles");
    myCameras.forEach(function(item){
        let myArticle = document.createElement("article");
        myArticle.append('<img src="'+item.imageUrl+'" class="img-thumbnail"> <h3>'+item.name+'</h3> <p>'+item.description+'</p> <p>'+item.lenses+'</p> <p>'+item.id+'</p>')
        myParent.append(myArticle);
        })
}))


//Configurer le bouton d'activation 
//Envoyer vers la page suivante pour afficher 1 seul produit détaillé

const Camera = class{
    constructor(imageUrl, name, description, lenses, price, _id){
    this.imageUrl=imageUrl,
    this.name=name,
    this.description=description,
    this.lenses=lenses,
    this.price=price,
    this._id=_id
    }
}
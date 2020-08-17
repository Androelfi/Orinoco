//Afficher produit selectionné + détails
//Personnaliser lentille - menu déroulant (pas d'envoi serveur ni réponse)
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
    let myParent = document.getElementById("detail_produit");
    myCameras.forEach(function(item){
        let myArticle = document.createElement("article");
        myArticle.innerHTML = '<img src='+item.imageUrl+'> <h3>'+item.name+'</h3> <p>'+item.description+'</p> <p>Prix : '+item.price+' €</p>';
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
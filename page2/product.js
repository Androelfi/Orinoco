//Afficher produit selectionné + détails
//Personnaliser lentille - menu déroulant (pas d'envoi serveur ni réponse)

myCameras = [];

let result = "";
const query = new URLSearchParams(window.location.search);
fetch("http://localhost:3000/api/cameras/"+query.get("id")+"")
.then(response => response.json()
.then(function(element){
        myCameras.push(new Camera(element.imageUrl, element.name, element.description, element.lenses, element.price, element._id));
        let myParent = document.getElementById("detail_produit");
        myCameras.forEach(function(item){
            let myArticle = document.createElement("article");
            myArticle.innerHTML = '<img src='+item.imageUrl+'> <h3>'+item.name+'</h3> <p>'+item.description+'</p> <p>Prix : '+item.price+' €</p>'+item.createLenses()+'<button><a onclick=document.location.assign("D:/Orinoco/page3/cart.html?'+item._id+'")>Ajouter au panier</a></button>';
            myParent.append(myArticle);
        })
}))


const Camera = class{
    constructor(imageUrl, name, description, lenses, price, _id){
    this.imageUrl=imageUrl,
    this.name=name,
    this.description=description,
    this.lenses=lenses,
    this.price=price,
    this._id=_id
    }
    createLenses(){
        //parcours les lenses
        //pour chaque élement parcouru créer une option
        let mySelect = '<label>Choisissez votre objectif</label><select name="lenses">';
        this.lenses.forEach(function(item){
            let option = '<option>'+item+'</option>';
            mySelect += option;
        })
        mySelect += '</select>';
        console.log(mySelect);
        return mySelect;
    }
}

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
            myArticle.innerHTML = '<form action="D:/Orinoco/page3/cart.html?id='+item._id+'" onsubmit="return valider()"method="get" name="formSaisie"><img src='+item.imageUrl+'> <label class="alignement">'+item.name+'</label> <label class="alignement">'+item.description+'</label> <label class="alignement">Prix : '+item.price+' €</label>'+item.createLenses()+'</form><input class="alignement" style="margin: 15px auto;" type="submit" value="Ajouter au panier" onclick=document.location.assign("D:/Orinoco/page3/cart.html?id='+item._id+'")>';
            myParent.append(myArticle);
        })
}))

const Camera = class{
    constructor(imageUrl, name, description, lenses, price, _id){
    this.imageUrl=imageUrl,
    this.name=name,
    this.description=description,
    this.lenses=lenses,
    this.price=price/100,
    this._id=_id
    }
    createLenses(){
        //parcours les lenses
        //pour chaque élement parcouru créer une option
        let mySelect = '<label class="alignement">Choisissez votre objectif</label><select name="lenses">';
        this.lenses.forEach(function(item){
            let option = '<option>'+item+'</option>';
            mySelect += option;
        })
        mySelect += '</select>';
        return mySelect;
    }
}
function valider(){
    // si la valeur du champ prenom est non vide
    if(document.formSaisie.lenses.value != "") {
      // les données sont ok, on peut envoyer le formulaire   
      return true;
    }
    else {
      // sinon on affiche un message
      alert("Veillez selectionner votre lentille");
      // et on indique de ne pas envoyer le formulaire
      return false;
    }
  }
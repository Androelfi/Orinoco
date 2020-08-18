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
        myArticle.innerHTML = '<img src='+item.imageUrl+'> <h3>'+item.name+'</h3> <p>'+item.description+'</p> <p>Prix : '+item.price+' €</p> <button><a onclick=document.location.assign("D:/Orinoco/page2/product.html?id='+item._id+'")>Personnalisez votre lentille</a></button>';
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
}

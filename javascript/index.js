// console.log("Hello Wolrd");
// let a = "5";
// let b = "5";

// if(a === b){
//     console.log("This is a valid Number");
// }else{
//     console.log("This is not a vaild Number");
// }

// let showNumber = "This is a 5 Number";

// if(showNumber == showNumber){
//     console.log("yes this is a 5 number")
// }else{
//     console.log("sorry this is a no number");
// }

// let numberShow = 1;
// let stringNumber = "One Number";

// if(numberShow == 5 && stringNumber == "Five Number"){
//     console.log("This is a five Number");
// }else if(numberShow == 1 && stringNumber == "One Number"){
//     console.log("This is a 1 number")
// }else{
//     console.log("This is a not a 5 number");
// }

// create Element
// price list 
// 0) 10999
// 1) 12000
// 2) 12500
// 3) 13000
// 4) 13500
// 5) 14000
// 6) 14500
// 7) 15000
// 8) 15500

// let price = 11000;
// let barend = "Samsung";

// if(price == 10000 && barend == "Red Mi"){
//     const creatDiv = document.createElement("div");
//     creatDiv.innerHTML = `
//     <h1 style="text-align:center;">PHONE AND PRICE</h1>
//     <h2 style="text-align:center;">Price <span>10000</span></h2>
//     <img style="width:100%; height:80vh" src="https://i01.appmifile.com/webfile/globalimg/in/cms/D7A7DA95-AEF8-228B-A2D2-A3FEBF237C33.jpg"/>`
//     document.querySelector("body").appendChild(creatDiv);
// }else if(price == 11000 && barend == "Samsung"){
//     const creatDiv = document.createElement("div");
//     creatDiv.innerHTML = `
//     <h1 style="text-align:center;">PHONE AND PRICE</h1>
//     <h2 style="text-align:center;">Price <span>11000</span></h2>
//     <img style="width:100%; height:80vh" src="https://www.mobilepriceall.com/wp-content/uploads/2019/09/Samsung-Galaxy-A6s.jpg"/>`
//     document.querySelector("body").appendChild(creatDiv);
// }else if(price == 12000 && barend == "Oppo"){
//     const creatDiv = document.createElement("div");
//     creatDiv.innerHTML = `
//     <h1 style="text-align:center;">PHONE AND PRICE</h1>
//     <h2 style="text-align:center;">Price <span>12000</span></h2>
//     <img style="width:100%; height:80vh" src="https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/p/w/pwb000245743.jpg"/>`
//     document.querySelector("body").appendChild(creatDiv);
// }else if(price == 13000 && barend == "OnePlus"){
//     const creatDiv = document.createElement("div");
//     creatDiv.innerHTML = `
//     <h1 style="text-align:center;">PHONE AND PRICE</h1>
//     <h2 style="text-align:center;">Price <span>13000</span></h2>
//     <img style="width:100%; height:80vh" src="https://img.tatacliq.com/images/i6/437Wx649H/MP000000007480754_437Wx649H_20200813003512.jpeg"/>`
//     document.querySelector("body").appendChild(creatDiv);
// }else if(price == 14000 && barend == "iPhone"){
//     const creatDiv = document.createElement("div");
//     creatDiv.innerHTML = `
//     <h1 style="text-align:center;">PHONE AND PRICE</h1>
//     <h2 style="text-align:center;">Price <span>14000</span></h2>
//     <img style="width:100%; height:80vh" src="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg"/>`
//     document.querySelector("body").appendChild(creatDiv);
// }else if(price == 14000 && barend == "Google"){
//     const creatDiv = document.createElement("div");
//     creatDiv.innerHTML = `
//     <h1 style="text-align:center;">PHONE AND PRICE</h1>
//     <h2 style="text-align:center;">Price <span>14000</span></h2>
//     <img style="width:100%; height:80vh" src="https://ae01.alicdn.com/kf/HTB11pS8NFXXXXaeXpXXq6xXFXXXY/Transparent-Clear-Soft-TPU-Case-for-Google-Pixel-2-Pixel-XL-Pixel-2-XL-Phone-Back.jpg"/>`
//     document.querySelector("body").appendChild(creatDiv);
// }else if(price == 15000 && barend == "Vivo"){
//     const creatDiv = document.createElement("div");
//     creatDiv.innerHTML = `
//     <h1 style="text-align:center;">PHONE AND PRICE</h1>
//     <h2 style="text-align:center;">Price <span>15000</span></h2>
//     <img style="width:100%; height:80vh" src="https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/p/w/pwb000243862.jpg"/>`
//     document.querySelector("body").appendChild(creatDiv);
// }else if(price == 16000 && barend == "Realme"){
//     const creatDiv = document.createElement("div");
//     creatDiv.innerHTML = `
//     <h1 style="text-align:center;">PHONE AND PRICE</h1>
//     <h2 style="text-align:center;">Price <span>16000</span></h2>
//     <img style="width:100%; height:80vh" src="https://images-na.ssl-images-amazon.com/images/I/71YC1181G3L._SL1200_.jpg"/>`
//     document.querySelector("body").appendChild(creatDiv);
// }else if(price == 17000 && barend == "Xiaomi"){
//     const creatDiv = document.createElement("div");
//     creatDiv.innerHTML = `
//     <h1 style="text-align:center;">PHONE AND PRICE</h1>
//     <h2 style="text-align:center;">Price <span>17000</span></h2>
//     <img style="width:100%; height:80vh" src="https://mobile.panasonic.com/content/products/p71/gallery/5.jpg"/>`
//     document.querySelector("body").appendChild(creatDiv);
// }else{
//     alert("Sorry don't match your phone price and barend please try agin.");
// }

// let years = 2100;

// if(years % 100 === 0){
//     console.log("This years complate");
// }else{
//     console.log("Sorry Trya agin.");
// }

// let years = 2020;

// debugger

// if(years % 4 === 0){
//     if(years % 100 === 0){
//         if(years % 400 === 0){
//             console.log("This is a currect")
//         }else{
//             console.log("This is a not a currect 2");
//         }
//     }else{
//         console.log("This is a not a currect 1");
//     }
// }else{
//     console.log("This is a not a currcet 0");
// }


// This is a fasly value in 5 => 0,"",undefined,null,NaN
// if(null ==  null){
//     console.log("This is a condition is truethy")
// }else{
//     console.log("This is a condtion is falsy 🤥");
// }

// trinari opertars 
// let age = 19;



let phone = prompt("Enter Phone Brand");

let creatDiv = document.createElement("div");

document.querySelector("body").appendChild(creatDiv);

switch(phone){
    case "Redmi":
    creatDiv.innerHTML = `<h1 style="text-align:center">Red Mi</h1>
    <img style="width:100%; height:100%;" src="https://i01.appmifile.com/webfile/globalimg/in/cms/52C69665-3527-E4CA-5B87-1665681ABE95.jpg"/>`;
        break;
    case "Samsung":
    creatDiv.innerHTML = `
    <h1 style="text-align:center">Samsung</h1>
    <img style="width:100%; height:100%" src="https://www.gizmochina.com/wp-content/uploads/2019/06/Galaxy-A60-featured-546x546.jpg"/>`;
        break;
    case "Vivo":
    creatDiv.innerHTML = `<h1 style="text-align:center">Vivo</h1>
    <img style="width:100%; height:100%" src="https://www.businessinsider.in/photo/73191839/best-vivo-smartphones-under-20000-in-india.jpg?imgsize=200540" />`;
        break;
    case "Oppo":
    creatDiv.innerHTML = `<h1 style="text-align:center">Oppo</h1>
    <img style="width:100%; height:100%;" src="https://images-na.ssl-images-amazon.com/images/I/51dcbt2%2B-JL._SL1000_.jpg" />`;
        break;
    case "Apple":
    creatDiv.innerHTML = `<h1 style="text-align:center">Apple</h1>
    <img style="width:100%; height:100%;" src="https://cdn.homeshopping.pk/product_images/v/194/iphone-x-ultra-hybrid-red__27474.1525693091__12921_zoom.jpg" />`;
        break;
    case "Nokia":
    creatDiv.innerHTML = `<h1 style="text-align:center">Nokia</h1>
    <img style="width:100%; height:100%;" src="https://images.mobilefun.co.uk/graphics/450pixelp/46027.jpg" />`;
        break;
    case "Lg":
    creatDiv.innerHTML = `<h1 style="text-align:center">Lg</h1>
    <img style="width:100%; height:100%;" src="https://priceinsouthafrica.com/wp-content/uploads/2020/03/LG-W30-Pro-Price-in-South-Africa.jpg" />`;
        break;
    case "Lenovo":
    creatDiv.innerHTML = `<h1 style="text-align:center">Lenovo</h1>
    <img style="width:100%; height:100%;" src="https://www.luluhypermarket.com/medias/1639018-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDY0NDR8aW1hZ2UvanBlZ3xoYmYvaDE2Lzk3MDM4ODY4ODA3OTgvMTYzOTAxOC0wMS5qcGdfMTIwMFd4MTIwMEh8MGFjNjE4NTM2ZDVmMGUzNzMwNDc3OTg3OTQyMzU1ZTVlMDZjNTk4OGU2MTA2MDYyNjBhM2RiNDQ1OGZlY2ExMA" />`;
        break;
    case "Sony":
    creatDiv.innerHTML = `<h1 style="text-align:center">Sony</h1>
    <img style="width:100%; height:100%;" src="https://static.bhphoto.com/images/images500x500/1409850308_1079654.jpg" />`;
        break;
    default:
    creatDiv.innerHTML = `<h1 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">Sorry <span>😲🤔😕☹️😭</span></h1>`;
}






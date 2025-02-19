let phones = ["iphone x","iphone 11","iphone 12"];
let prices = ["1000 le", "1100 le", "1200 le"];
let quantities = ["10 phones", "20 phones", "30 phones"];

let showdata=()=>{
    phones.forEach((phone, index)=>{
        console.log(`Phone: ${phone} Price: ${prices[index]} Quantity: ${quantities[index]}`);
    })
}


let adding=()=>{
    let phone = prompt("Enter phone name");
    let price = prompt("Enter phone name");
    let quantitie = prompt("Enter phone name");

    phones.push(phone);
    prices.push(price);
    quantities.push(quantitie);
    
    showdata();
}
let deleteing=()=>{
    let phone = +prompt("Enter phone number to delete")-1;
    let price =phone;
    let quantitie =phone;

    phones.splice(phone,1);
    prices.splice(price,1);
    quantities.splice(quantitie,1);
    
    showdata();
}
showdata();

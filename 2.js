let phones = ["iphone x","iphone 11","iphone 12"];
let prices = ["1000 le", "1100 le", "1200 le"];
let quantities = ["10 phones", "20 phones", "30 phones"];

let showdata=()=>{
    console.clear();

    phones.forEach((phone, index)=>{
        console.log(`${index+1} -Phone: ${phone}/ Price: ${prices[index]}/ Quantity: ${quantities[index]}`);
    })
}
showdata();


let adding=()=>{

    phones.push( prompt("Enter phone name"));
    prices.push(prompt("Enter phone name"));
    quantities.push( prompt("Enter phone name"));
    showdata();
}
let deleteing=()=>{
    let phone = +prompt("Enter phone number to delete")-1;
    phones.splice(phone,1);
    prices.splice(phone,1);
    quantities.splice(phone,1);
    
    showdata();
}
let uptade=()=>{
    phones.splice(phone,1,prompt("Enter phone name"));
    prices.splice(phone,1,prompt("Enter phone price"));
    quantities.splice(phone,1,prompt("Enter phone quantity"));
    
    showdata();
}

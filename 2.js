let phones = ["iphone x","iphone 11","iphone 12"];
let prices = ["1000", "1100", "1200"];
let quantities = ["10", "20", "30"];

let showdata=()=>{
    console.clear();

    phones.forEach((phone, index)=>{
        console.log(`${index+1} - ${phone}/ Price: ${prices[index]} le/ Quantity: ${quantities[index]} phones`);
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
let update=()=>{
    let phone = +prompt("Enter phone number to uptade")-1;
    phones.splice(phone,1,prompt("Enter phone name"));
    prices.splice(phone,1,prompt("Enter phone price"));
    quantities.splice(phone,1,prompt("Enter phone quantity"));
    
    showdata();
}


let update1=()=>{
    let phone = +prompt("Enter phone number to uptade")-1;
    let updatetype = prompt("Enter uptade type");
    if(updatetype == "phone"){
        phones.splice(phone,1,prompt("Enter phone name"));    
    }
    else if(updatetype == "price"){
        prices.splice(phone,1,prompt("Enter phone price"));    
    }
    else if(updatetype == "quantity"){
        quantities.splice(phone,1,prompt("Enter phone quantity"));    
    }
    showdata();
}


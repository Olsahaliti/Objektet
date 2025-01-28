let variabla1 = "var 1";
let vargu = ["a" , "b" , "c"];
function testFunction() { 
    let variabla2 = "var2";
    if(4>2) {
        let variabla3 = "var3";
     console.log(variabla1);
     console.log(variabla2);
     console.log(variabla3);
    }
     console.log(variabla1);
     console.log(variabla2);
     console.log(variabla3);
}
testFunction();
console.log(variabla1);
console.log(variabla2);
console.log(variabla3);

 let vargu1 = [1, 2, 4, 5];
 let vargu2 = new Array();

 let obj1 = {};
 let obj2 = new Object();

 //key: value
 let personi = { 
    emer: "Mirjeta",
    mbiemri: "Kastrati" ,
    ngjyraSyve: "e kafte" ,
    mosha: 23 ,
    ngjyratEPreferuara: ["e gjelber","e pembe"],
    qeni: { 
        emer:"bubi",
        mosha: 3,
    },
    fol: () => { 
        console.log("une po foli")
    }
 };
 console.log(personi.qeni.emer)
 personi.fol();
 personi.shkolla = "dickA";
 personi.x = "x"
 console.log(personi);
 personi.ngjyratEPreferuara.push("e vjollce");
 console.log("mua me pelqen ngjyra" + personi.ngjyratEPreferuara);
// console.log(personi
console.log("profesioni" in personi);
console.log("emer" in personi);

delete personi.mbiemri
console.log(personi.emer)
console.log(personi["emer"])

personi.emer = "juled"
console.log(personi.emer)

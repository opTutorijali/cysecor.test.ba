function klik() {

const sifra1 = 10;
const godine1 = 18;
const email1 = 10;

let sifra = document.getElementById("sifra").value;
let ime = document.getElementById("ime").value;
let godine = document.getElementById("godine").value;
let email = document.getElementById("email").value;

let message = ime+" vi ste se uspjesno registriali se!!";
document.getElementById("message").style.color = "green"


if(sifra < sifra1) {

message = ime+" vi nemate dovoljno karaktera u sifri!";
document.getElementById("message").style.color =  "red";


}
if(godine < godine1) {

message = ime+" vi nemate dovoljno godina!!";
document.getElementById("message").style.color = "red";

}
if(email < email1) {

message = ime+" vi nemate dovoljno karaktera u vasem email-u!!";
document.getElementById("message").style.color = "red";
 
}



document.getElementById("message").innerHTML = message;
}
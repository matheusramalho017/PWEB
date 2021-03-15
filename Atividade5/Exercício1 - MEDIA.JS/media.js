var nome = parseFloat;
var media, n1, n2, n3 ;

nome = prompt("Qual é o seu nome?");
     
        alert("Seu nome é " + nome);

n1= prompt ("Informe a primeira nota: ") ;
n1= eval (n1) ;

n2= prompt ("Informe a segunda nota: ") ;
n2= eval (n2) ; 

n3= prompt ("Informe a terceira nota: ") ; 
n3= eval (n3) ;

media = (n1 + n2 + n3)/3 ; 

alert("Seu nome é " + nome);
alert(" e sua média é:" + media);
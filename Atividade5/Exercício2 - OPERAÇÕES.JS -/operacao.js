var n1, n2, soma, sub, prod, div, resto ;


n1= prompt ("Informe a primeira nota: ") ;
n1= eval (n1) ;

n2= prompt ("Informe a segunda nota: ") ;
n2= eval (n2) ;

soma = n1+n2;

sub = n1-n2;

prod = n1*n2;

div = n1/n2;

resto = n1 % n2;

alert("Soma dos dois: " + soma + "\n Subtração dos dois: " + sub + "\n Seu produto é: " + prod + "\n Sua divisão é: " + div + "\n E o resto é: " + resto);

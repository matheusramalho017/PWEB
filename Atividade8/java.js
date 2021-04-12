///1° FORMA
    var Aluno1 = new Object(),
    Nome = "Nome do aluno= ",
    RA = "Registro do aluno= ";
   

    Aluno1[Nome] = "João de Paula";
    Aluno1[RA] = "55.8981.12";


    alert("Nome= "+ Aluno1[Nome]);
    alert("RA= " + Aluno1[RA]);


//2° FORMA

function Aluno1(Nome, Ra)
 {
    this.nome = Nome;
    this.ra = Ra;
 }

var ObjAluno1 = new Aluno1X("João de Paula", 55898112);
ObjAluno1.novo = "novo";

alert(ObjAluno1.nome + ObjAluno1.ra + ObjAluno1.novo);


//3° FORMA

var Aluno1 = 
{
    Nome: "João de Paula!",
    RA: "55.8981.12!"   
};


for (var Aluno in Aluno1) 
{
    console.log (Aluno); 
    
    if (typeof Aluno1 [Aluno] == "string")
        console.log(Aluno1[Aluno]); 
}


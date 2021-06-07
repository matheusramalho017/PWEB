var http = require('http');
var server = http.createServer(function(req,res)
{
var opcao = req.url;
if(opcao=='/historia')
{
	res.end("<html><body>Historia da Faculdade de Tecnologia de Sorocaba</body></html>");
}

else if (opcao=='/cursos')
{
	res.end("<html><body> Cursos </body></html>");
}
else if (opcao=='/professores')
{
	res.end("<html><body> Professores</body></html>");
}

else
	res.end("<html><body>Site da Faculde de Tecnologia de Sorocaba FATEC SOROCABA</body></html>");
});
server.listen(3000);

   
   function funcao(NomeCompleto,Rua,Numero,Cidade,Estado,telefone,Email ) {
    var table = document.getElementById("minhatabela");
        
    var row = table.insertRow();
     
    var cellNomeCompleto = row.insertCell(0); 
    var cellRua = row.insertCell(1);
    var cellNumero = row.insertCell(2);
    var cellCidade = row.insertCell(3);
    var cellEstado = row.insertCell(4);
    var cellTelefone = row.insertCell(5);
    var cellEmail = row.insertCell(6);
    
     
     
 
   cellNomeCompleto.innerHTML = NomeCompleto;
   cellRua.innerHTML = Rua;
   cellNumero.innerHTML = Numero;
   cellCidade.innerHTML = Cidade;
   cellEstado.innerHTML = Estado;
   cellTelefone.innerHTML = telefone;
   cellEmail.innerHTML = Email;
   cellComentario.innerHTML = Comentario;
   
   }
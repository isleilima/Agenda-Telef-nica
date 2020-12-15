function SalvarContato(){
  
    let nome = $("#nome").val();
    let telefone= $("#telefone").val();
    

    
 
    if(nome != "" && telefone !=""){
        
        $("#lista-Telefonica").append("<li>" + nome + " - " + telefone + "</li>");
        $("#nome").val("");
        $("#telefone").val("");
        $("#nome").focus();
        localStorage.listaTelefõnica = $("#lista-Telefonica").html();
        alert("Lista Salva");
        
    }else{
      
       alert("Os campos nome, telefone são obrigatórios");
    }
}


function ExcluirContatos(){

    let confirmacao = confirm("Continuar com a exclusão?");
    if(confirmacao == true){
        $("#lista-Telefonica").html("");
        localStorage.clear();
        alert("tudo apagado");
    }else{
        alert("exclusão cancelada");
    }
}

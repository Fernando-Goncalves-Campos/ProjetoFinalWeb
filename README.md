# ProjetoFinalWeb

Fernando Gonçalves Campos 12542352 <br>
José Pedro Cioni do Carmo 12623988 <br>
Samuel Figueiredo Veronez 12542626

## Diagrama de Navegação

![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Diagrama.png?raw=true)

<!--Requirements-->
<details>
<summary>
  
## Requerimentos
  
</summary>
  
  ### Novos Requerimentos
  
  1. Button to change the page color(Dark mode) <br>

  ### Requerimentos Base

  2. Dois tipos de usuários: Clientes e Administradores.<br>
  
  3. Administradores gerenciam o registro de outros administradores, clientes e produtos/serviços.<br>

  4. Os clientes são usuários que acessam o sistema para comprar produtos/serviços.<br>

  5. O registro do administrador inclui, pelo menos: nome, id, telefone e e-mail.<br>

  6. Cada registro de cliente inclui, pelo menos: nome, id, endereço, telefone e e-mail.<br>

  7. Os registros de produtos/serviços incluem, pelo menos: nome, id, foto, descrição, preço, quantidade em estoque e quantidade vendida.<br>
  
  8. A loja pode vender produtos, serviços ou ambos (você decide).<br>

  9. Venda de Produtos (ou Serviços): Produtos são selecionados, sua quantidade escolhida e incluídos em um carrinho. Os produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendido é subtraída da quantidade em estoque e adicionada à quantidade vendida. Carrinhos são esvaziados somente após o pagamento ou pelo cliente.<br>

  10. Gerenciamento de Produtos/Serviços: Administradores podem criar/atualizar/ler/excluir (CRUD) novos produtos e serviços. Por exemplo, eles podem alterar a quantidade em estoque.<br>

  11. Sua funcionalidade: Crie uma funcionalidade específica para o seu aplicativo. Não precisa ser algo complicado. Por exemplo, se você está vendendo carros, pode permitir que os usuários usem um acelerador para ouvir como o motor de cada carro acelera e desacelera.<br>

  12. O sistema deve atender aos requisitos de acessibilidade e oferecer boa usabilidade. O sistema deve ser responsivo, o que significa que deve concluir as tarefas atribuídas dentro de um tempo razoável.<br>

</details>

<!--Project description-->
<details>
<summary>

## Descrição do Projeto

</summary>
  
  1. Os arquivos .css utilizam como cor uma váriavel, que é decidida que pode ter seu valor "invertido" utilizando o botão de Dark Mode

  Uma <a href="https://www.figma.com/proto/x9shT7gVxjjd68K5l27GCM/Web?type=design&node-id=1-3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3">Versão Figma</a> do mockup também foi feita.
  
  Os arquivos HTML/CSS de algumas dessas páginas estão disponibilizados na <a href="https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/tree/main/Prototipos">Pasta Prototipos</a>.
  
  ### Página Principal
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Loja.png?raw=true)
  
  ### Página Principal - versão white mode
 
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Loja-white.png?raw=true)
  
  ### Detalhes do item
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Item-details.png?raw=true)
  
  ### Carrinho de compra
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Cart.png?raw=true)
  
  ### Carrinho de compra + user menu
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Cart+usermenu.png?raw=true)
  
  ### Login
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Login.png?raw=true)
  
  ### Registrar
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Sing-in.png?raw=true)
    

</details>

<!--Comments about the code-->
<details>
<summary>

## Comentários sobre o código

</summary>


</details>

<!--Tests-->
<details>
<summary>

## Testes

</summary>

### Plano de teste

### Resultado dos testes

</details>

<!--Build procedures-->
<details>
<summary>

## Processo para compilação

</summary>

É preciso ter o node.js instalado (eu acho): https://nodejs.org/en
a versão utilizada foi a 18.16

Para abrir o site, deve-se abrir o diretório do react (lojaonline) no terminal e rodar o comando "npm start".

</details>

<!--Problems-->
<details>
<summary>

## Problemas

</summary>

</details>

<!--Comments-->
<details>
<summary>

## Comentários

</summary>


</details>

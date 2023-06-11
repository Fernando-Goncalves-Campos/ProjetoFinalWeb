# ProjetoFinalWeb

Fernando Gonçalves Campos 12542352 <br>
José Pedro Cioni do Carmo 12623988 <br>
Samuel Figueiredo Veronez 12542626

<!--Requirements-->
<details>
<summary>
  
## Requisitos
  
</summary>

  1. Dois tipos de usuários: Clientes e Administradores:<br>
  
    . Administradores gerenciam o registro de outros administradores, clientes e produtos/serviços.
  
    . Os clientes são usuários que acessam o sistema para comprar produtos/serviços.
  
    . O registro do administrador inclui, pelo menos: nome, id, telefone e e-mail.
  
    . Cada registro de cliente inclui, pelo menos: nome, id, endereço, telefone e e-mail.

  
  2. Produtos:
  
    . Os registros de produtos/serviços incluem, pelo menos: nome, id, foto, descrição, preço, quantidade em estoque e quantidade vendida.

    . Venda de Produtos (ou Serviços): Produtos são selecionados, sua quantidade escolhida e incluídos em um carrinho. Os produtos são comprados usando um número de cartão de crédito.

    . Gerenciamento de Produtos/Serviços: Administradores podem criar/atualizar/ler/excluir (CRUD) novos produtos e serviços. Por exemplo, eles podem alterar a quantidade em estoque.


  3. O sistema deve atender aos requisitos de acessibilidade e oferecer boa usabilidade. O sistema deve ser responsivo, o que significa que deve concluir as tarefas atribuídas dentro de um tempo razoável.<br>

</details>

<!--Project description-->
<details>
<summary>

## Descrição do Projeto

</summary>
  
  PetLove é um site de petshop completo, oferecendo produtos e informações para cuidar dos animais de estimação. Com interface amigável.
  
  Como funcionalidade extra uma barra de pesquisa junto com um filtro de preço.

  Uma <a href="https://www.figma.com/proto/x9shT7gVxjjd68K5l27GCM/Web?type=design&node-id=1-3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A3">Versão Figma</a> do mockup também foi feita.
  
  Os arquivos HTML/CSS de algumas dessas páginas estão disponibilizados na <a href="https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/tree/main/Prototipos">Pasta Prototipos</a>.
  
   ## Diagrama de Navegação

  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Diagrama.png?raw=true)
  
   ### Página Principal
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Loja.png?raw=true)
  
  ### Página Principal - versão white mode
 
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Loja-white.png?raw=true)
  
  ### Detalhes do item
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/ItemDescription.png?raw=true)
  
  ### Carrinho de compra
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Cart.png?raw=true)
  
  ### Login
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/Login.png?raw=true)
  
  ### Registrar
  
  ![alt text](https://github.com/Fernando-Goncalves-Campos/ProjetoFinalWeb/blob/main/Mockup/CreateAccount.png?raw=true)
  
</details>

<!--Comments about the code-->
<details>
<summary>

## Comentários sobre o código

</summary>

  Comentários pontuáis foram feitos em linha de código.

</details>

<!--Tests-->
<details>
<summary>

## Testes

</summary>

### Plano de teste
  
  Para seguir o plano de teste é necessário compilar a programção de acordo com o tópico "Processo para compilação"
  com ambos ,servidor e react, rodando é possível prosseguir para os testes manuais das funcionalidades.
  
  Como o servidor de Banco de dados já está implementado mudanças feitas em contas ou items são persistentes,
  por esse motivo caso deseje testar alguma modificação(item, conta) crie novos objetos.
  
  Para poder seguir o diagrama de navegação apresentado anteriormente duas contas já estão no sistema:
  
  #### Administrador
  
    Login: admin 
    Senha: admin
  
  - Items podem ser editados ao clicar no item desejado na tela inicial da loja.
  - Para editar usuários comums e administradores acesse pelo menu ao cliclar no nome da conta.
  
  #### Usuário Comum
  
    Login: user 
    Senha: user
  
  - Acesse o carrinho ao clicar no nome de usuário.
  
  #### Testes
      Gerais
  
        - verificar a navegação apresentada no diagrama.
        - Acessar os dois tipos de usuários.
        - Criar uma conta para usuário comum.
  
      Usuário Comum
  
        - Comprar Produtos.
        - Modificar o carrinho de compras.
        -
  
      Administrador
  
        - Modificar/Criar Items.
        - Gerenciar/Criar outras contas.
  
### Resultado dos testes

  Ao seguir os testes manualmente alguns problemas foram encontrados e assim foram sendo resolvidos.
 
</details>

<!--Build procedures-->
<details>
<summary>

## Processo para compilação

</summary>

É preciso ter o node.js instalado (eu acho): https://nodejs.org/en
a versão utilizada foi a 18.16

Antes de abrir o site é necessário ligar o servidor de banco de dados, estando no diretório (server)
rode o comando "node server.mjs"
  
Para abrir o site, deve-se abrir o diretório do react (lojaonline) no terminal e rodar o comando "npm start".

</details>

<!--Problems-->
<details>
<summary>

## Problemas

</summary>

  Alguns problemas de reatividade e do css estão 
  
</details>

<!--Comments-->
<details>
<summary>

## Comentários

</summary>


</details>

# ProjetoFinalWeb

Fernando Gonçalves Campos 12542352 <br>
José Pedro Cioni do Carmo 12623988 <br>
Samuel Figueiredo Veronez 12542626

<!--Requirements-->
<details>
  
  ### New Requirements
  
  - Button to change the page color(Dark mode) <br>

  ### Basis Requirements

  - The system must have 2 types of users: Clients and Administrators<br>

  - Administrators are responsible for registering/managing administrators, customers, and products/services provided. The application already comes with an account admin with password admin.<br>

  - Customers are users who access the system to buy products/services.<br>

  - The admin record includes, at least: name, id, phone, email.<br>

  - Each customer's record includes, at least: name, id, address, phone, email<br>

  - Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.<br>

  - Your store may sell products, services or both (you decide)<br>

  - Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.<br>

  - Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.<br>

  - Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.<br>

  - The system must provide accessibility requirements and provide good usability. The system must be responsive, meaning that it should complete assigned tasks within a reasonable time.<br>



<summary>
  
## Requirements

</summary>

</details>

<!--Project description-->
<details>
<summary>

## Project description

</summary>

</details>

<!--Comments about the code-->
<details>
<summary>

## Comments about the code

</summary>

O método utilizado para passagem de estados entre as diferentes páginas do site não é ideal para projetos grandes, por questões de performance e de manutenção,
mas como o projeto é pequeno, passar todos os estados juntos facilita debugar o código e para fazer modificações

</details>

<!--Tests-->
<details>
<summary>

## Tests

</summary>

### Test plan

### Test results

</details>

<!--Build procedures-->
<details>
<summary>

## Build procedures

</summary>

É preciso ter o node.js instalado (eu acho): https://nodejs.org/en
a versão utilizada foi a 18.16

Para abrir o site, deve-se abrir o diretório do react (lojaonline) no terminal e rodar o comando "npm start".

</details>

<!--Problems-->
<details>
<summary>

## Problems

</summary>

</details>

<!--Comments-->
<details>
<summary>

## Comments

</summary>

Caso se deseje verificar os estados do site pode-se alterar o tema, além de alterar o tema o botão também irá imprimir o objeto que salva os estados no console.

</details>

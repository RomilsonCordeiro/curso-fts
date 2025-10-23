document.querySelector("h1").innerHTML = "Jesus te ama muito";
/* .querySelector() seleciona um elemento parente 
 do elemento selecionado. No caso o h1 pertencenete ao document. */

/* .innerHTML define o que está inserido no elemento. No caso o h1.*/

document.querySelector("#titulo").style.color = "grey";
/* Aqui através do DOM é possível mudar a cor do elemento. No caso o h1 */

document.querySelector(".list").innerHTML = "Faz o L";

document.getElementsByTagName("li")[1].style.color = "red";
/* getElementsBy permite selecionar elementos de varias maneiras
   como id, tag, name, etc. Será selecionado todos os elementos iguais.
   Então deve-se determinar o elemento desejado colocando sua posição no array
   como feito no código acima.*/

document.getElementById("titulo").style.color = "blue";
/* getElementById é diferente dos outros getElementsBy.
   Isso por que ele seleciona apenas um único elemento,
   já que o Id é único. */

document.querySelector("li a");
/* Nesse exemplo estou selecionando o elemento 'a' que é filho do elemento 'li'.
   Respeitando a hierarquia dos elementos.
   Dessa maneira, se existir outro elemento 'a' fora das 'li',
   ele não será selecionado */

document.querySelector("li.item");
/* Nesse exemplo estou selecionando um elemento 'li' que possui a class item.*/

document.querySelectorAll("li.item");
/* Nesse exemplo utilizo o querySelectorAll
   que permite selecionar todos os elementos com os mesmo parâmetros. */

document.querySelectorAll("li.item")[1].style.color = "red";
/* Nesse exemplo, ao específicar o elemento mudo a cor.*/

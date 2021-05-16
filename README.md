# Todo App

Esta aplicação Web permite criar uma lista de tarefas, podendo-se:
* Adicionar uma nova tarefa;
* Completar uma tarefa existente;
* Deletar uma tarefa existente;
* Descompletar um tarefa já completa;

## Documentação do projeto e decisões técnicas

Este projeto foi desenvolvido através da criação de aplicações disponibilizada pela biblioteca React js, uma biblioteca javascript de código aberto.

Linguagem e ferramentas/bibliotecas utilizadas:
* React js - versão 16.4.0;
* React Bootstrap - versão 1.6.0; 
* Classnames - versão 2.3.1;
* Enzyme - versão 3.11.0;
* Enzyme Adapter React 16 - versão 1.15.6;
* Jest - versão 26.6.0;

### Setup e instalação de dependências

#### Caso não tenha o `npm` instalado, pode-se instalar

##### No windows:
Acesse https://nodejs.org/en/ e faça download do instalador. 

Execute o instalador, siga as instruções na tela e pronto, o Node está instalado e adicionado ao PATH do Windows. 

Feche todos os terminais abertos e poderá prosseguir.

##### No Mac:
Pode ser feita através do download em https://nodejs.org/en/, ou então através do `brew`.

Para instalar o `brew`, caso não tenha:
* /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

Após, prossiga com a instalação do `npm`:
* brew doctor
* brew update
* brew install node

##### No Linux:
Execute os seguintes comandos:
* curl -sL https://deb.nodesource.com/setup\_13.x | sudo -E bash -
* sudo apt install nodejs


Para poder executar localmente este projeto, deve-se primeiro instalar as dependências necessárias à aplicação:
* `npm install`;

E então, para executar o projeto:
* `npm start`;

A aplicação estará acessível via seu navegador através do endereço:
* http://localhost:3000/


### Testes unitários

Esta aplicação conta com testes unitários, que podem ser executados atarvés do comando:
* `npm run test`


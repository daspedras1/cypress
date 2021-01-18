1) Pré-requisitos:
	- [Git](https://git-scm.com/);
	- [Node.JS](http://nodejs.org/download/) versão 12 ou superior;
	- [NPM (Node Package Manager)](https://www.npmjs.com/get-npm);

2) Instalar Cypress:
	- Crie um diretório onde será instalado o Cypress;
	- Esse será o mesmo diretório onde ficarão armazenados os testes;
	- Acesse o diretório no terminal;
	- Rode o comando:
		* npm install --save-dev cypress
		* Esse comando irá instalar o Cypress somente no diretório criado
		* Para instalar globalmente (npm install -g cypress)

3) Baixar repositório:
	https://github.com/daspedras1/cypress

4) Rodando testes:
	- Acesse o diretório onde estão salvos os testes via terminal;
	- Digitar o comando: `npm run cypress:open`;
	- Na tela do Cypress, acessar o diretório `cypress/integration/UI`;
	- Clicar no arquivo `vv-test.spec.js`;
	- Aguardar o teste ser finalizado;
	- Verificar os resultados do teste;
	- Fechar o navegador aberto;
	- Clicar em Stop;
	- Fechar Cypress.

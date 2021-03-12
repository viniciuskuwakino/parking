# :oncoming_automobile: Parking :oncoming_automobile:

Este projeto foi feito com [Ionic](https://ionicframework.com/) necessário ter o [Node](https://nodejs.org/en/) instalado na sua máquina
caso não possua o [Node](https://nodejs.org/en/)
instalado só clicar no link e baixar o instalador
diretamente do site.

### :x: Dificuldades
- uso da API(Não consegui realizar entrada de dados por falta de conhecimento como consultar e inserir dados).
- validação nos campos para mostrar erros ao usuário.
- falta de uso de testes(Não tenho conhecimento de testes por isso optei por não utilizar eles).

### :scroll: Executando o projeto
Para executar o projeto você precisa ter o Ionic instalado na sua máquina para saber mais como 
instalar o mesmo e executar localmente [clique aqui](https://ionicframework.com/docs/intro/cli).
Após a intalação clone o projeto assumindo que você tenha node e o Ionic instalado na sua máquina.
```shell
$ git clone https://github.com/guilhermeytalo/parking.git
$ cd parking
$ npm install
```
Após fazer as instalações para poder rodar o projeto basta utilizar o comando abaixo (assumiremos que você está na pasta do projeto).

```shell
$ ionic serve
```

### :rocket: Deploying / Produção
Caso deseje fazer build para produção utilize o comando abaixo, mas você já
pode ver ele em funcionamento
[Clicando Aqui](https://parkingfuzo.netlify.app).

```shell
$ ionic build --prod
```

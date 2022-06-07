# BuildBox
Projeto para criação da solução para feed e postagens


# Iniciando
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto em 
um sistema ativo.

## Pré-requisitos:
Para execução e desenvolvimento do projeto é necessário, ou que tenha instalado:
- nodejs
- yarn ou npm



## Desenvolvido com
 - JavaScript
 - [React](https://reactjs.org/)
 - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)


## Execução pro projeto
 - Para executar o projeto pelo navegador executando na própria máquina basta baixar os pacotes do package.json 
 utilizando o comando ``` yarn ou npm install ``` e logo após o download terminar, utilizar o comando ``` yarn start```.

## Executar os testes 
- Para executar os testes unitários basta rodar o comando ``` yarn test ou npm run test``` no terminal no diretório raiz.

## Deploy do projeto
- O deploy foi configurado para adicionar os arquivos ao bucket no S3 da amazon webservices
## CI/CD
- O CI/CD utilizei do próprio deploy do github actions, criando um arquivo .yml e adicionando as configurações para selecionar as variaveis de ambiente configuradas no gitlab, referentes ao bucket do S3 criado na amazon webservices.
- Criei ao todo 3 estágios, o de build, o de testes e o de deploy, o de build basicamente para baixar as dependencias e verificar se o react não encontra nenhum problema no build do projeto, no stage de testes verifico se todos os testes unitários executaram de forma correta, e o de deploy pego os arquivos estáticos gerados no diretorio de build e subo para o bucket do S3 da Amazon.

## Git
- Relacionado ao git não fiz tantos pontos de melhoria, só criei os commits seguindo os padrões do gitflow de feat/fix/bug etc, o ideal é que a cada commit de nova feature criasse uma nova branch para fazer o merge request, mas como só eu trabalhei no projeto achei desnecessário por enquanto.


## Pontos de melhoria:


## Funcionalidaes
- Utilização dos hooks do react para criação e manutenção dos componentes
- Utilização da lib react-testing-library para criação de testes unitários
- Criação do .yml para build do projeto e upload para aws S3

## Autores
- Adriano Martins de Oliveira Sousa.

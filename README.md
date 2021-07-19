<h4 align="center"> 
	🚧  Projeto em construção...  🚧
</h4>

# Portfólio
 Single-page, desenvolvida com base na playlist do [João Carlos Lima e Silva](https://youtube.com/playlist?list=PLM_90--7SomWgfPYCXnpuoY2L-Z_Z-AiV),para aplimorar os conhecimentos em HTML5, CSS3 e Js.

[Confira meu Portfólio](https://portifoliomanoel.herokuapp.com/#)

## Melhorias
  Foram aplicadas melhoras como:
  * Otimização do tempo de carregamento da página.
  * Implementação de envio de E-mail com nodeMailer.
  * Implementação dos conceitos de UX design.
  

## Tecnologias usadas
  * HTML5 
  * CSS3
  * NODE
  * NODE MAILER


## Ícones
:package: nova funcionalidade
:up: atualização
:beetle: correção de bug
:checkered_flag: release



### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/ManoelPatrocinio/portifolio>

# Acesse a pasta do projeto no terminal/cmd
$ cd portifolio

# Instale as dependências
$ npm install
$ npm install --global yarn
$ yarn init -Y                             
$ yarn add express                         
$ yarn add @types/express -D               
$ yarn add nodemailer                     
$ yarn add nodemon -D 
$ yarn add dotenv

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:8000 - acesse <http://localhost:3333>

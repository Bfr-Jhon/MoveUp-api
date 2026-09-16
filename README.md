# MoveUp API

Backend da aplicação **MoveUp**, uma plataforma de treinos voltada para exercícios em casa.

O projeto está sendo desenvolvido como uma aplicação Full Stack, começando pela construção da API REST com **NestJS, TypeScript, TypeORM e MySQL**.

O objetivo é criar uma base sólida para, posteriormente, implementar recursos como gerenciamento de treinos, histórico de atividades, adaptação dos treinos e integração com o frontend.

---

## 🎯 Objetivo

O MoveUp tem como proposta auxiliar usuários a organizarem e acompanharem seus treinos realizados em casa.

Entre as funcionalidades planejadas estão:

* Cadastro e gerenciamento de usuários
* Autenticação
* Cadastro de treinos
* Organização de exercícios
* Registro de treinos realizados
* Histórico de atividades
* Acompanhamento de evolução
* Adaptação dos treinos de acordo com frequência e feedback do usuário
* Sistema de lembretes
* Futuramente, recursos relacionados à inteligência artificial

> **Status:** o projeto está em desenvolvimento. As funcionalidades acima representam o planejamento do projeto e não necessariamente estão implementadas.

---

## 🛠️ Tecnologias

### Backend

* [Node.js](https://nodejs.org/)
* [NestJS](https://nestjs.com/)
* TypeScript
* TypeORM
* MySQL

### Testes

* Vitest

### Desenvolvimento

* Git
* GitHub
* Insomnia
* MySQL Workbench
* Visual Studio Code

---

## 🏗️ Arquitetura

O backend utiliza uma arquitetura baseada na separação de responsabilidades do NestJS:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

### Controller

Responsável por receber as requisições HTTP e encaminhar as operações para o Service.

### Service

Responsável pela lógica da aplicação e pela comunicação com o Repository.

### Repository

Responsável pela comunicação com o banco de dados através do TypeORM.

### Database

Banco de dados MySQL responsável pelo armazenamento persistente das informações.

---

## 👤 Usuários

O primeiro módulo desenvolvido é o módulo de usuários.

Atualmente, a entidade `User` possui informações como:

* ID
* Nome
* E-mail
* Senha armazenada como hash
* Data de nascimento
* Altura

O gerenciamento de usuários está sendo desenvolvido de forma incremental, começando pela estrutura da entidade, Service e Controller.

---

## 🧪 Testes

O projeto utiliza **Vitest** para testes unitários.

Atualmente existem testes para:

### UsersService

* Criação do Service
* Busca de usuários
* Retorno de lista vazia
* Criação de usuário

### UsersController

* Criação de usuário
* Busca de usuários

Os testes utilizam mocks para isolar as responsabilidades de cada camada.

Exemplo do fluxo testado:

```text
Controller
    ↓
Mock do Service
    ↓
Resultado esperado
```

Para executar os testes:

```bash
npm test
```

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de executar o projeto, tenha instalado:

* Node.js
* npm
* MySQL
* Git

### 1. Clone o repositório

```bash
git clone https://github.com/Bfr-Jhon/MoveUp-api.git
```

### 2. Entre na pasta

```bash
cd MoveUp-api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto.

Exemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=moveup
```

> Não versionar o arquivo `.env`. As credenciais devem permanecer apenas no ambiente local.

### 5. Execute o projeto

```bash
npm run start:dev
```

A API ficará disponível localmente na porta configurada pelo projeto.

---

## 📂 Estrutura atual

A estrutura principal do projeto segue o padrão de módulos do NestJS:

```text
src/
├── users/
│   ├── entities/
│   │   └── user.entity.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.controller.spec.ts
│   └── users.service.spec.ts
│
├── app.module.ts
└── main.ts
```

A estrutura será expandida conforme novos módulos forem implementados.

---

## 🌿 Estratégia de desenvolvimento

O desenvolvimento é organizado utilizando branches de feature.

Exemplo:

```text
main
 │
 ├── feature/users-entity
 │
 ├── feature/auth
 │
 ├── feature/workouts
 │
 └── feature/workout-history
```

Cada funcionalidade é desenvolvida e testada em sua própria branch antes de ser integrada à `main`.

Fluxo utilizado:

```text
Criar branch
     ↓
Desenvolver
     ↓
Testar
     ↓
Commit
     ↓
Push
     ↓
Merge na main
     ↓
Nova feature
```

---

## 🗺️ Roadmap

### Backend

* [x] Estrutura inicial do projeto
* [x] Configuração do NestJS
* [x] Configuração do TypeORM
* [x] Estrutura inicial de usuários
* [x] Users Service
* [x] Users Controller
* [x] Testes unitários do Service
* [x] Testes unitários do Controller
* [ ] DTOs
* [ ] Validação de dados
* [ ] CRUD completo de usuários
* [ ] Autenticação
* [ ] Autorização
* [ ] Módulo de exercícios
* [ ] Módulo de treinos
* [ ] Histórico de treinos
* [ ] Sistema de evolução
* [ ] Sistema de adaptação dos treinos
* [ ] Lembretes

### Frontend

* [ ] Definição da interface
* [ ] Tela inicial
* [ ] Cadastro e login
* [ ] Dashboard
* [ ] Calendário de treinos
* [ ] Execução do treino
* [ ] Histórico
* [ ] Acompanhamento de evolução

### Futuro

* [ ] Integração com recursos de inteligência artificial
* [ ] Recomendações personalizadas
* [ ] Aplicação mobile
* [ ] Melhorias de observabilidade
* [ ] Deploy da aplicação

---

## 📌 Status do projeto

**Em desenvolvimento 🚧**

O projeto está sendo construído de forma incremental, com foco em aprendizado, organização de código, testes e boas práticas de desenvolvimento.

---

## 👨‍💻 Autor

**Jhonatha Oliveira**

Desenvolvedor em formação com foco em desenvolvimento Full Stack JavaScript/TypeScript.

GitHub: [Bfr-Jhon](https://github.com/Bfr-Jhon)

# Order Management System

## 📌 Descrição do Projeto
Este é um sistema de gerenciamento de pedidos full-stack, composto por um backend desenvolvido em C# com .NET e um frontend desenvolvido em Next.js com TypeScript, TailwindCSS e shadcn.

## 🏗 Estrutura do Projeto

### Backend (C# .NET)
O backend foi desenvolvido utilizando C# e .NET e tem como funções principais:
- Criar, listar e visualizar pedidos
- Utilizar Entity Framework para manipulação do banco de dados PostgreSQL
- API RESTful para comunicação com o frontend

#### Tecnologias Utilizadas
- C# .NET 8
- Entity Framework Core
- PostgreSQL
- Azure Service Bus (tentativa de integração, não concluída)

### Frontend (Next.js)
O frontend foi desenvolvido utilizando Next.js, Tailwind e Shadcn com TypeScript e tem as seguintes funcionalidades:
- Formulário para criação de novos pedidos
- Tabela responsiva para listar pedidos
- Modal para exibição dos detalhes do pedido

#### Tecnologias Utilizadas
- Next.js 15
- TypeScript
- TailwindCSS
- shadcn/ui
- Axios para consumo da API

## 🚀 Como Rodar o Projeto

### Configuração do Banco de Dados e Frontend com Docker
1. Certifique-se de que o Docker está instalado em sua máquina.
2. Execute o seguinte comando para subir o banco de dados e o frontend:
   ```sh
   docker-compose up
   ```

O frontend ficará disponível em `http://localhost:3000` e o banco de dados em `localhost:5432` db_name: `ordersdb` password: `postgres`.

### Configuração do Backend
1. Acesse a pasta do backend:
   ```sh
   cd backend/
   ```
2. Execute a migração do banco de dados:
   ```sh
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```
3. Rode a aplicação:
   ```sh
   dotnet run
   ```

## ⚠ Problemas Encontrados
Durante o desenvolvimento, foram encontradas dificuldades na integração com o **Azure Service Bus** e na **criação do container do backend no Docker**. Devido a esses problemas, a solução encontrada foi rodar o backend manualmente enquanto o banco de dados e o frontend são executados via Docker.


---

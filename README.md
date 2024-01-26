## Objetivo do Projeto:
O objetivo deste projeto é desenvolver um sistema de crachá virtual para o processo seletivo do Laboratório de Engenharia de Software (LEDES). O crachá permitirá que os usuários atualizem suas informações e que os administradores aprovem essas atualizações.

## Implantação:
Preparar o aplicativo para implantação, configurando variáveis de ambiente e ajustando configurações para produção.

## Requisitos Funcionais:

1. **Desenvolvimento de Crachá Virtual:**
   - Desenvolver um crachá virtual que possa ser acessado em navegadores de dispositivos móveis, tablets ou PCs.
   
2. **Interface Adaptável e Fluida:**
   - Garantir que a interface do crachá seja adaptável e fluida, ajustando-se automaticamente a diferentes tamanhos de tela e dispositivos.

3. **Serviço de Autenticação:**
   - Implementar um serviço de autenticação para os usuários acessarem o crachá virtual, utilizando um sistema de login seguro.

4. **Atualização de Informações pelo Usuário:**
   - Permitir que os usuários atualizem suas informações no crachá, como nome, cargo, foto, etc.

5. **Aprovação do Administrador:**
   - Estabelecer um fluxo de aprovação, onde as atualizações de informações feitas pelo usuário só serão aplicadas após a aprovação de um administrador.

## Requisitos Não Funcionais:

1. **Compatibilidade com Navegadores:**
   - Garantir que o crachá virtual seja compatível com os principais navegadores da web, como Google Chrome, Mozilla Firefox, Safari, etc.

2. **Segurança dos Dados:**
   - Assegurar a segurança das informações dos usuários, utilizando práticas recomendadas de criptografia e proteção contra ataques cibernéticos.

3. **Desempenho e Velocidade:**
   - Priorizar o desempenho e a velocidade de carregamento do crachá virtual, otimizando o código e reduzindo o tempo de resposta do servidor.

4. **Usabilidade e Experiência do Usuário:**
   - Fornecer uma experiência de usuário intuitiva e agradável, com navegação fácil e compreensível em todas as funcionalidades do crachá.

5. **Escalabilidade:**
   - Projetar o sistema de forma escalável, capaz de lidar com um aumento no número de usuários e de atualizações de informações sem comprometer o desempenho.

6. **Adaptabilidade de Design:**
   - Certificar-se de que o design do crachá seja adaptável a diferentes dispositivos e tamanhos de tela, proporcionando uma experiência consistente em todos os casos.

## Tecnologias Utilizadas:
- HTML
- CSS
- JavaScript
- Node.js
- PostgreSQL

# Políticas de Controle de Versão e Colaboração

## Branches

- As branches são criadas para desenvolver novas funcionalidades (features) ou corrigir bugs.
- Cada nova funcionalidade ou correção de bug tem sua própria branch dedicada.
- O nome da branch reflete o objetivo da funcionalidade ou correção de bug, seguindo uma convenção clara e descritiva.

## Commits e Pull Requests

- O trabalho é dividido em commits menores e específicos, com mensagens de commit descritivas.
- Após a conclusão do trabalho em uma branch, um pull request é aberto para mesclar as alterações na branch principal.
- Cada pull request inclui uma descrição detalhada das mudanças realizadas e dos problemas resolvidos.
- Todos os pull requests passam por revisão por pares antes de serem mesclados.
- Durante a revisão, são identificados problemas de código e sugestões de melhorias.
- As discussões sobre o código ocorrem diretamente nos pull requests, facilitando o acompanhamento do progresso e a comunicação entre os membros da equipe.

## Verificação de Lint Code

- Antes de abrir um pull request, o código é verificado com um linter para garantir conformidade com as diretrizes de estilo de código definidas.
- A verificação de lint code ajuda a manter um estilo de código consistente e a identificar possíveis problemas antes mesmo da revisão por pares.

## Estrutura Vertical

- A equipe utiliza uma abordagem de estrutura vertical para desenvolver e testar diferentes partes do sistema separadamente.
- Cada parte do sistema é desenvolvida e testada de forma independente, antes de ser integrada ao código principal.

# Diagrama de Arquitetura:

![Diagrama](https://cdn.discordapp.com/attachments/1184622679685333042/1200487248035061931/Arquitetura_Micro_1.jpg?ex=65c65bdf&is=65b3e6df&hm=7d331b7d6638451264c7ff38b6970c6b35d6eb5f40380cfe34ad30ded22bf062&)

## Serviço de Aprovação do Administrador

- Este serviço é responsável por gerenciar o fluxo de aprovação das atualizações realizadas pelos usuários no sistema.
- Quando um usuário solicita uma modificação nas informações do crachá, como nome, cargo, foto, etc., essa solicitação é encaminhada para o serviço de aprovação do administrador.
- O serviço de aprovação do administrador verifica se a solicitação atende aos critérios e políticas estabelecidos pela organização. Isso pode incluir a verificação de dados, a validação das alterações propostas e a análise da conformidade com as políticas internas da empresa.
- Se a solicitação for aprovada, o serviço de aprovação atualiza as informações do crachá no sistema principal. Caso contrário, a solicitação é rejeitada e o usuário é notificado sobre o motivo da rejeição.
- Esse serviço desempenha um papel fundamental na garantia da integridade e consistência dos dados do sistema, permitindo que apenas modificações autorizadas e validadas sejam aplicadas.

## Sistema de Amostragem de Crachá Modificação de Informações

- Este serviço é responsável por gerenciar a exibição e modificação das informações do crachá dos usuários no sistema.
- Ele fornece uma interface para os usuários visualizarem seus dados de crachá, como nome, cargo, foto, entre outros. Além disso, permite que os usuários solicitem modificações nessas informações, como atualização de nome, cargo, foto, etc.
- Quando um usuário solicita uma modificação, o sistema encaminha essa solicitação para o serviço de aprovação do administrador, que verifica e valida a solicitação conforme mencionado anteriormente.
- Após a aprovação, o serviço de amostragem de crachá modifica as informações do crachá no sistema principal, refletindo as atualizações solicitadas pelo usuário.
- Esse serviço desempenha um papel crucial na experiência do usuário, fornecendo uma maneira intuitiva e conveniente para os usuários gerenciarem suas informações de crachá, ao mesmo tempo em que mantém um processo de aprovação robusto para garantir a precisão e a integridade dos dados.

---

## Comunicação entre Microsserviços:

Comunicação realizada através de protocolos REST.

---

## Bancos de Dados:

Utilização do PostgreSQL.

---

## Conceitos Computacionais:

- **Segurança (Security)**
- **Latência (Latency)**
- **Roteamento das Rotas (Routing)**
- **Descoberta de Serviços (Service Discovery)**
- **Response Cache**
- **Padrão de Tentativas (Retry Pattern / Circuit-Breaker)**
- **Limite de Consultas (Rate Limit)**
- **Balanceamento de Larga (Load Balancing / Reverse Proxy)**
- **Autenticação e Authorização (Authentication / Authorization)**
- **Query / Header transformation**
- **Agregação de Requests (Request composition / Aggregation)**

---

## Ferramentas de API Gateway:

- **API Gateway Flexível:** O Express Gateway permite configurar e gerenciar várias APIs e endpoints de forma centralizada. Ele atua como um ponto de entrada para as solicitações de clientes, roteando essas solicitações para os serviços apropriados.

- **Gerenciamento de Solicitações:** O Express Gateway permite definir políticas de roteamento e transformação de solicitações, controlando como as solicitações são encaminhadas e processadas pelos serviços de destino. Isso inclui roteamento com base em caminhos de URL, parâmetros de solicitação, cabeçalhos e outros critérios.

- **Segurança de API:** O Express Gateway oferece recursos de segurança avançados para proteger suas APIs contra ameaças externas. Ele suporta autenticação de clientes, autorização baseada em papéis, controle de acesso granular e integração com provedores de identidade, como OAuth 2.0 e OpenID Connect.

- **Escalabilidade e Desempenho:** O Express Gateway é construído sobre o Node.js e o Express.js, o que o torna altamente escalável e eficiente em termos de desempenho. Ele é capaz de lidar com um grande volume de solicitações de forma rápida e eficiente.

### Endpoints:

![Endpoints](https://cdn.discordapp.com/attachments/1184622679685333042/1200493457572118608/image.png?ex=65c661a8&is=65b3eca8&hm=8b8c80688a9a099a5bb1633fca809ad96e6c2dfa77bc645005c884cdb639428e&)

#### Auth - Autenticação do usuário

- **POST /auth/signup**: Registra um usuário.
- **POST /auth/login**: Faz login de um usuário.

#### User - Visualização e modificação das informações do jogador

- **GET /user**: Mostra informações do usuário autenticado.
- **PUT /user**: Edita informações do usuário autenticado.

#### Admin - Aprovação e reprovação de solicitações de usuários

- **POST /admin/review**: Aprova ou reprova solicitação de alteração do usuário.
- **GET /admin/requests**: Obtém uma lista de todas as solicitações de alteração de usuário.
- **POST /admin/makeadmin**: Promove um usuário a administrador.

Estes endpoints descrevem as operações disponíveis para autenticação de usuários, visualização e edição de informações de jogador, além de aprovação e reprovação de solicitações de usuários por administradores.

## Descrição dos Testes de Unidade

### admin.test:

- **Teste: should be able to approve user changes**
  - **Propósito:** Verifica se um administrador pode aprovar as alterações de um usuário.
  - **Entrada:** Requisição POST para '/admin/review' com informações de registro do usuário e situação aprovada.
  - **Saída:** Resposta HTTP 200 com corpo da resposta.

- **Teste: should be able to disapprove user changes**
  - **Propósito:** Verifica se um administrador pode reprovar as alterações de um usuário.
  - **Entrada:** Requisição POST para '/admin/review' com informações de registro do usuário e situação reprovada.
  - **Saída:** Resposta HTTP 200 com corpo da resposta.

- **Teste: should be able to list user requests**
  - **Propósito:** Verifica se um administrador pode listar as solicitações de usuário.
  - **Entrada:** Requisição GET para '/admin/requests'.
  - **Saída:** Resposta HTTP 200 com corpo da resposta.

- **Teste: should be able to promote user to admin**
  - **Propósito:** Verifica se um administrador pode promover um usuário a administrador.
  - **Entrada:** Requisição POST para '/admin/makeadmin' com informações de registro do usuário a ser promovido.
  - **Saída:** Resposta HTTP 200 com corpo da resposta.

### auth.test:

- **Teste: should create a new user**
  - **Propósito:** Verifica se um novo usuário pode ser criado.
  - **Entrada:** Requisição POST para '/auth/signup' com informações do novo usuário.
  - **Saída:** Resposta HTTP 201 com corpo da resposta.

- **Teste: should login with the user**
  - **Propósito:** Verifica se um usuário pode fazer login com sucesso.
  - **Entrada:** Requisição POST para '/auth/login' com informações de registro e senha do usuário.
  - **Saída:** Resposta HTTP 200.

- **Teste: should not login with a wrong password**
  - **Propósito:** Verifica se o login falha com uma senha incorreta.
  - **Entrada:** Requisição POST para '/auth/login' com informações de registro e senha incorreta.
  - **Saída:** Resposta HTTP 400.

- **Teste: should not login with a wrong register**
  - **Propósito:** Verifica se o login falha com um registro incorreto.
  - **Entrada:** Requisição POST para '/auth/login' com registro incorreto.
  - **Saída:** Resposta HTTP 400.

### user.test:

- **Teste: should get user info**
  - **Propósito:** Verifica se as informações do usuário podem ser recuperadas com sucesso.
  - **Entrada:** Requisição GET para '/user' com JWT autenticado.
  - **Saída:** Resposta HTTP 200 com corpo da resposta.

- **Teste: should edit user info**
  - **Propósito:** Verifica se as informações do usuário podem ser editadas com sucesso.
  - **Entrada:** Requisição PUT para '/user' com JWT autenticado e informações do usuário a serem editadas.
  - **Saída:** Resposta HTTP 200 com corpo da resposta.

- **Teste: should not get info of an unauthenticated user**
  - **Propósito:** Verifica se o acesso às informações do usuário é negado sem autenticação.
  - **Entrada:** Requisição GET para '/user' sem JWT.
  - **Saída:** Resposta HTTP 401.

- **Teste: should not get info of a user that does not exist**
  - **Propósito:** Verifica se o acesso às informações do usuário é negado para um usuário que não existe.
  - **Entrada:** Requisição GET para '/user' com JWT de um usuário inexistente.
  - **Saída:** Resposta HTTP 404.

- **Teste: should not edit info of an unauthenticated user**
  - **Propósito:** Verifica se a edição das informações do usuário é negada sem autenticação.
  - **Entrada:** Requisição PUT para '/user' sem JWT.
  - **Saída:** Resposta HTTP 401.

- **Teste: should not edit info of a user with missing fields**
  - **Propósito:** Verifica se a edição das informações do usuário é negada se campos obrigatórios estiverem ausentes.
  - **Entrada:** Requisição PUT para '/user' com JWT e informações do usuário com campos ausentes.
  - **Saída:** Resposta HTTP 400.

- **Teste: should not edit info of a user in 'ANALYSIS' situation**
  - **Propósito:** Verifica se a edição das informações do usuário é negada se o usuário estiver em situação de análise.
  - **Entrada:** Requisição PUT para '/user' com JWT de um usuário em situação de análise.
  - **Saída:** Resposta HTTP 403.

Estes testes abrangem uma variedade de cenários para garantir que a aplicação funcione conforme o esperado e que as regras de negócio sejam aplicadas corretamente.
## Para ligar o projeto:

1. **npm i**:
   - Este comando é uma abreviação para `npm install`.
   - Ele instala todas as dependências listadas no arquivo `package.json` do projeto.
   - É utilizado para baixar e instalar todas as bibliotecas e pacotes necessários para o funcionamento do projeto.

2. **npx knex migrate:latest**:
   - `npx` é um utilitário que permite executar comandos de pacotes npm instalados localmente.
   - `knex migrate:latest` é um comando do Knex.js, um construtor de consultas SQL para Node.js.
   - Ele executa as migrações do banco de dados, aplicando todas as migrações pendentes e atualizando o esquema do banco de dados para a versão mais recente definida nos arquivos de migração.

3. **npm start**:
   - Este comando é geralmente definido no arquivo `package.json` na seção `scripts`.
   - Ele inicia a aplicação, conforme especificado no script de inicialização do projeto.
   - Pode ser personalizado para iniciar o servidor Node.js, compilar arquivos, iniciar processos de construção, etc.

Portanto, para ligar (ou iniciar) você executa esses comandos na sequência:

```bash
npm i
npx knex migrate:latest
npm start

Documento de Requisitos - 
Sistema de Avaliação e Recomendação de Filmes

# **Histórias de Usuário**

### **ID:**  
HU-001

### **Título:**  
Autocadastro de usuário

### **Descrição:**  
Como **usuário**, eu quero **poder me auto cadastrar no sistema se ainda não possuir conta** para **acessar as funcionalidades da conta**

#### Cenário 1: Cadastro realizado com sucesso
- **Dado** que o usuário está na página de autocadastro,
- **Quando** o usuário insere um e-mail e senha válidos,
- **E** preenche todas as informações obrigatórias como data de nascimento e nome,
- **Então** o sistema cria a nova conta,
- **E**redireciona o usuário para a tela de inicial do sistema

#### Cenário 2: Falha de email já existente
- **Dado** que o usuário está na página de autocadastro,
- **Quando** insere um e-mail já utilizado no formulário,
- **Então** uma mensagem de erro deve ser exibida, informando que o e-mail está em uso,
- **E** o usuário deve poder tentar inserir outro e-mail novamente.

#### Cenário 3: Alteração de dados com sucesso
- **Dado** que o usuário está logado,
- **E** está na seção de dados pessoais,
- **Quando** acessa o botão “Editar meus dados”,
- **Então** o sistema deve permitir alterar as informações pessoais cadastradas, incluindo: nome completo, senha e e-mail


### **Prioridade:**  
Alta

### **Estimativa de Esforço:**  
5 Story Points

### **Dependências:**  
Não há dependências

### **Notas/Comentários Adicionais:**
Cada email de usuário é único no sistema



### **ID:**  
HU-002

### **Título:**  
Autenticação da conta

### **Descrição:**  
Como **usuário**, eu quero ** realizar login na plataforma** para **acessar minha conta e utilizar as funcionalidades restritas a usuários autenticados**

#### Cenário 1: Login bem-sucedido
- **Dado** que o usuário está na página de login,
- **Quando** o usuário insere corretamente seu e-mail e senha cadastrados,
- **Então** o sistema deve autenticá-lo com sucesso,
- **E** o usuário deve ser redirecionado para a página de preferência de gênero (HU-007) caso seja o primeiro login ou para a última página acessada antes do login.

#### Cenário 2: Falha no login por credenciais inválidas
- **Dado** que o usuário está na página de login,
- **Quando** o usuário insere incorretamente seu e-mail ou senha,
- **Então** o sistema deve exibir uma mensagem de erro informando que o e-mail ou a senha são inválidos,
- **E** o usuário deve poder tentar inserir as credenciais novamente.

### **Prioridade:**  
Alta

### **Estimativa de Esforço:**  
4 Story Points

### **Dependências:**  
Auto cadastro de usuário HU-001

### **Notas/Comentários Adicionais:**
Depois de determinado tempo, o login expira e o usuário terá de autenticar novamente 




—



## **História de Usuário**

### **ID:**  
HU-003

### **Título:**  
Avaliação de filmes pelos usuários.

### **Descrição:**  
Como **usuário da plataforma**, eu quero **avaliar filmes com uma nota entre 0.5 a 5 estrelas**, variando de 0.5 em 0.5, para que **possa registrar minha opinião e ajudar na criação de recomendações personalizadas**.

### **Critérios de Aceitação:**

#### Cenário 1: Avaliação com sucesso
- **Dado** que o usuário clicou no filme desejado,
- **Quando** o usuário seleciona uma nota de 0.5 a 5 estrelas, variando de 0.5 em 0.5,
- **Então** a avaliação deve ser salva e exibida no cartaz do filme.

#### Cenário 2: Avaliação alterada
- **Dado** que o usuário já avaliou o filme anteriormente,
- **Quando** o usuário altera a nota,
- **Então** a nova avaliação deve substituir a anterior.

### **Prioridade:**  
Alta

### **Estimativa de Esforço:**  
5 Story Points

### **Dependências:**  
- Implementação da API para salvar avaliações.

### **Notas/Comentários Adicionais:**  
- Avaliações podem ser usadas para ajustar as recomendações de outros usuários.

---

## **História de Usuário**

### **ID:**  
HU-004

### **Título:**  
Comentários sobre filmes.

### **Descrição:**  
Como **usuário da plataforma**, eu quero **comentar sobre os filmes que assisti** para que **possa compartilhar minha opinião detalhada com outros usuários**.

### **Critérios de Aceitação:**

#### Cenário 1: Comentário enviado com sucesso
- **Dado** que o usuário está na página de um filme,
- **Quando** o usuário escreve um comentário e clica em enviar,
- **Então** o comentário deve ser exibido na página do filme.

#### Cenário 2: Comentário anônimo enviado com sucesso
- **Dado** que o usuário está na página de um filme,
- **Quando** o usuário escreve um comentário,
- **E** seleciona a opção anônimo ao enviar,
- **Então** o comentário deve ser exibido na página do filme sem informações do autor.

#### Cenário 3: Comentário removido
- **Dado** que o usuário comentou em um filme,
- **Quando** o usuário opta por remover seu comentário,
- **Então** o comentário deve ser excluído da página do filme.

### **Prioridade:**  
Média

### **Estimativa de Esforço:**  
5 Story Points

### **Dependências:**  
- Implementação da funcionalidade de comentários.
- Controle de moderação para os comentários.

### **Notas/Comentários Adicionais:**  
- Comentários podem ser moderados para manter a qualidade do conteúdo.

---

## **História de Usuário**

### **ID:**  
HU-005

### **Título:**  
Recomendações personalizadas de filmes.

### **Descrição:**  
Como **usuário da plataforma**, eu quero **receber recomendações de filmes com base nas minhas avaliações e preferências** para que **eu possa descobrir novos conteúdos que atendam ao meu gosto pessoal**.

### **Critérios de Aceitação:**

#### Cenário 1: Recomendação baseada em avaliações iniciais
- **Dado** que o usuário tem preferências de gênero definidas,
- **Quando** acessa a plataforma pela primeira vez,
- **Então** recomendações devem ser exibidas com base nos gêneros selecionados.

#### Cenário 2: Recomendação ajustada com o tempo
- **Dado** que o usuário avalia filmes ao longo do tempo,
- **Quando** novas avaliações são feitas,
- **Então** as recomendações devem ser ajustadas para refletir o gosto atualizado do usuário.

### **Prioridade:**  
Alta

### **Estimativa de Esforço:**  
8 Story Points

### **Dependências:**  
- Integração com a API do TMDB.
- Sistema de aprendizado baseado nas avaliações dos usuários.

### **Notas/Comentários Adicionais:**  
- Recomendação deve ser adaptar-se conforme o usuário interage com o sistema.


## **História de Usuário** 

### **ID:** 
HU-006 

### **Título:** 
Personalização de preferências de gênero. 

### **Descrição:** 
Como **usuário da plataforma**, eu quero **configurar minhas preferências de gênero de filmes** para que **eu receba recomendações mais alinhadas com meus interesses**. 

### **Critérios de Aceitação:** 

#### Cenário 1: Configuração de preferências na primeira vez 
- **Dado** que o usuário é novo na plataforma, 
- **Quando** o usuário acessa a página inicial, 
- **Então** uma tela de configuração de preferências de gênero deve ser exibida. 

#### Cenário 2: Alteração de preferências de gênero 
- **Dado** que o usuário já configurou suas preferências, 
- **Quando** o usuário acessa a área de configurações, 
- **Então** deve ser possível alterar as preferências de gênero. 

### **Prioridade:** 
Média 

### **Estimativa de Esforço:** 
5 Story Points 

### **Dependências:** 
- Interface de usuário para configuração de preferências. 

### **Notas/Comentários Adicionais:** 
- As preferências de gênero devem influenciar diretamente as recomendações iniciais. 


## **História de Usuário** 

### **ID:** 
HU-007 

### **Título:** 
Histórico de filmes assistidos e avaliados. 

### **Descrição:** 
Como **usuário da plataforma**, eu quero **acessar um histórico dos filmes que assisti e avaliei** para que **possa rever minhas avaliações. 

### **Critérios de Aceitação:** 

#### Cenário 1: Visualização do histórico 
- **Dado** que o usuário está na plataforma, 
- **Quando** acessa a seção de histórico, 
- **Então** deve ver uma lista de todos os filmes que avaliou. 

#### Cenário 2: Remoção de um filme do histórico 
- **Dado** que o usuário visualiza o histórico, 
- **Quando** opta por remover um filme, 
- **Então** o filme deve ser excluído da lista. 

### **Prioridade:** 
Baixa 

### **Estimativa de Esforço:** 
4 Story Points 

### **Dependências:** 
- Banco de dados para armazenar o histórico. 
- Interface de usuário para exibir o histórico. 

### **Notas/Comentários Adicionais:** 
- O histórico mostrará apenas filmes que foram avaliados e assistidos.


## **História de Usuário** 

### **ID:** 
HU-008 

### **Título:** 
Busca de filmes na plataforma. 

### **Descrição:** 
Como **usuário da plataforma**, eu quero **buscar filmes por título ou gênero** para que **eu possa encontrar rapidamente filmes que desejo assistir ou avaliar**. 

### **Critérios de Aceitação:** 

#### Cenário 1: Busca por título 
- **Dado** que o usuário está na plataforma, 
- **Quando** digita o nome de um filme na barra de busca, 
- **Então** uma lista de resultados relevantes deve ser exibida. 

#### Cenário 2: Busca por gênero 
- **Dado** que o usuário está na plataforma, 
- **Quando** seleciona um gênero na busca, 
- **Então** deve ver uma lista de filmes do gênero selecionado. 

### **Prioridade:** 
Alta 

### **Estimativa de Esforço:** 
6 Story Points 

### **Dependências:** 
- Integração com a API do TMDB. 
- Interface de usuário para a barra de busca. 

### **Notas/Comentários Adicionais:** 
- A busca deve ser rápida e eficiente, com sugestões automáticas baseadas no input do usuário.


## **História de Usuário** 

### **ID:** 
HU-009 

### **Título:** 
Busca de filmes mais bem avaliados na plataforma. 

### **Descrição:** 
Como **usuário da plataforma**, eu quero **buscar filmes mais bem avaliados** para que **eu possa encontrar filmes avaliados positivamente**. 

### **Critérios de Aceitação:** 

#### Cenário 1: Busca pelos filmes mais bem avaliados. 
- **Dado** que o usuário está na plataforma, 
- **Quando** seleciona a lista de filmes mais bem avaliados na barra superior, 
- **Então** uma lista de resultados com os filmes mais bem avaliados deve ser exibida. 

### **Prioridade:** 
Alta 

### **Estimativa de Esforço:** 
4 Story Points 

### **Dependências:** 
- Integração com a API do TMDB. 
- Interface de usuário para a barra de busca. 
- Avaliação dos usuários. A lista é alterada dinamicamente.

### **Notas/Comentários Adicionais:** 
- A busca deve ser rápida e eficiente, mostrando uma lista de top 50 filmes, de diferentes gêneros, mais bem avaliados na plataforma. Esta lista deve ser atualizada dinamicamente, de acordo com as avaliações dos usuários.

## **História de Usuário** 

### **ID:** 
HU-010

### **Título:** 
Busca de filmes mais bem avaliados por gênero na plataforma. 

### **Descrição:** 
Como **usuário da plataforma**, eu quero **buscar filmes mais bem avaliados** em um **gênero específico** para que **eu possa encontrar filmes do meu gênero mais bem avaliados positivamente**. 

### **Critérios de Aceitação:** 

#### Cenário 1: Busca pelos filmes mais bem avaliados em determinado gênero. 
- **Dado** que o usuário está na plataforma, 
- **Quando** seleciona a lista de filmes mais bem avaliados na barra superior, 
- **Então**  surge uma lista de gêneros e posteriormente a lista de filmes mais bem avaliados neste gênero deve ser exibida. 

### **Prioridade:** 
Alta 

### **Estimativa de Esforço:** 
4 Story Points 

### **Dependências:** 
- Integração com a API do TMDB. 
- Interface de usuário para a barra de busca. 
- Avaliação dos usuários.

### **Notas/Comentários Adicionais:** 
- A busca deve ser rápida e eficiente, mostrando uma lista de filmes mais bem avaliados na plataforma, de um gênero específico. Esta lista deve ser atualizada dinamicamente, de acordo com as avaliações dos usuários.

## **História de Usuário** 

### **ID:** 
HU-011

### **Título:** 
Lista de filmes favoritos. 

### **Descrição:** 
Como **usuário da plataforma**, eu quero **acessar uma lista de filmes que favoritei**  para que ** eu possa acessar mais facilmente os meus filmes favoritos e as suas informações**. 

### **Critérios de Aceitação:** 

#### Cenário 1: Adição de um filme à lista 
- **Dado** que o usuário está logado na plataforma, 
- **Quando** acessa a página de um filme e clica no botão para “adicionar aos favoritos”, 
- **Então** o filme deve ser adicionado a lista e deve ser retornada a mensagem ao usuário “Filme incluído a lista de favoritos”. 

#### Cenário 2: Remoção de um filme da lista 
- **Dado** que o usuário está logado na plataforma e visualiza a sua lista de favoritos, 
- **Quando** opta por remover um filme e o seleciona, 
- **Então** o filme deve ser excluído da lista e deve ser retornada a mensagem ao usuário “Filme excluído da lista de favoritos. 

### **Prioridade:** 
Baixa 

### **Estimativa de Esforço:** 
4 Story Points 

### **Dependências:** 
- Banco de dados para armazenar a lista de filmes favoritos. 
- Interface de usuário para exibir a lista de filmes favoritos. 

### **Notas/Comentários Adicionais:** 
- A interface da lista deve ser rápida e responsiva, sempre mostrando a versão mais atualizada para o usuário após uma ação de inserção/remoção.

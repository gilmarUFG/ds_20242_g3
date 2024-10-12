### ds_20242_g3
Repositório definido para a manutenção do controle de versão dos artefatos do projeto de do Grupo 3, da Disciplina de Domínios de Software, no semestre 2024-2.

### Nome do Projeto:
Assista AI - Sistema de Avaliação e Recomendação de Filmes

### Descrição:
O sistema permitirá que usuários avaliem e comentem filmes, além de fornecer recomendações personalizadas com base nos interesses e avaliações dos usuários. Ao iniciar, o sistema utiliza preferências de gênero para sugerir filmes, e, com o tempo, adapta-se às avaliações individuais, gerando recomendações mais precisas.

### Problema
Os usuários de plataformas de streaming frequentemente têm dificuldades em encontrar novos conteúdos relevantes e personalizados que atendam aos seus gostos específicos.

### Objetivos da Solução
Implementar um sistema baseado na comunidade ativa, onde a partir das avaliações dos usuários, seja por meio de estrelas ou comentários, conseguimos gerar recomendações personalizadas.

### Grupo
Este projeto será desenvolvido pelos componentes do grupo 3:

|Matrícula|Nome|Usuário Git| Papel |
|---|---|---|---|
|202201680|ALINE AYUMI SOMA HAMANO|[AyuHamano](https://github.com/AyuHamano)| Full-stack
|202004743|AMADEU LEE|[amadeulee](https://github.com/amadeulee)| Back-end
|202201695|JOÃO GABRIEL CAVALCANTE FRANÇA|[mentejoao](https://github.com/mentejoao)| Desenvolvedor IA
|202004761|JOSÉ CARLOS LEE|[jcal1998 ](https://github.com/jcal1998)| Full-stack
|202201700|LEONARDO MOREIRA DE ARAÚJO|[leonardo029](https://github.com/leonardo029)| Desenvolver IA/Back-end

### Backlog do Produto

1. RF001 - O sistema deve permitir que os usuários realizem o autocadastro inserindo e-mail, senha e informações obrigatórias, como data de nascimento e nome, para criar uma nova conta. 
2. RF002 - O sistema deve implementar a autenticação dos usuários, permitindo login com e-mail e senha, e redirecionar para a página apropriada após o login bem-sucedido. 
3. RF003 - O sistema deve permitir que os usuários avaliem filmes com notas variando de 0.5 a 5 estrelas e atualizem suas avaliações conforme necessário.
4. RF004 - O sistema deve permitir que os usuários façam comentários sobre filmes, com opção de envio anônimo e possibilidade de exclusão dos comentários.
5. RF005 - O sistema deve gerar recomendações personalizadas de filmes com base nas avaliações e preferências de gênero dos usuários.
6. RF006 - O sistema deve permitir que os usuários configurem e alterem suas preferências de gênero, influenciando as recomendações de filmes.
7. RF007 - O sistema deve exibir um histórico dos filmes assistidos e avaliados pelos usuários, permitindo a remoção de filmes do histórico.
8. RF008 - O sistema deve implementar uma função de busca de filmes por título ou gênero, exibindo os resultados relevantes.
9. RF009 - O sistema deve exibir uma lista dos filmes mais bem avaliados na plataforma, permitindo busca por essa categoria.
10. RF010 - O sistema deve permitir a busca de filmes mais bem avaliados por gênero, exibindo uma lista dinâmica com base nas avaliações.
11. RF011 - O sistema deve permitir que os usuários adicionem e removam filmes da sua lista de favoritos, acessando essa lista posteriormente.



### Requisitos Não Funcionais

1. RNF001 - Usabilidade: <Descrição do Requisito não Funcional>.
2. RNF002 - Segurança: <Descrição do Requisito não Funcional>..
3. RNF003 - Desempenho: <Descrição do Requisito não Funcional>..
4. RNF004 - Confiabilidade: <Descrição do Requisito não Funcional>.
5. RNF005 - Manutenibilidade: <Descrição do Requisito não Funcional>.
6. RNF006 - Portabilidade: <Descrição do Requisito não Funcional>.
7. RNF007 - Conectividade: <Descrição do Requisito não Funcional>.

### Regras de Negócio
1. RN01 - <Descrição da Regra de Negócio>.
2. RN02 - <Descrição da Regra de Negócio>.
3. RN03 - <Descrição da Regra de Negócio>.
4. RN04 - <Descrição da Regra de Negócio>.
5. RN05 - <Descrição da Regra de Negócio>.

[//]: # (### Modelo Arquitetural)

[//]: # (Modelo aequitetural MVC)

[//]: # (### Modelo de Interfaces Gráficas)
<Apresentar uma descrição sucinta do modelo de interfaces gráficas do Produto.>

[//]: # (### Tecnologia de Persistência de Dados)

### Interação com sistemas externos
* #### API do TMDB Movies
Consumo da base de dados do TMDB

* #### MovieLens
Modelo de machine learning para recomendação de filmes aos usuários.

### Local do _Deploy_
O nosso planejamento inicial é hospedar nossa aplicação no Heroku ou no Firebase do Google, sendo crucial para nossa escolha a facilidade de configuração e também os recursos ofertados na versão gratuita.

### Cronograma de Desenvolvimento

|Iteração| Descrição                                  |Data Início| Data Fim   |Responsável|Situação|
|---|--------------------------------------------|---|------------|---|---|
|1| Concepção                                  |30/08/2024| 13/09/2024 |Grupo|Concluída|
|2| Preparação                                 |14/09/2024| 27/09/2024 |Grupo|Concluída|
|3| Item(ns) do backlog <RF001,RF002>          |28/09/2024| 19/10/2024 |Grupo|Programada|
|4| Item(ns) do backlog <RF003,RF004>          |12/10/2024| 25/10/2024 |Grupo|Programada|
|5| Item(ns) do backlog <RF005,RF006>          |26/10/2024| 08/11/2024 |Grupo|Programada|
|6| Item(ns) do backlog <RF007,RF008>          |09/11/2024| 22/11/2024 |Grupo|Programada|
|7| Item(ns) do backlog <RF009,RF0010, RF0011> |23/11/2024| 06/12/2024 |Grupo|Programada|
|8| Apresentação do Projeto                    |07/12/2024| 20/12/2024 |Grupo|Programada|

### Iterações x Atividades
|Iteração| Tarefa                                                                       |Data Início| Data Fim   |Responsável|Situação|
|---|------------------------------------------------------------------------------|---|------------|---|---|
|1| Definição do grupo de trabalho                                               |30/08/2024| 30/08/2024 |Grupo|Concluída|
|1| Definição do Tema do Trabalho                                                |30/08/2024| 13/09/2024 |Grupo|Concluída|
|2| Definição do Backlog do produto                                              |13/09/2024| 27/09/2024 |Grupo|Concluída|
|2| Descrição dos itens do backlog do produto                                    |14/09/2024| 27/09/2024 |Grupo|Concluída|
|2| Distribuição dos itens do backlog entre as iterações                         |14/09/2024| 27/09/2024 |Grupo|Concluída|
|2| Definição do modelo arquitetural                                             |14/09/2024| 27/09/2024 |Grupo|Concluída|
|3| Especificação de estórias de usuários dos Item(ns) do backlog <x,y,z>        |28/09/2024| 23/10/2024 |Grupo|Concluída|
|3| Diagrama de classes dos Item(ns) do backlog <RF001 - RF002>                  |28/09/2024| 23/10/2024 |Grupo|Concluída|
|3| Projeto de Interfaces gráficas dos itens do backlog <RF001 - RF002>          |28/09/2024| 23/10/2024 |Grupo|Programada|
|3| Projeto de persistência dos itens do backlog <RF001, RF002>                  |28/09/2024| 23/10/2024 |Grupo|Programada|
|3| Implementação dos itens do backlog <RF001, RF002>*                           |28/09/2024| 23/10/2024 |Grupo|Programada|
|4| Especificação de estórias de usuários dos Item(ns) do backlog <RF003, RF004> |12/10/2024| 25/10/2024 |Grupo|Programada|
|4| Diagrama de classes dos Item(ns) do backlog <RF003, RF004>                   |12/10/2024| 25/10/2024 |Grupo|Programada|
|4| Diagrama de interação/sequencia dos itens do backlog <RF003, RF004>          |12/10/2024| 25/10/2024 |Grupo|Programada|
|4| Projeto de Interfaces gráficas dos itens do backlog <RF003, RF004>           |12/10/2024| 25/10/2024 |Grupo|Programada|
|4| Projeto de persistência dos itens do backlog <RF003, RF004>                  |12/10/2024| 25/10/2024 |Grupo|Programada|
|4| Implementação dos itens do backlog <RF003, RF004>*                           |12/10/2024| 25/10/2024 |Grupo|Programada|
|5| Especificação de estórias de usuários dos Item(ns) do backlog <RF005, RF006> |26/10/2024| 08/11/2024 |Grupo|Programada|
|5| Diagrama de classes dos Item(ns) do backlog <RF005, RF006>                   |26/10/2024| 08/11/2024 |Grupo|Programada|
|5| Projeto de Interfaces gráficas dos itens do backlog <RF005, RF006>           |26/10/2024| 08/11/2024 |Grupo|Programada|
|5| Projeto de persistência dos itens do backlog <RF005, RF006>                  |26/10/2024| 08/11/2024 |Grupo|Programada|
|5| Implementação dos itens do backlog <RF005, RF006>*                           |26/10/2024| 08/11/2024 |Grupo|Programada|
|6| Especificação de estórias de usuários dos Item(ns) do backlog <RF006, RF007> |09/11/2024| 22/11/2024 |Grupo|Programada|
|6| Diagrama de classes dos Item(ns) do backlog <RF006, RF007>                   |09/11/2024| 22/11/2024 |Grupo|Programada|
|6| Projeto de Interfaces gráficas dos itens do backlog <RF006, RF007>           |09/11/2024| 22/11/2024 |Grupo|Programada|
|6| Projeto de persistência dos itens do backlog <RF006, RF007>                  |09/11/2024| 22/11/2024 |Grupo|Programada|
|6| Implementação dos itens do backlog <RF006, RF007>*                           |09/11/2024| 22/11/2024 |Grupo|Programada|
|7| Especificação de estórias de usuários dos Item(ns) do backlog <RF007, RF008> |23/11/2024| 06/12/2024 |Grupo|Programada|
|7| Diagrama de classes dos Item(ns) do backlog <RF007, RF008>                   |23/11/2024| 06/12/2024 |Grupo|Programada|
|7| Diagrama de interação/sequencia dos itens do backlog <RF007, RF008>          |23/11/2024| 06/12/2024 |Grupo|Programada|
|7| Projeto de Interfaces gráficas dos itens do backlog <RF007, RF008>                  |23/11/2024| 06/12/2024 |Grupo|Programada|
|7| Projeto de persistência dos itens do backlog <RF007, RF008>                         |23/11/2024| 06/12/2024 |Grupo|Programada|
|7| Implementação dos itens do backlog <RF007, RF008>*                                  |23/11/2024| 06/12/2024 |Grupo|Programada|
|8| Apresentação do Projeto                                                      |07/12/2024| 20/12/2024 |Grupo|Programada|

* Implementação se aplicará, se os itens da iteração em andamento, forem eleitos para validação do projeto do trabalho.
****

# Universidades brasileiras sob o microscópio
Este repositório contém os dados brutos, o código fonte da análise e os scripts que geraram os gráficos da reportagem disponível [neste link](). Trata-se de uma análise da produção das universidade brasileiras entre 2014 e 2017, feita utilizando os dados mais recentes do [Lieden Ranking](https://www.leidenranking.com/).

## Estrutura do repositório

### Diretório `data`
Contém os dados brutos que foram analisados para a produção da reportagem.

### Diretório `code`
Contém os scripts usados para a análise que deu origem à reportagem e para gerar os dados que são exibidos nos gráficos.

### Diretório `viz`
Contém arquivos em formato SVG e scripts de JavaScript usados para elaborar os gráficos da reportagem. As visualizações foram editadas posteriormente usando o *Adobe Illustrator*.

## Metodologia

Antes de tudo, é importante ressaltar que qualquer maneira de avaliar a produção de universidade carrega uma série de vieses.

Simplesmente contar a quantidade de artigos publicados em periódicos científicos, por exemplo, é um critério que ajuda grandes instituições como USP e Unicamp.

Contar citações, outra medida comum de impacto, favorece instituições que concentram estudos em temas de maior repercussão.

Pesquisas em ciências biológicas costumam ser mais referenciadas que pesquisas em ciências sociais, por exemplo. O problema permanece mesmo dentro de uma mesma área do conhecimento. Estudos sobre doenças tropicais tendem a ser menos citados que estudos sobre câncer, ainda que sejam igualmente importantes para a medicina brasileira.

A dinâmica de pesquisa também varia de acordo com o campo: nas ciências da saúde, por exemplo, o volume de publicações costuma ser maior.

Assim, o levantamento feito pelo Estadão decidiu usar os dados do Lieden Ranking justamente porque a compilação oferece uma série de recortes que permitem analisar as características das universidades brasileiras sob diferentes lentes.

Entretanto, algumas particularidades do levantamento precisam ser levadas em conta.

Origem dos dados. Os artigos contabilizados pelo Lieden Ranking são todos aqueles que foram publicados na coleção principal da Web of Science, um banco de dados internacional de publicações científicas. Assim, são considerados apenas artigos de pesquisa ou de revisão que tenham sido publicados em inglês. Livros e participação em conferências, por exemplo, não são contabilizados.

**Universidades consideradas.** Para uma universidade aparecer no ranking, ela precisa ter publicado ao menos mil artigos, considerando os critérios descritos acima. Artigos publicados por pesquisadores de instituições afiliadas – um hospital universitário, por exemplo – também são consideradas como artigos da universidade responsável. Ao todo, o levantamento avalia a performance de 963 universidades, distribuídas em 56 países.

**Definição dos campos científicos.** No ranking, os artigos são classificados em cinco grandes áreas do conhecimento: Ciências biomédicas e da saúde, Ciências da vida e terra, Ciências físicas e engenharias, Matemática e ciência da computação e Ciências sociais e humanidades. Estes campos foram definidos usando um algoritmo de computador. Em linhas gerais, foram analisadas as relações entre as citações das publicações foram avaliadas. Com o resultado, cada artigo foi categorizado como pertencente a um micro-campo científico. Esses micro-campos foram, posteriormente, categorizados como pertencentes a uma ou mais das 252 categorias dos periódicos científicos da Web of Science. Por fim, cada categoria de periódico foi vinculado a uma das cinco grandes áreas do conhecimento.

**Contagem fracionada.** O Lieden Ranking usa um método de contagem que atribui peso parcial para cada uma das universidades que participaram da produção de um artigos. Por exemplo, caso uma publicação seja assinada por cinco pesquisadores, dois deles da Universidade A e três da Universidade B, o artigo vai contar 0,4 pontos para a primeira instituição e 0,6 para a segunda. A contagem de artigos publicados em cada uma das grandes áreas também é feita usando o critério de contagem fracionada: se um artigo pertence tanto às Ciências da saúde quanto às Ciências humanas, por exemplo, ele conta 0,5 ponto para cada.

**Atribuição de gênero aos autores.** Para descobrir a quantidade de artigos que foram assinados por pesquisadores homens ou mulheres, o levantamento também usa uma abordagem computacional. O primeiro nome do cientista e sua nacionalidade são fornecidos para programas que determinam, com uma precisão de ao menos 90%, qual é o gênero do autor.

Mais informações estão disponíveis na página do [Lieden Ranking](https://www.leidenranking.com/).

A análise que a reportagem fez limita-se a “entrevistar” os dados para descobrir destaques nacionais no levantamento. Para complementar os dados brutos, foram feitas consultas à base de dados da Web of Science para identificar as pesquisas de maior repercussão e seus respectivos autores.

## Agradecimentos
- Aos pesquisadores e professores que deram seus depoimentos para a reportagem.
- Ao professor **Fábio Castro Gouveia** pela contribuição no delineamento da análise e por esclarecer as limitações inerentes ao levantamento.


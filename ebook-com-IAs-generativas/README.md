# Projeto criação de um eBook com auxílio de Inteligência Artificial (IA)

O eBook tem o objetivo de revisar os tipos de joins utilizados em SQL.<br>
Ele pode ser encontrado na pasta outputs.
Abaixo está a imagem de capa do eBook. 

![capa ebook](assets/capa.png)

## Tecnologias utilizadas no projeto
- ChatGPT: Geração de título e Scripts SQL
- Copilot: Imagem de tabelas
- PowerPoint: Criação do eBook


## Prompts utilizados no chatGPT
```
Aja como um especialista em SQL. Eu estou construindo um ebook sobre como fazer Joins em Tables nos pirncipais sistemas de banco de dados relacionais. Me dê 10 sugestões de títulos impactantes para esse ebook. - O título deve começar com a palavra SQL.
```

 ```
Prompt das tabelas: 
Aja como um especialista em SQL. Eu estou construindo um ebook sobre como fazer Joins em tabelas nos principais sistemas de banco de dados relacionais. Me dê exemplos, no formato de tabela, dos comandos SQL abaixo. Mantenha a nomenclatura Table A e Table B.

Joins que serão mostrados

LEFT JOIN (INCLUSIVO)
SELECT TableA.Column, TableB.Column
FROM TableA
LEFT JOIN TableB ON TableA.Key = TableB.Key;

LEFT JOIN (EXCLUSIVO)
SELECT Table A.Column, Table B.Column
FROM TableA
LEFT JOIN TableB ON TableA.Key = TableB.Key
WHERE TableB.Key IS NULL;

RIGHT JOIN (INCLUSIVO)
SELECT TableA.Column, TableB.Column
FROM TableA
RIGHT JOIN TableB ON TableA.Key = TableB.Key

RIGHT JOIN (EXCLUSIVO)
SELECT TableA.Column, TableB.Column
FROM TableA
RIGHT JOIN Table B ON Table A.Key = TableB.Key
WHERE TableA.Key IS NULL; 

INNER JOIN
SELECT TableA.Column, TableB.Column
FROM TableA
INNER JOIN TableB ON TableA.Key = TableB.Key

FULL JOIN (INCLUSIVO)
SELECT TableA.Column, TableB.Column
FROM TableA
FULL JOIN TableB ON TableA.Key = Table B.Key

FULL JOIN (EXCLUSIVO)
SELECT TableA.Column, TableB.Column
FROM TableA
FULL JOIN TableB ON TableA.Key = TableB.Key
WHERE TableA.Key IS NULL OR  TableB.Key IS NULL;

```

As tabelas geradas no ChatGPT foram copiadas e coladas no Copilot para a geração das imagens

## Prompts utilizados no Copilot

```
Reconstrua a TableA abaixo em formato de imagem. Insira um padrão zebrado entre as linhas das tabelas. Não ponha o comando SQL na imagem.
| **Table A** |           |
| ----------- | --------- |
| Key         | Column\_A |
| 1           | A1        |
| 2           | A2        |
| 3           | A3        |
| 4           | A4        |

```

```
Faça o mesmo para TableB abaixo
| **Table B** |           |
| ----------- | --------- |
| Key         | Column\_B |
| 2           | B2        |
| 3           | B3        |
| 5           | B5        |


```

```
Faça o mesmo para a tabela abaixo. Colocando como nome da tabela LEFT JOIN (INCLUSIVO)
| Column\_A | Column\_B |
| --------- | --------- |
| A1        | NULL      |
| A2        | B2        |
| A3        | B3        |
| A4        | NULL      |

```

Os prompts dos outros joins foram feitos de forma semelhante.

## Links
- [SQL para imagem](https://ray.so/ )
- [ChatGPT](https://chatgpt.com/)
- [Copilot](https://copilot.microsoft.com)
- [logo SQL](https://pt.wikipedia.org/wiki/Ficheiro:Sql_data_base_with_logo.png)





 

  




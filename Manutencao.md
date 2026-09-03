# Tutorial — Como editar as informações da Vitrine Dórica

Este guia ensina, passo a passo, como adicionar, editar e remover fabricantes,
produtos e imagens do site, **sem precisar programar**. Tudo é feito direto
pelo site do GitHub.

> ⏳ **Depois de salvar qualquer alteração, o site leva de 1 a 3 minutos para
> atualizar.** Isso é normal, não precisa editar de novo nem se preocupar.

---

## ⚠️ Regras importantes (leia antes de editar)

1. **Nunca apague ou altere o nome dos campos** (a palavra antes dos dois pontos,
   como `"nome"`, `"logo"`, `"cor"`, `"produtos"`, `"imagem"`, `"descricao"`).
   Nem uma letra maiúscula pode ser trocada — isso quebra o site.
2. **Só altere o que está entre aspas `" "`** depois dos dois pontos.
3. **Toda vírgula importa.** Cada fabricante e cada produto são separados por
   vírgula — menos o **último** de cada lista, que não leva vírgula depois.
4. **Todo o arquivo começa com `[` e termina com `]`.** Nunca apague esses
   colchetes.
5. Se não tiver certeza do que está fazendo, **não clique em "Commit changes"**.
   Você pode fechar a página sem salvar nada — nada será perdido nem quebrado.
6. Se o site "sumir" ou aparecer em branco depois de uma edição, é sinal de que
   algo no texto ficou errado (geralmente uma vírgula ou aspa faltando). Volte
   na tela de edição e compare com o modelo deste tutorial. (ou copia tudo e cola no GPT e pede pra ele descobrir o erro.)

---

## Onde fica cada arquivo

| O que você quer editar | Arquivo | Link direto |
|---|---|---|
| Fabricantes e produtos | `data.json` | https://github.com/Dieghonm/Dorica-Vitrine/blob/main/src/data/data.json |
| Dados da Dórica (WhatsApp, texto de apresentação, etc.) | `Dorica.json` | https://github.com/Dieghonm/Dorica-Vitrine/blob/main/src/data/Dorica.json |

**Caminho manual (caso o link não funcione):**
GitHub → seus repositórios → **Dorica-Vitrine** → pasta `src` → pasta `data` →
clique no arquivo desejado.

---

## Como abrir o modo de edição

1. Abra o link do arquivo que quer editar (tabela acima).
2. Na barra logo acima do código, do lado direito, clique no ícone de **lápis** ✏️
   ("Edit this file").
3. O código vira uma caixa de texto editável.
4. Faça as alterações necessárias (siga os exemplos abaixo).
5. Role até o final da página.
6. Em **"Commit changes"**, deixe uma frase curta explicando o que mudou
   (ex: "adiciona fabricante Zip") — isso é só para o histórico, não afeta o site.
7. Clique no botão verde **"Commit changes"**.
8. Pronto! Aguarde de 1 a 3 minutos e atualize o site para ver a mudança.

---

## 1. Adicionar um novo fabricante

No arquivo `data.json`, encontre o **último** `}` antes do `]` final da lista
de fabricantes. Logo depois desse `}`, coloque uma vírgula `,` e cole o modelo
abaixo, preenchendo os dados:

```json
  {
    "nome": "Nome do Fabricante",
    "logo": "https://link-da-logo.png",
    "cor": "#292f75",
    "produtos": [
      {
        "imagem": "https://link-da-imagem-1.png",
        "nome": "Nome do produto 1",
        "descricao": "Descrição curta do produto 1"
      },
      {
        "imagem": "https://link-da-imagem-2.png",
        "nome": "Nome do produto 2",
        "descricao": "Descrição curta do produto 2"
      },
      {
        "imagem": "https://link-da-imagem-3.png",
        "nome": "Nome do produto 3",
        "descricao": "Descrição curta do produto 3"
      },
      {
        "imagem": "https://link-da-imagem-4.png",
        "nome": "Nome do produto 4",
        "descricao": "Descrição curta do produto 4"
      }
    ]
  }
```

**Fica assim, por exemplo, no meio do arquivo:**

```json
  {
    "nome": "Fandom Box",
    ...
  },
  {
    "nome": "Novo Fabricante",
    ...
  }
]
```

Repare que:
- Depois do fabricante que já existia, veio uma **vírgula**.
- Depois do **último** fabricante da lista inteira, **não** tem vírgula — só o `]`.
- Sempre são **4 produtos** por fabricante nesta vitrine. Se colocar mais ou
  menos, pode quebrar o layout do site.

---

## 2. Editar um fabricante já existente

1. Localize o bloco `{ ... }` do fabricante pelo `"nome"`.
2. Altere apenas o texto entre aspas dos campos que quiser mudar
   (`nome`, `cor`, `logo`, ou os dados dos `produtos`).
3. Não mexa nas chaves `{ }`, colchetes `[ ]` nem vírgulas que já estavam lá.

**Campo `cor`:** é a cor de destaque do card desse fabricante no site.
Deve ser um código de cor no formato `#000000` (você pode gerar uma cor em
sites como [htmlcolorcodes.com](https://htmlcolorcodes.com)).

---

## 3. Remover um fabricante

1. Localize o bloco `{ ... }` completo do fabricante, do `{` de abertura até o
   `}` de fechamento correspondente.
2. Selecione **todo o bloco**, incluindo a vírgula que vem logo depois dele
   (ou logo antes, se ele for o último da lista).
3. Apague a seleção.
4. Confira se sobrou alguma vírgula "sobrando" (por exemplo, duas vírgulas
   seguidas `,,` ou uma vírgula logo antes do `]` final) — se sobrar, apague-a
   também.

---

## 4. Editar ou trocar um produto de um fabricante

Dentro do fabricante, cada produto é um bloco `{ ... }` dentro dos colchetes
`"produtos": [ ... ]`. Edite apenas o texto entre aspas:

```json
{
  "imagem": "https://link-da-imagem.png",
  "nome": "Nome do produto",
  "descricao": "Descrição curta do produto"
}
```

---

## 5. Trocar uma imagem (logo ou produto)

As imagens do site não são enviadas direto pelo GitHub — elas ficam
hospedadas no **Cloudinary** e o arquivo `data.json` só guarda o **link**
dela.

1. Acesse **[cloudinary.com](https://cloudinary.com/)** e faça login com a
   conta já configurada.
2. Faça upload da nova imagem (arraste o arquivo para a tela ou clique em
   **Upload**).
3. Depois do upload, clique na imagem enviada e copie o **link dela** (o
   Cloudinary mostra um botão de copiar link, geralmente com o ícone de
   corrente 🔗 ou "Copy URL").
4. Volte no `data.json`, encontre o campo `"imagem"` (do produto) ou
   `"logo"` (do fabricante) que quer trocar.
5. Substitua **apenas o link antigo** entre as aspas pelo novo link copiado.
6. Salve (Commit changes) como explicado acima.

> 💡 Dica: use imagens quadradas para produtos (proporção 1:1) — o site já
> corta automaticamente para esse formato, então uma imagem quadrada evita
> cortes estranhos.

---

## 6. Editar as informações da Dórica (WhatsApp, texto de apresentação)

Abra o arquivo `Dorica.json`:
https://github.com/Dieghonm/Dorica-Vitrine/blob/main/src/data/Dorica.json

```json
[
  {
    "nome": "Dórica Representações",
    "nome2": "Dórica Representações Ltda",
    "logo": "https://link-da-logo.png",
    "whatsapp": "5521994116488",
    "mensagem": "Olá! Vi a vitrine de fabricantes e quero saber mais.",
    "catalogoMensagem": "Olá! Tenho interesse no catálogo completo da ",
    "sobre": "Texto sobre a empresa que aparece no site."
  }
]
```

O que cada campo controla:

| Campo | O que é |
|---|---|
| `nome` | Nome exibido no topo do site |
| `nome2` | Nome completo/razão social, exibido no rodapé |
| `logo` | Link da logo (troque pelo Cloudinary, como explicado acima) |
| `whatsapp` | Número de WhatsApp que recebe as mensagens (com código do país e DDD, só números) |
| `mensagem` | Mensagem que abre automaticamente no botão "Falar no WhatsApp" do topo |
| `catalogoMensagem` | Início da mensagem enviada quando alguém pede o catálogo de um fabricante específico (o nome do fabricante é adicionado automaticamente no final) |
| `sobre` | Texto de apresentação da empresa |

**Sobre o `whatsapp`:** use só números, com código do país (55 para Brasil),
DDD e o número, sem espaços, traços ou parênteses. Exemplo:
`"5521994116488"`.

---

## Erros comuns e como resolver

| O que aconteceu | Causa provável | Como resolver |
|---|---|---|
| Site ficou em branco depois de editar | Faltou ou sobrou uma vírgula, aspa ou chave | Volte no arquivo, compare com o modelo deste tutorial, corrija e salve de novo |
| Imagem não aparece | Link do Cloudinary incorreto ou incompleto | Copie o link novamente direto do Cloudinary |
| Site não mudou depois de 5 minutos | Talvez o "Commit changes" não tenha sido clicado até o fim | Volte no arquivo e confira se a alteração está salva |
| Layout do card ficou estranho | Fabricante com mais ou menos de 4 produtos | Garanta sempre exatamente 4 produtos por fabricante |

Se algo der errado e você não conseguir identificar o problema, me chame
que eu ajusto — nenhuma edição feita pelo site quebra o código de verdade,
o pior caso é o site ficar temporariamente fora do ar até a correção.
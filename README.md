# Intensivo do Next.js e React.js

### Padrão Monolito
<img src="public/assets/p-monolito.png">

Problemas do padrão Monolito:
- Over fetching - Numero de informações captadas
- Over requesting - Número de requisições
- Latencia de rede
- Segurança nos dados

### Padrão Backend for Front-end

<img src="public/assets/backend-for-frontend.png">


#### Single page Application - 2008 - Knockout.js | Angular.js VS Server Side Rendering - Next.js

#### O Que São SPAs?
Uma Single Page Application é um tipo de aplicação web que carrega uma única página HTML e dinamicamente atualiza o conteúdo à medida que o usuário interage com a aplicação. 

#### O Que É SSR?
No Server-Side Rendering, as páginas web são totalmente geradas no servidor antes de serem enviadas para o cliente.

<img src="public/assets/SPA_SSR.png">

| Característica                | Single Page Applications (SPAs)                                   | Server-Side Rendering (SSR)                                  |
|-------------------------------|-------------------------------------------------------------------|-------------------------------------------------------------|
| **Carregamento Inicial**      | Mais lento devido ao carregamento de scripts                      | Mais rápido com HTML pré-renderizado                        |
| **Interatividade**            | Altamente interativa, sem recarregamento de página                | Menos interativa, requer recarregamento da página           |
| **SEO**                       | Desafiador, necessita de soluções como pré-renderização ou SSR híbrido | Melhor suporte, pois o conteúdo é renderizado no servidor    |
| **Desempenho**                | Melhor para interações frequentes após o carregamento inicial     | Melhor para acesso esporádico ou conteúdos estáticos        |
| **Complexidade**              | Maior complexidade no frontend                                   | Maior carga de processamento no servidor                    |
| **Atualização de Conteúdo**   | Atualizações dinâmicas sem necessidade de recarregar a página     | Atualizações de conteúdo requerem recarregamento da página  |
| **Latência na Navegação**     | Baixa latência, navegação rápida sem recarregar a página          | Maior latência devido a solicitações completas ao servidor  |
| **Escalabilidade**            | Mais eficiente em termos de solicitação ao servidor               | Pode exigir mais recursos do servidor para cada solicitação |
| **Gerenciamento de Estado**   | Complexo, requer ferramentas específicas para estado global       | Simples, estado gerenciado no servidor para cada solicitação|
| **Manutenção e Suporte**      | Pode ser mais difícil devido à complexidade do frontend           | Mais fácil com a lógica principal mantida no backend        |
| **Exemplo de Frameworks**     | Angular.js, React, Vue.js                                        | Next.js, Nuxt.js, frameworks baseados em PHP, Java, etc.    |
| **Uso de Recursos do Cliente**| Alto, pois a lógica da aplicação é executada no navegador         | Menor, pois a maior parte do processamento é feita no servidor |
| **Dependência de JavaScript** | Alta, a aplicação depende fortemente de JavaScript                | Baixa a moderada, já que o HTML é pré-renderizado no servidor |
| **Experiência Offline**       | Suportado através de PWA, caches e outras tecnologias             | Limitado, depende do cache do navegador e outras tecnologias server-side |
| **Métricas e Monitoramento**  | Complexo, necessita de ferramentas para capturar eventos do frontend | Mais direto, a maior parte das métricas é capturada no backend |



Installar criar projeto já com typescript
```bash
npx create-next-app --typescript
```

Instalar express
```bash
npm install express
```

Criar comando para rodar API - package.json

```package.json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "run-api": "node node-api/api.js"
  },
```

Iniciar API
```bash
npm run run-api
```

//stale while revalidate
```javascript
const response = await fetch('http://localhost:8000/events', {
    cache: "no-store", // Sem cache nenhum
    next: {
      revalidate: 10 // segundos
    }
  })
```
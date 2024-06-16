  <h1>API em TypeScript</h1>
    <p>Este projeto é um trabalho da faculdade UNISENAC, lecionado pelo professor Adalto na aula de Desenvolvimento de API's I.</p>
  
  <h2>Descrição</h2>
  <p>Esta é uma API desenvolvida em TypeScript utilizando Express, dotenv, mysql2 e nodemon.</p>
  
  <h2>Instalação</h2>
  <p>Para instalar e executar este projeto, siga os passos abaixo:</p>
  <ol>
      <li>Clone o repositório:
          <pre><code>git clone https://github.com/seu-usuario/nome-do-repositorio.git</code></pre>
      </li>
      <li>Entre no diretório do projeto:
          <pre><code>cd nome-do-repositorio</code></pre>
      </li>
      <li>Instale as dependências:
          <pre><code>npm install</code></pre>
      </li>
      <li>Crie um arquivo <code>.env</code> na raiz do projeto e adicione suas variáveis de ambiente:
          <pre><code>DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco</code></pre>
        </li>
        <li>Execute a aplicação:
            <pre><code>npm run dev</code></pre>
        </li>
    </ol>
  
  <h2>Dependências</h2>
  <ul>
      <li>TypeScript</li>
      <li>Express</li>
      <li>dotenv</li>
      <li>mysql2</li>
      <li>nodemon</li>
  </ul>
  
  <h2>Scripts</h2>
  <ul>
      <li><code>npm run dev</code>: Inicia a aplicação com nodemon para desenvolvimento.</li>
  </ul>
  
  <h2>Estrutura de Pastas</h2>
  <pre>
<code>
nome-do-repositorio/
│
├── src/
│   ├── controllers/
│   ├── router/
│   ├── middleware/
│   ├── models/
│   ├── app.ts
│   ├── server.ts
│
├── APISENAC.json (insomnia arquivo)
├── .env
├── .gitignore
├── package.json
└── README.md
</code>
    </pre>
  
  <h2>Contribuições</h2>
  <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.</p>
  
  <h2>Agradecimentos</h2>
  <p>Gostaria de agradecer ao professor Adalto pelo apoio e orientação durante o desenvolvimento deste projeto.</p>
  
  <footer>
      <p>Obrigado por tudo!</p>
  </footer>

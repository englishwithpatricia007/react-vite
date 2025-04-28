# Cadastro de Usuários

Este é um projeto React criado com Vite para demonstrar um sistema básico de cadastro de usuários.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos modernos.
- **Axios**: Cliente HTTP para comunicação com a API.
- **ESLint**: Ferramenta para análise de código e boas práticas.

## Estrutura do Projeto

```
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── trash.svg
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   └── Home/
│   │       ├── index.jsx
│   │       └── style.css
│   └── services/
│       └── api.js
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Funcionalidades

- Listar usuários cadastrados.
- Cadastrar novos usuários.
- Excluir usuários.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd devclub-cadastro-usuarios
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**:
   O projeto estará disponível em [http://localhost:5173](http://localhost:5173).

## Configuração da API

Certifique-se de que a API está rodando no endereço configurado no arquivo [`src/services/api.js`](src/services/api.js). Por padrão, a base URL é `http://localhost:3333`.

## Estrutura de Código

### Página Home

A página principal está localizada em [`src/pages/Home/index.jsx`](src/pages/Home/index.jsx). Ela contém:

- Um formulário para cadastro de usuários.
- Uma lista de usuários cadastrados.
- Botões para excluir usuários.

### Estilos

Os estilos da página estão definidos em [`src/pages/Home/style.css`](src/pages/Home/style.css).

### Serviço de API

As requisições HTTP são gerenciadas pelo arquivo [`src/services/api.js`](src/services/api.js), que utiliza o Axios para comunicação com a API.

## Melhorias Futuras

- Adicionar validação de formulário.
- Implementar feedback visual para ações (ex.: carregamento, sucesso ou erro).
- Adicionar paginação na listagem de usuários.

## Licença

Este projeto é apenas para fins educacionais e não possui uma licença específica.
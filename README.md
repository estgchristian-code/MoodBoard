# Sistema de Imagens

Aplicação web inspirada na experiência do Pinterest, desenvolvida para explorar, pesquisar, organizar e salvar imagens em uma interface visual moderna, responsiva e intuitiva.

O sistema permite descobrir imagens, criar pins, organizar favoritos e interagir com diferentes recursos sem exigir cadastro ou autenticação.

## ✨ Funcionalidades

- **Explorar imagens:** catálogo com mais de 250 imagens.
- **Pesquisa:** localizar imagens por termos.
- **Filtros:** facilitar a descoberta de conteúdos.
- **Favoritos:** salvar imagens preferidas.
- **Criação de pins:** adicionar e organizar imagens.
- **Notificações:** acompanhar interações e avisos da interface.
- **Perfil:** acessar informações e opções do perfil.
- **Modais interativos:** visualizar e interagir com imagens.
- **Armazenamento local:** preservar dados e preferências utilizando `localStorage`.
- **Design responsivo:** interface adaptada para computadores, tablets e celulares.

## 🛠️ Tecnologias utilizadas

- **React:** construção da interface por componentes.
- **Vite:** ambiente de desenvolvimento e ferramenta de build.
- **JavaScript:** lógica e interatividade.
- **HTML5:** estrutura da aplicação.
- **CSS3:** estilização, responsividade e animações.
- **LocalStorage:** persistência local de dados no navegador.
- **Unsplash:** origem de imagens utilizadas no catálogo.
- **Wikimedia Commons:** fonte adicional de imagens.

## 🔐 Segurança

O projeto possui medidas de segurança implementadas para reduzir riscos na utilização da aplicação:

- Validação e sanitização dos dados recuperados do `localStorage`.
- Validação de URLs e identificadores de imagens.
- Bloqueio de protocolos potencialmente perigosos.
- Restrição de domínios externos autorizados para imagens.
- Content Security Policy (CSP).
- Cabeçalhos HTTP de segurança configurados para a Vercel.
- Política de prevenção contra carregamento da aplicação em frames externos.
- Verificação de dependências com `npm audit`.

**Observação:** como a aplicação não utiliza autenticação nem backend próprio, os dados armazenados no navegador são locais ao dispositivo e não possuem sincronização entre usuários ou dispositivos.

## 🚀 Como executar localmente

### Pré-requisitos

- Node.js
- npm

### Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd sistema-imagens
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse o endereço informado pelo Vite no terminal, normalmente:

```text
http://localhost:5173
```

## 📦 Build de produção

Para gerar os arquivos de produção:

```bash
npm run build
```

Os arquivos compilados serão disponibilizados na pasta `dist`.

Para testar a versão de produção localmente:

```bash
npm run preview
```

## ☁️ Deploy

O projeto está preparado para publicação na **Vercel**.

O arquivo `vercel.json` contém configurações de cabeçalhos HTTP de segurança, incluindo:

- Strict-Transport-Security (HSTS).
- X-Content-Type-Options.
- Referrer-Policy.
- X-Frame-Options.
- Permissions-Policy.
- Content-Security-Policy (CSP).

A publicação pode ser automatizada por meio da integração entre a Vercel e o repositório Git.

## 🎨 Interface

A aplicação utiliza uma identidade visual moderna e profissional, com foco em:

- Organização visual do conteúdo.
- Layout inspirado em plataformas de descoberta de imagens.
- Cartões de imagens com apresentação dinâmica.
- Animações e transições suaves.
- Navegação intuitiva.
- Adaptação para diferentes tamanhos de tela.

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo, desenvolvimento de portfólio e demonstração de habilidades em desenvolvimento web.

As imagens utilizadas pertencem às respectivas fontes e estão sujeitas às licenças e condições de uso de seus autores e provedores.

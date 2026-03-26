# Shadcn React Starter - React + Vite + Shadcn UI

Um boilerplate moderno e pronto para produção para construção de aplicações web, com foco em experiência do desenvolvedor, performance e acessibilidade.

## 🚀 Tecnologias

- **Framework:** [React 19](https://react.dev/)
- **Ferramenta de Build:** [Vite 6](https://vitejs.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [Shadcn UI](https://ui.shadcn.com/) (baseado em Radix UI)
- **Roteamento:** [React Router 6](https://reactrouter.com/)
- **Gerenciamento de Dados:** [TanStack Query v5](https://tanstack.com/query/latest)
- **Gerenciamento de Formulários:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Notificações:** [Sonner](https://sonner.stevenly.me/)

## 📂 Estrutura do Projeto

```text
src/
├── components/     # Componentes de UI reutilizáveis (shadcn/ui + custom)
│   ├── ui/         # Componentes base do shadcn
├── hooks/          # Hooks customizados do React
├── lib/            # Funções utilitárias e configurações
├── pages/          # Páginas/rotas da aplicação
├── utils/          # Funções auxiliares
└── main.tsx        # Ponto de entrada da aplicação
```

## 🛠️ Primeiros Passos

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior recomendado)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes preferencial)

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-seu-repositorio>
   cd boilerplate
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```

4. Build para produção:
   ```bash
   pnpm build
   ```

## 🎨 Funcionalidades

- **Suporte a Dark Mode:** Pré-configurado com `next-themes`.
- **Design Responsivo:** Abordagem mobile-first usando Tailwind CSS.
- **Type Safety:** Suporte total a TypeScript para componentes, hooks e interações com API.
- **Performance Otimizada:** Builds rápidos e HMR com Vite.
- **Componentes Acessíveis:** Componentes acessíveis por padrão usando primitivos do Radix UI.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

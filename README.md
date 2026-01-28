# Guia de Acessibilidade Web

Um guia interativo e prático para desenvolvedores aprenderem a criar aplicações web acessíveis seguindo as diretrizes WCAG 2.1 AA.

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Sobre o Projeto

Este projeto foi criado para servir como referência e material de estudo sobre acessibilidade web. Cada seção demonstra técnicas e padrões de acessibilidade com exemplos de código funcionais.

### Tecnologias Utilizadas

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS 4** - Estilização
- **shadcn/ui** - Componentes baseados em Radix UI
- **eslint-plugin-jsx-a11y** - Lint de acessibilidade

## Conteúdo

O guia cobre 9 categorias de acessibilidade:

| Categoria | Descrição |
|-----------|-----------|
| **HTML Semântico** | Landmarks, headings, article/section, elementos de tempo |
| **Imagens** | Alt text, figure/figcaption, SVG acessível, aria-describedby |
| **Formulários** | Labels, validação, aria-invalid, fieldset/legend |
| **Navegação** | Nav, breadcrumbs, tabs, accordion, skip links |
| **Tabelas** | Scope, headers, caption, aria-sort |
| **Modais** | Focus trap, aria-labelledby, AlertDialog |
| **Live Regions** | aria-live, role="status", anúncios dinâmicos |
| **Teclado** | Tabindex, roving tabindex, focus-visible |
| **Ferramentas** | Lighthouse, Axe DevTools, eslint-plugin-jsx-a11y |

## Instalação

```bash
# Clone o repositório
git clone https://github.com/jordaobass/acessibilidade-web.git

# Entre na pasta
cd guia-acessibilidade-web

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

## Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza build de produção
npm run lint     # Executa ESLint com regras de acessibilidade
```

## Configuração do ESLint para Acessibilidade

O projeto já vem configurado com `eslint-plugin-jsx-a11y`. As principais regras incluem:

```javascript
// eslint.config.js
rules: {
  'jsx-a11y/alt-text': 'error',
  'jsx-a11y/aria-props': 'error',
  'jsx-a11y/aria-role': 'error',
  'jsx-a11y/heading-has-content': 'error',
  'jsx-a11y/label-has-associated-control': 'error',
  'jsx-a11y/no-redundant-roles': 'error',
  'jsx-a11y/tabindex-no-positive': 'error',
  // ... e mais 20+ regras
}
```

## Testando Acessibilidade

### Lighthouse (Chrome DevTools)

1. Abra o DevTools (`F12`)
2. Vá para a aba **Lighthouse**
3. Selecione **Accessibility**
4. Clique em **Analyze page load**

### Axe DevTools

1. Instale a [extensão Axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools/lhdoppojpmngadmnindnejefpokejbdd)
2. Abra o DevTools
3. Vá para a aba **axe DevTools**
4. Clique em **Scan ALL of my page**

### Testes Manuais

- **Navegação por teclado**: Use apenas Tab, Shift+Tab, Enter e Escape
- **Leitor de tela**: Teste com NVDA (Windows) ou VoiceOver (Mac)
- **Zoom**: Aumente para 200% e verifique se o layout não quebra

## Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   └── examples/              # Exemplos de acessibilidade
│       ├── ImageAccessibility.tsx
│       ├── FormAccessibility.tsx
│       ├── NavigationAccessibility.tsx
│       ├── TableAccessibility.tsx
│       ├── ModalAccessibility.tsx
│       ├── LiveRegionAccessibility.tsx
│       ├── KeyboardAccessibility.tsx
│       ├── SemanticHTML.tsx
│       └── ToolsAccessibility.tsx
├── lib/
│   └── utils.ts               # Utilitários (cn)
├── App.tsx                    # Componente principal
├── main.tsx                   # Entry point
└── index.css                  # Estilos globais + variáveis
```

## Recursos de Acessibilidade Implementados

- [x] Skip link para pular navegação
- [x] Navegação completa por teclado
- [x] Suporte a leitores de tela
- [x] Contraste de cores WCAG AA (4.5:1)
- [x] Focus visible em todos elementos interativos
- [x] Labels associados a inputs
- [x] ARIA landmarks e roles
- [x] Live regions para conteúdo dinâmico
- [x] Suporte a `prefers-reduced-motion`
- [x] Suporte a `prefers-contrast`

## Recursos Adicionais

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abrir um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com foco em acessibilidade por [NextTag](https://github.com/jordaobass)

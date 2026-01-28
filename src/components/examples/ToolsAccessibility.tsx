import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Exemplo de Ferramentas de Acessibilidade
 *
 * Demonstra:
 * - Como usar o Lighthouse no Chrome
 * - Como configurar eslint-plugin-jsx-a11y
 * - Outras ferramentas de teste
 */
export function ToolsAccessibility() {
  return (
    <section aria-labelledby="tools-heading">
      <Card>
        <CardHeader>
          <CardTitle id="tools-heading">Ferramentas de Teste de Acessibilidade</CardTitle>
          <CardDescription>
            Como usar ferramentas para validar a acessibilidade do seu projeto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Lighthouse */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">1. Lighthouse no Chrome DevTools</h3>
            <p className="text-sm text-muted-foreground">
              O Lighthouse é uma ferramenta integrada ao Chrome que audita acessibilidade, performance, SEO e mais.
            </p>

            <div className="bg-muted p-4 rounded-lg space-y-4">
              <h4 className="font-medium">Como usar o Lighthouse:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Abra o Chrome DevTools pressionando <kbd className="px-1 bg-background rounded">F12</kbd> ou{" "}
                  <kbd className="px-1 bg-background rounded">Ctrl+Shift+I</kbd>
                </li>
                <li>
                  Clique na aba <strong>"Lighthouse"</strong> (pode estar no menu <code>»</code> se não estiver visível)
                </li>
                <li>
                  Em "Categories", selecione <strong>"Accessibility"</strong> (pode desmarcar as outras se quiser focar só em acessibilidade)
                </li>
                <li>
                  Escolha o modo:
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li><strong>Navigation</strong> - Testa a página completa</li>
                    <li><strong>Timespan</strong> - Testa durante interações</li>
                    <li><strong>Snapshot</strong> - Testa o estado atual</li>
                  </ul>
                </li>
                <li>
                  Clique em <strong>"Analyze page load"</strong>
                </li>
                <li>
                  Aguarde o relatório ser gerado com a pontuação de 0 a 100
                </li>
              </ol>
            </div>

            <div className="bg-muted p-4 rounded-lg space-y-4">
              <h4 className="font-medium">Interpretando os resultados:</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><span className="text-green-600 font-medium">90-100:</span> Excelente - poucas ou nenhuma melhoria necessária</li>
                <li><span className="text-yellow-600 font-medium">50-89:</span> Precisa de melhorias - há problemas a corrigir</li>
                <li><span className="text-red-600 font-medium">0-49:</span> Ruim - problemas críticos de acessibilidade</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Dica:</strong> Clique em cada item do relatório para ver detalhes e sugestões de correção.
              </p>
            </div>

            <div className="border border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Importante:</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                O Lighthouse em modo desenvolvimento (localhost) pode mostrar warnings sobre "critical request chains"
                devido ao carregamento de módulos do Vite. Em produção (build), isso é otimizado automaticamente
                pelo bundling. Sempre teste o build de produção para métricas precisas.
              </p>
            </div>
          </div>

          {/* ESLint Plugin */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">2. eslint-plugin-jsx-a11y</h3>
            <p className="text-sm text-muted-foreground">
              Plugin do ESLint que verifica problemas de acessibilidade em JSX durante o desenvolvimento.
            </p>

            <div className="bg-muted p-4 rounded-lg space-y-4">
              <h4 className="font-medium">Instalação:</h4>
              <pre className="bg-background p-3 rounded text-sm overflow-x-auto">
                <code>npm install -D eslint-plugin-jsx-a11y</code>
              </pre>
            </div>

            <div className="bg-muted p-4 rounded-lg space-y-4">
              <h4 className="font-medium">Configuração (eslint.config.js):</h4>
              <pre className="bg-background p-3 rounded text-xs overflow-x-auto">
{`import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  {
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // Erros críticos
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/tabindex-no-positive': 'error',

      // Warnings (boas práticas)
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
    },
  },
]`}
              </pre>
            </div>

            <div className="bg-muted p-4 rounded-lg space-y-4">
              <h4 className="font-medium">Principais regras:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-red-600">Erros (devem ser corrigidos):</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><code>alt-text</code> - Imagens precisam de alt</li>
                    <li><code>aria-props</code> - ARIA props válidas</li>
                    <li><code>aria-role</code> - Roles ARIA válidas</li>
                    <li><code>heading-has-content</code> - Headings não vazios</li>
                    <li><code>label-has-associated-control</code> - Labels ligados a inputs</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-yellow-600">Warnings (recomendados):</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li><code>click-events-have-key-events</code> - onClick + onKeyDown</li>
                    <li><code>interactive-supports-focus</code> - Elementos interativos focáveis</li>
                    <li><code>no-autofocus</code> - Evitar autofocus</li>
                    <li><code>no-static-element-interactions</code> - div/span com onClick</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Axe DevTools */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">3. Axe DevTools (Extensão Chrome)</h3>
            <p className="text-sm text-muted-foreground">
              Extensão gratuita que faz auditoria detalhada de acessibilidade.
            </p>

            <div className="bg-muted p-4 rounded-lg space-y-4">
              <h4 className="font-medium">Como usar:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  Instale a extensão{" "}
                  <a
                    href="https://chrome.google.com/webstore/detail/axe-devtools/lhdoppojpmngadmnindnejefpokejbdd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Axe DevTools
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
                <li>Abra o DevTools e vá para a aba "axe DevTools"</li>
                <li>Clique em "Scan ALL of my page"</li>
                <li>Veja os problemas categorizados por severidade</li>
              </ol>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Vantagens sobre o Lighthouse:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Mais detalhado e específico para acessibilidade</li>
                <li>Mostra exatamente qual elemento tem o problema</li>
                <li>Explica como corrigir cada problema</li>
                <li>Pode testar elementos específicos da página</li>
              </ul>
            </div>
          </div>

          {/* WAVE */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">4. WAVE (Web Accessibility Evaluation Tool)</h3>
            <p className="text-sm text-muted-foreground">
              Ferramenta visual que mostra problemas diretamente na página.
            </p>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Como usar:</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  Acesse{" "}
                  <a
                    href="https://wave.webaim.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    wave.webaim.org
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                  {" "}e cole a URL do seu site
                </li>
                <li>Ou instale a extensão para Chrome/Firefox</li>
                <li>Os problemas aparecem como ícones coloridos na própria página</li>
              </ul>
            </div>
          </div>

          {/* Testes Manuais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">5. Testes Manuais Essenciais</h3>
            <p className="text-sm text-muted-foreground">
              Ferramentas automatizadas não detectam tudo. Faça também esses testes:
            </p>

            <div className="bg-muted p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Navegação por teclado:</strong> Navegue pela página usando apenas Tab, Shift+Tab, Enter e Escape.
                  Verifique se consegue acessar e usar todos os elementos interativos.
                </li>
                <li>
                  <strong>Leitor de tela:</strong> Teste com NVDA (Windows), VoiceOver (Mac) ou TalkBack (Android).
                  Verifique se o conteúdo faz sentido quando lido em ordem.
                </li>
                <li>
                  <strong>Zoom 200%:</strong> Use Ctrl/Cmd + para aumentar o zoom até 200%.
                  Verifique se o layout não quebra e o conteúdo continua legível.
                </li>
                <li>
                  <strong>Contraste de cores:</strong> Use ferramentas como{" "}
                  <a
                    href="https://webaim.org/resources/contrastchecker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    WebAIM Contrast Checker
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                  {" "}para validar que o contraste é de pelo menos 4.5:1 para texto normal.
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, User } from "lucide-react"

/**
 * Exemplo de HTML Semântico
 *
 * Demonstra:
 * - Uso correto de tags semânticas (header, main, nav, article, section, aside, footer)
 * - Hierarquia de headings (h1-h6)
 * - Landmarks ARIA
 * - Elementos de tempo e data
 * - Listas semânticas
 */
export function SemanticHTML() {
  return (
    <section aria-labelledby="semantic-heading">
      <Card>
        <CardHeader>
          <CardTitle id="semantic-heading">HTML Semântico</CardTitle>
          <CardDescription>
            Exemplos de estrutura semântica correta para acessibilidade
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Landmarks */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Landmarks (Marcos de Navegação)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Leitores de tela permitem navegar rapidamente entre landmarks
            </p>

            <div className="border rounded-lg overflow-hidden text-sm">
              <div className="bg-blue-100 dark:bg-blue-900 p-2 border-b">
                <code>&lt;header role="banner"&gt;</code> - Cabeçalho da página
              </div>
              <div className="flex">
                <div className="bg-green-100 dark:bg-green-900 p-2 border-r w-1/4">
                  <code>&lt;nav role="navigation"&gt;</code>
                  <br />Menu
                </div>
                <div className="flex-1">
                  <div className="bg-yellow-100 dark:bg-yellow-900 p-2 border-b">
                    <code>&lt;main role="main"&gt;</code> - Conteúdo principal
                  </div>
                  <div className="flex">
                    <div className="bg-purple-100 dark:bg-purple-900 p-2 flex-1 border-r">
                      <code>&lt;article&gt;</code>
                      <br />Conteúdo
                    </div>
                    <div className="bg-pink-100 dark:bg-pink-900 p-2 w-1/3">
                      <code>&lt;aside role="complementary"&gt;</code>
                      <br />Sidebar
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 border-t">
                <code>&lt;footer role="contentinfo"&gt;</code> - Rodapé
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg mt-4 text-sm">
              <h4 className="font-medium mb-2">Landmarks disponíveis:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><code>banner</code> - Cabeçalho do site (automático em header)</li>
                <li><code>navigation</code> - Menu de navegação (automático em nav)</li>
                <li><code>main</code> - Conteúdo principal (automático em main)</li>
                <li><code>complementary</code> - Conteúdo relacionado (automático em aside)</li>
                <li><code>contentinfo</code> - Informações do rodapé (automático em footer)</li>
                <li><code>search</code> - Área de busca (use role="search")</li>
                <li><code>region</code> - Seção genérica (requer aria-label)</li>
              </ul>
            </div>
          </div>

          {/* Hierarquia de Headings */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Hierarquia de Headings</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Mantenha uma hierarquia lógica, sem pular níveis
            </p>

            <div className="border rounded-lg p-4 space-y-2">
              <div className="text-2xl font-bold">h1 - Título da Página (único)</div>
              <div className="text-xl font-semibold ml-4">h2 - Seção Principal</div>
              <div className="text-lg font-medium ml-8">h3 - Subseção</div>
              <div className="text-base font-medium ml-12">h4 - Sub-subseção</div>
              <div className="text-xl font-semibold ml-4 mt-4">h2 - Outra Seção</div>
              <div className="text-lg font-medium ml-8">h3 - Subseção</div>
            </div>

            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg mt-4 text-sm">
              <h4 className="font-medium mb-2 text-red-800 dark:text-red-200">Erros comuns:</h4>
              <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300">
                <li>Pular de h1 para h3 (pula h2)</li>
                <li>Usar headings apenas para estilização</li>
                <li>Múltiplos h1 na página</li>
                <li>Headings vazios ou apenas com ícones</li>
              </ul>
            </div>
          </div>

          {/* Article vs Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Article vs Section</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use article para conteúdo independente, section para agrupamentos temáticos
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <article className="border rounded-lg p-4">
                <header>
                  <h4 className="font-semibold">Exemplo de Article</h4>
                  <p className="text-xs text-muted-foreground">
                    <time dateTime="2024-01-15">15 de Janeiro, 2024</time>
                  </p>
                </header>
                <p className="text-sm mt-2">
                  Um article representa conteúdo independente e autocontido,
                  como um post de blog, notícia ou comentário.
                </p>
                <footer className="mt-2 text-xs text-muted-foreground">
                  Por: Autor do artigo
                </footer>
              </article>

              <section className="border rounded-lg p-4" aria-labelledby="section-example">
                <h4 id="section-example" className="font-semibold">Exemplo de Section</h4>
                <p className="text-sm mt-2">
                  Uma section agrupa conteúdo relacionado tematicamente.
                  Deve sempre ter um heading.
                </p>
              </section>
            </div>
          </div>

          {/* Elemento Time */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">4. Elemento Time</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use o elemento time com datetime para datas e horários
            </p>

            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <span>
                  Data:{" "}
                  <time dateTime="2024-01-15" className="font-medium">
                    15 de Janeiro de 2024
                  </time>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <span>
                  Horário:{" "}
                  <time dateTime="14:30" className="font-medium">
                    14:30
                  </time>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <span>
                  Evento:{" "}
                  <time dateTime="2024-01-15T14:30:00-03:00" className="font-medium">
                    15/01/2024 às 14:30 (GMT-3)
                  </time>
                </span>
              </div>
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<time dateTime="2024-01-15T14:30:00">15/01/2024 às 14:30</time>`}
            </code>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5. Elemento Address</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use para informações de contato do autor ou organização
            </p>

            <address className="border rounded-lg p-4 not-italic">
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-muted-foreground mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium">João Silva</p>
                  <p className="text-sm text-muted-foreground">Desenvolvedor Web</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" aria-hidden="true" />
                <div className="text-sm">
                  <p>Rua das Flores, 123</p>
                  <p>São Paulo, SP - 01234-567</p>
                </div>
              </div>
            </address>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<address>Informações de contato...</address>`}
            </code>
          </div>

          {/* Listas Semânticas */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">6. Listas Semânticas</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use o tipo correto de lista para cada situação
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Lista não ordenada */}
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Lista não ordenada (ul)</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Item sem ordem</li>
                  <li>Outro item</li>
                  <li>Mais um item</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  Para itens sem ordem específica
                </p>
              </div>

              {/* Lista ordenada */}
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Lista ordenada (ol)</h4>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>Primeiro passo</li>
                  <li>Segundo passo</li>
                  <li>Terceiro passo</li>
                </ol>
                <p className="text-xs text-muted-foreground mt-2">
                  Para itens com ordem importante
                </p>
              </div>

              {/* Lista de definição */}
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Lista de definição (dl)</h4>
                <dl className="text-sm space-y-1">
                  <dt className="font-medium">Termo 1</dt>
                  <dd className="ml-4 text-muted-foreground">Definição</dd>
                  <dt className="font-medium">Termo 2</dt>
                  <dd className="ml-4 text-muted-foreground">Definição</dd>
                </dl>
                <p className="text-xs text-muted-foreground mt-2">
                  Para pares termo/definição
                </p>
              </div>
            </div>
          </div>

          {/* Botão vs Link */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">7. Botão vs Link</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use o elemento correto para cada ação
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button>
                Botão: executa ação
              </Button>

              <a
                href="#exemplo"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Link: navega para URL
              </a>
            </div>

            <div className="bg-muted p-4 rounded-lg mt-4 text-sm space-y-2">
              <h4 className="font-medium">Quando usar cada um:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>button:</strong> Ações (submit, toggle, open modal, delete)</li>
                <li><strong>a (link):</strong> Navegação para outra página ou seção</li>
                <li><strong>Nunca:</strong> div ou span como botão/link clicável</li>
              </ul>
            </div>

            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg mt-4 text-sm">
              <h4 className="font-medium mb-2 text-red-800 dark:text-red-200">Anti-pattern:</h4>
              <code className="text-red-700 dark:text-red-300">
                {`<div onClick={handleClick}>Clique aqui</div>`}
              </code>
              <p className="mt-2 text-red-700 dark:text-red-300">
                Isso não é acessível por teclado nem anunciado corretamente!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

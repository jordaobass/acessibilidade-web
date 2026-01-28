import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ImageAccessibility } from "@/components/examples/ImageAccessibility"
import { FormAccessibility } from "@/components/examples/FormAccessibility"
import { NavigationAccessibility } from "@/components/examples/NavigationAccessibility"
import { TableAccessibility } from "@/components/examples/TableAccessibility"
import { ModalAccessibility } from "@/components/examples/ModalAccessibility"
import { LiveRegionAccessibility } from "@/components/examples/LiveRegionAccessibility"
import { KeyboardAccessibility } from "@/components/examples/KeyboardAccessibility"
import { SemanticHTML } from "@/components/examples/SemanticHTML"
import { ToolsAccessibility } from "@/components/examples/ToolsAccessibility"
import { AccessibilityBadge, AccessibilityStatement } from "@/components/AccessibilityBadge"
import {
  Image,
  FormInput,
  Navigation,
  Table,
  MessageSquare,
  Radio,
  Keyboard,
  Code,
  Moon,
  Sun,
  Github,
  ExternalLink,
  Wrench
} from "lucide-react"

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={isDark ? "dark" : ""}>
      {/* Skip Link - Pular para conteúdo principal */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header */}
      <header role="banner" className="border-b bg-background sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg
                role="img"
                aria-label="Logo de acessibilidade"
                className="h-8 w-8 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="4" r="2"/>
                <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 105.9 5.9h-2.07z"/>
              </svg>
              <div>
                <h1 className="text-xl font-bold">Guia de Acessibilidade Web</h1>
                <p className="text-sm text-muted-foreground hidden sm:block">
                  Exemplos práticos WCAG 2.1 com React
                </p>
              </div>
            </div>

            <nav aria-label="Links externos" className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
              >
                {isDark ? (
                  <Sun className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Moon className="h-5 w-5" aria-hidden="true" />
                )}
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/seu-usuario/guia-acessibilidade-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver código fonte no GitHub (abre em nova aba)"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" role="main" className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="text-center mb-12">
          <h2 id="hero-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Aprenda Acessibilidade Web na Prática
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Exemplos interativos de como implementar WCAG 2.1 em aplicações React.
            Cada exemplo inclui código, explicações e boas práticas para leitores de tela.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href="#examples">
                Ver Exemplos
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WCAG 2.1 Quick Reference
                <ExternalLink className="h-4 w-4 ml-2" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

        {/* Quick Stats */}
        <section aria-labelledby="stats-heading" className="mb-12">
          <h2 id="stats-heading" className="sr-only">Estatísticas do guia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary">9</div>
              <div className="text-sm text-muted-foreground">Categorias</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Exemplos</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary">WCAG 2.1</div>
              <div className="text-sm text-muted-foreground">Conformidade AA</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Código Aberto</div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" aria-labelledby="examples-heading" className="mb-12">
          <h2 id="examples-heading" className="text-2xl font-bold mb-6">
            Exemplos de Acessibilidade
          </h2>

          <Tabs defaultValue="semantic" className="w-full">
            <TabsList
              aria-label="Categorias de exemplos"
              className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-6"
            >
              <TabsTrigger value="semantic" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Code className="h-4 w-4 mr-2" aria-hidden="true" />
                HTML Semântico
              </TabsTrigger>
              <TabsTrigger value="images" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Image className="h-4 w-4 mr-2" aria-hidden="true" />
                Imagens
              </TabsTrigger>
              <TabsTrigger value="forms" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <FormInput className="h-4 w-4 mr-2" aria-hidden="true" />
                Formulários
              </TabsTrigger>
              <TabsTrigger value="navigation" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Navigation className="h-4 w-4 mr-2" aria-hidden="true" />
                Navegação
              </TabsTrigger>
              <TabsTrigger value="tables" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Table className="h-4 w-4 mr-2" aria-hidden="true" />
                Tabelas
              </TabsTrigger>
              <TabsTrigger value="modals" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" />
                Modais
              </TabsTrigger>
              <TabsTrigger value="live" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Radio className="h-4 w-4 mr-2" aria-hidden="true" />
                Live Regions
              </TabsTrigger>
              <TabsTrigger value="keyboard" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Keyboard className="h-4 w-4 mr-2" aria-hidden="true" />
                Teclado
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Wrench className="h-4 w-4 mr-2" aria-hidden="true" />
                Ferramentas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="semantic">
              <SemanticHTML />
            </TabsContent>
            <TabsContent value="images">
              <ImageAccessibility />
            </TabsContent>
            <TabsContent value="forms">
              <FormAccessibility />
            </TabsContent>
            <TabsContent value="navigation">
              <NavigationAccessibility />
            </TabsContent>
            <TabsContent value="tables">
              <TableAccessibility />
            </TabsContent>
            <TabsContent value="modals">
              <ModalAccessibility />
            </TabsContent>
            <TabsContent value="live">
              <LiveRegionAccessibility />
            </TabsContent>
            <TabsContent value="keyboard">
              <KeyboardAccessibility />
            </TabsContent>
            <TabsContent value="tools">
              <ToolsAccessibility />
            </TabsContent>
          </Tabs>
        </section>

        {/* Resources Section */}
        <section aria-labelledby="resources-heading" className="mb-12">
          <h2 id="resources-heading" className="text-2xl font-bold mb-6">
            Recursos e Ferramentas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Ferramentas de Teste</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.deque.com/axe/devtools/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Axe DevTools
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wave.webaim.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    WAVE
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.chrome.com/docs/lighthouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Lighthouse
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
              </ul>
            </article>

            <article className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Leitores de Tela</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.nvaccess.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    NVDA (Windows, gratuito)
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freedomscientific.com/products/software/jaws/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    JAWS (Windows)
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
                <li>VoiceOver (macOS/iOS, integrado)</li>
                <li>TalkBack (Android, integrado)</li>
              </ul>
            </article>

            <article className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Documentação</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.w3.org/WAI/WCAG21/quickref/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    WCAG 2.1 Quick Reference
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3.org/WAI/ARIA/apg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    ARIA Authoring Practices
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/Accessibility"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    MDN Accessibility
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Accessibility Statement */}
        <AccessibilityStatement />
      </main>

      {/* Footer */}
      <footer role="contentinfo" className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-medium">Guia de Acessibilidade Web</p>
              <p className="text-sm text-muted-foreground">
                Desenvolvido com React 19 + shadcn/ui
              </p>
            </div>

            <nav aria-label="Links do rodapé">
              <ul className="flex gap-4 text-sm">
                <li>
                  <a href="#accessibility-statement" className="hover:underline">
                    Acessibilidade
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/seu-usuario/guia-acessibilidade-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                    <span className="sr-only">(abre em nova aba)</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>
              Este projeto é open source e pode ser usado como referência para
              desenvolvimento de aplicações acessíveis.
            </p>
            <p className="mt-2">
              <time dateTime="2024">2024</time> NextTag - Licença MIT
            </p>
          </div>
        </div>
      </footer>

      {/* Accessibility Badge */}
      <AccessibilityBadge />
    </div>
  )
}

export default App

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Home, User, Settings, Mail, Bell, Menu, X } from "lucide-react"

/**
 * Exemplo de Acessibilidade em Navegação
 *
 * Demonstra:
 * - nav com aria-label
 * - Breadcrumbs acessíveis
 * - Menu mobile com aria-expanded
 * - Tabs acessíveis
 * - Skip links
 * - aria-current para página atual
 */
export function NavigationAccessibility() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage] = useState("home")

  return (
    <section aria-labelledby="nav-heading">
      <Card>
        <CardHeader>
          <CardTitle id="nav-heading">Acessibilidade em Navegação</CardTitle>
          <CardDescription>
            Exemplos de navegação acessível, tabs, accordions e menus
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Navegação Principal */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Navegação Principal</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use nav com aria-label e aria-current para indicar a página atual
            </p>

            <nav aria-label="Menu principal" className="bg-muted rounded-lg p-4">
              <ul className="flex flex-wrap gap-2" role="menubar">
                <li role="none">
                  <a
                    href="#home"
                    role="menuitem"
                    aria-current={currentPage === "home" ? "page" : undefined}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors
                      ${currentPage === "home"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                      }`}
                  >
                    <Home className="h-4 w-4" aria-hidden="true" />
                    Início
                  </a>
                </li>
                <li role="none">
                  <a
                    href="#about"
                    role="menuitem"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors"
                  >
                    <User className="h-4 w-4" aria-hidden="true" />
                    Sobre
                  </a>
                </li>
                <li role="none">
                  <a
                    href="#contact"
                    role="menuitem"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Contato
                  </a>
                </li>
                <li role="none">
                  <a
                    href="#settings"
                    role="menuitem"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md hover:bg-accent transition-colors"
                  >
                    <Settings className="h-4 w-4" aria-hidden="true" />
                    Configurações
                  </a>
                </li>
              </ul>
            </nav>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<nav aria-label="Menu principal"><a aria-current="page">...</a></nav>`}
            </code>
          </div>

          {/* Breadcrumbs */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Breadcrumbs (Trilha de Navegação)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use nav com aria-label específico e aria-current no item atual
            </p>

            <nav aria-label="Trilha de navegação" className="p-4 bg-muted rounded-lg">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <a href="#home" className="hover:underline">Início</a>
                </li>
                <li aria-hidden="true" className="text-muted-foreground">/</li>
                <li>
                  <a href="#products" className="hover:underline">Produtos</a>
                </li>
                <li aria-hidden="true" className="text-muted-foreground">/</li>
                <li>
                  <a href="#electronics" className="hover:underline">Eletrônicos</a>
                </li>
                <li aria-hidden="true" className="text-muted-foreground">/</li>
                <li>
                  <span aria-current="page" className="font-medium">Smartphones</span>
                </li>
              </ol>
            </nav>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<nav aria-label="Trilha de navegação"><ol>...<span aria-current="page">Atual</span></ol></nav>`}
            </code>
          </div>

          {/* Menu Mobile */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Menu Mobile com Toggle</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use aria-expanded, aria-controls e aria-label para menus colapsáveis
            </p>

            <div className="border rounded-lg overflow-hidden max-w-sm">
              <div className="flex items-center justify-between p-4 bg-muted">
                <span className="font-semibold">MeuSite</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Menu className="h-5 w-5" aria-hidden="true" />
                  )}
                </Button>
              </div>

              <nav
                id="mobile-menu"
                aria-label="Menu mobile"
                className={`${mobileMenuOpen ? "block" : "hidden"} p-4 space-y-2`}
              >
                <a href="#home" className="block p-2 hover:bg-accent rounded">Início</a>
                <a href="#about" className="block p-2 hover:bg-accent rounded">Sobre</a>
                <a href="#services" className="block p-2 hover:bg-accent rounded">Serviços</a>
                <a href="#contact" className="block p-2 hover:bg-accent rounded">Contato</a>
              </nav>
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<button aria-expanded={open} aria-controls="menu" aria-label="Abrir menu">`}
            </code>
          </div>

          {/* Tabs */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">4. Tabs (Abas) Acessíveis</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Tabs do Radix UI já são acessíveis com navegação por teclado
            </p>

            <Tabs defaultValue="profile" className="max-w-md">
              <TabsList aria-label="Configurações da conta">
                <TabsTrigger value="profile">
                  <User className="h-4 w-4 mr-2" aria-hidden="true" />
                  Perfil
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Bell className="h-4 w-4 mr-2" aria-hidden="true" />
                  Notificações
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="h-4 w-4 mr-2" aria-hidden="true" />
                  Configurações
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="p-4 border rounded-lg mt-2">
                <h4 className="font-medium mb-2">Informações do Perfil</h4>
                <p className="text-sm text-muted-foreground">
                  Gerencie suas informações pessoais aqui.
                </p>
              </TabsContent>
              <TabsContent value="notifications" className="p-4 border rounded-lg mt-2">
                <h4 className="font-medium mb-2">Preferências de Notificação</h4>
                <p className="text-sm text-muted-foreground">
                  Configure como você deseja receber notificações.
                </p>
              </TabsContent>
              <TabsContent value="settings" className="p-4 border rounded-lg mt-2">
                <h4 className="font-medium mb-2">Configurações Gerais</h4>
                <p className="text-sm text-muted-foreground">
                  Ajuste as configurações da sua conta.
                </p>
              </TabsContent>
            </Tabs>

            <p className="text-sm text-muted-foreground">
              <strong>Navegação por teclado:</strong> Use Tab para entrar nas tabs,
              setas ← → para navegar entre elas, e Enter/Space para selecionar.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5. Accordion (Sanfona) Acessível</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Accordions com aria-expanded e navegação por teclado
            </p>

            <Accordion type="single" collapsible className="max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>O que é acessibilidade web?</AccordionTrigger>
                <AccordionContent>
                  Acessibilidade web significa que sites, ferramentas e tecnologias são
                  projetados e desenvolvidos para que pessoas com deficiências possam usá-los.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Por que a acessibilidade é importante?</AccordionTrigger>
                <AccordionContent>
                  A acessibilidade permite que todos, independentemente de suas habilidades,
                  possam perceber, entender, navegar e interagir com a web.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>O que são as WCAG?</AccordionTrigger>
                <AccordionContent>
                  As Web Content Accessibility Guidelines (WCAG) são diretrizes internacionais
                  que explicam como tornar o conteúdo web mais acessível.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <p className="text-sm text-muted-foreground">
              <strong>Navegação por teclado:</strong> Use Tab para navegar entre os itens,
              Enter/Space para expandir/colapsar.
            </p>
          </div>

          {/* Skip Link Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">6. Skip Link (Pular para Conteúdo)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Permite usuários de teclado pular a navegação repetitiva
            </p>

            <div className="border rounded-lg overflow-hidden">
              <div className="relative bg-muted p-4">
                <a
                  href="#main-content-example"
                  className="skip-link absolute left-0 bg-primary text-primary-foreground px-4 py-2 -top-10 focus:top-2 z-10 transition-all"
                >
                  Pular para o conteúdo principal
                </a>
                <p className="text-sm">
                  Pressione <kbd className="px-1 bg-background rounded">Tab</kbd> para ver o skip link
                </p>
              </div>
              <main id="main-content-example" className="p-4">
                <p className="text-sm text-muted-foreground">
                  Este é o conteúdo principal da página.
                </p>
              </main>
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<a href="#main" class="skip-link">Pular para o conteúdo</a>`}
            </code>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

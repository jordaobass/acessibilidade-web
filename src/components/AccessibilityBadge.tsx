import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Shield } from "lucide-react"

/**
 * Selo de Acessibilidade
 */
export function AccessibilityBadge() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="#accessibility-statement"
        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label="Ver declaração de acessibilidade - Site em conformidade com WCAG 2.1 AA"
      >
        <Shield className="h-5 w-5" aria-hidden="true" />
        <span className="text-sm font-medium">WCAG 2.1 AA</span>
      </a>
    </div>
  )
}

/**
 * Declaração de Acessibilidade
 */
export function AccessibilityStatement() {
  const features = [
    { text: "Navegação completa por teclado", link: "#examples" },
    { text: "Compatibilidade com leitores de tela", link: "#examples" },
    { text: "Textos alternativos em imagens", link: "#examples" },
    { text: "Contraste de cores adequado (4.5:1)", link: null },
    { text: "Estrutura semântica com landmarks", link: "#examples" },
    { text: "Formulários com labels acessíveis", link: "#examples" },
    { text: "Anúncios dinâmicos para leitores de tela", link: "#examples" },
    { text: "Skip links para navegação rápida", link: "#examples" },
  ]

  return (
    <section
      id="accessibility-statement"
      aria-labelledby="a11y-statement-heading"
      className="scroll-mt-20"
    >
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
          </div>
          <CardTitle id="a11y-statement-heading" className="text-2xl">
            Declaração de Acessibilidade
          </CardTitle>
          <CardDescription className="text-base max-w-2xl mx-auto">
            Este site segue as diretrizes WCAG 2.1 nível AA para garantir acesso a todas as pessoas
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 p-3 bg-muted/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" aria-hidden="true" />
                  <span className="text-sm">{feature.text}</span>
                </div>
                {feature.link && (
                  <a
                    href={feature.link}
                    className="text-xs text-primary hover:underline shrink-0"
                  >
                    Saiba mais
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Tecnologias</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>HTML5 semântico</li>
                <li>WAI-ARIA 1.2</li>
                <li>React + Radix UI</li>
                <li>eslint-plugin-jsx-a11y</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Testes Realizados</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Lighthouse Accessibility</li>
                <li>Axe DevTools</li>
                <li>WAVE</li>
                <li>Navegação por teclado</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              Última atualização: <time dateTime="2024-01-15">Janeiro de 2024</time>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Encontrou alguma barreira? Entre em contato para reportar.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

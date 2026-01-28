import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Trash2, Edit, Copy } from "lucide-react"

/**
 * Exemplo de Acessibilidade por Teclado
 *
 * Demonstra:
 * - tabindex para ordem de tabulação
 * - Padrões de navegação por setas
 * - Teclas de atalho
 * - Skip links
 * - Foco visível
 */
export function KeyboardAccessibility() {
  const [selectedItem, setSelectedItem] = useState(0)
  const [rating, setRating] = useState(3)
  const listRef = useRef<HTMLUListElement>(null)

  const items = [
    { id: 1, title: "Reunião de equipe", date: "15/01" },
    { id: 2, title: "Consulta médica", date: "16/01" },
    { id: 3, title: "Apresentação", date: "17/01" },
    { id: 4, title: "Almoço de negócios", date: "18/01" },
  ]

  // Navegação por setas na lista
  const handleListKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedItem(Math.min(index + 1, items.length - 1))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedItem(Math.max(index - 1, 0))
        break
      case "Home":
        e.preventDefault()
        setSelectedItem(0)
        break
      case "End":
        e.preventDefault()
        setSelectedItem(items.length - 1)
        break
    }
  }

  // Navegação por setas no rating
  const handleRatingKeyDown = (e: React.KeyboardEvent, star: number) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        e.preventDefault()
        setRating(Math.min(star + 1, 5))
        break
      case "ArrowLeft":
      case "ArrowDown":
        e.preventDefault()
        setRating(Math.max(star - 1, 1))
        break
    }
  }

  return (
    <section aria-labelledby="keyboard-heading">
      <Card>
        <CardHeader>
          <CardTitle id="keyboard-heading">Acessibilidade por Teclado</CardTitle>
          <CardDescription>
            Exemplos de navegação e interação acessíveis por teclado
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Ordem de Tabulação */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Ordem de Tabulação (tabindex)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use tabindex corretamente: 0 para ordem natural, -1 para remover da tabulação
            </p>

            <div className="flex flex-wrap gap-4 p-4 bg-muted rounded-lg">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
                Botão 1 (natural)
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
                Botão 2 (natural)
              </button>
              <button
                tabIndex={-1}
                className="px-4 py-2 bg-muted-foreground/30 text-muted-foreground rounded"
              >
                Botão 3 (tabindex=-1, não acessível por Tab)
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded">
                Botão 4 (natural)
              </button>
            </div>

            <div className="bg-muted p-4 rounded-lg mt-4 text-sm space-y-2">
              <p><strong>Regras de tabindex:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li><code>tabindex="0"</code> - Inclui na ordem natural de tabulação</li>
                <li><code>tabindex="-1"</code> - Remove da tabulação, mas pode receber foco programaticamente</li>
                <li><code>tabindex="1+"</code> - EVITE! Cria ordem confusa e é considerado anti-pattern</li>
              </ul>
            </div>
          </div>

          {/* Lista com Navegação por Setas */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Lista com Navegação por Setas</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use o padrão roving tabindex para listas navegáveis
            </p>

            <ul
              ref={listRef}
              role="listbox"
              tabIndex={0}
              aria-label="Lista de compromissos"
              aria-activedescendant={`item-${items[selectedItem].id}`}
              className="border rounded-lg overflow-hidden max-w-md"
            >
              {items.map((item, index) => (
                <li
                  key={item.id}
                  id={`item-${item.id}`}
                  role="option"
                  aria-selected={selectedItem === index}
                  tabIndex={selectedItem === index ? 0 : -1}
                  onKeyDown={(e) => handleListKeyDown(e, index)}
                  onClick={() => setSelectedItem(index)}
                  className={`flex justify-between items-center p-3 cursor-pointer
                    ${selectedItem === index
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                    }
                    ${index !== items.length - 1 ? "border-b" : ""}
                  `}
                >
                  <span>{item.title}</span>
                  <span className="text-sm opacity-80">{item.date}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground mt-2">
              <strong>Navegação:</strong> ↑↓ para mover, Home/End para primeiro/último
            </p>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`tabIndex={selected === index ? 0 : -1} // Roving tabindex`}
            </code>
          </div>

          {/* Rating com Teclado */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Componente de Avaliação (Rating)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Navegação por setas para selecionar estrelas
            </p>

            <div
              role="radiogroup"
              aria-label="Avaliação"
              className="flex gap-1"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  role="radio"
                  aria-checked={star === rating}
                  aria-label={`${star} estrela${star > 1 ? "s" : ""}`}
                  tabIndex={star === rating ? 0 : -1}
                  onClick={() => setRating(star)}
                  onKeyDown={(e) => handleRatingKeyDown(e, star)}
                  className={`p-1 rounded focus-visible:ring-2 focus-visible:ring-ring
                    ${star <= rating ? "text-yellow-500" : "text-gray-300"}
                  `}
                >
                  <Star
                    className="h-8 w-8"
                    fill={star <= rating ? "currentColor" : "none"}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            <p className="text-sm mt-2">
              Avaliação atual: <strong>{rating} estrela{rating > 1 ? "s" : ""}</strong>
            </p>

            <p className="text-sm text-muted-foreground mt-2">
              <strong>Navegação:</strong> ←→ ou ↑↓ para alterar avaliação
            </p>
          </div>

          {/* Toolbar com Teclado */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">4. Toolbar com Navegação</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use role="toolbar" com navegação por setas
            </p>

            <div
              role="toolbar"
              aria-label="Ações do item"
              className="flex gap-1 p-2 bg-muted rounded-lg w-fit"
            >
              <Button variant="ghost" size="icon" aria-label="Editar">
                <Edit className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Copiar">
                <Copy className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Favoritar">
                <Star className="h-4 w-4" aria-hidden="true" />
              </Button>
              <div className="w-px bg-border mx-1" role="separator" aria-orientation="vertical" />
              <Button variant="ghost" size="icon" aria-label="Excluir">
                <Trash2 className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              <strong>Padrão:</strong> Tab entra na toolbar, setas navegam entre botões
            </p>
          </div>

          {/* Carousel/Slider Acessível */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5. Carrossel Acessível</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Controles de navegação e anúncios para leitores de tela
            </p>

            <div
              role="region"
              aria-roledescription="carrossel"
              aria-label="Compromissos da semana"
              className="border rounded-lg p-4 max-w-md"
            >
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </Button>

                <div
                  role="group"
                  aria-roledescription="slide"
                  aria-label="1 de 3"
                  className="text-center px-4"
                >
                  <h4 className="font-medium">Reunião de equipe</h4>
                  <p className="text-sm text-muted-foreground">Segunda, 15/01 às 09:00</p>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Próximo slide"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>

              {/* Indicadores de slide */}
              <div role="tablist" aria-label="Slides" className="flex justify-center gap-2">
                {[1, 2, 3].map((slide) => (
                  <button
                    key={slide}
                    role="tab"
                    aria-selected={slide === 1}
                    aria-label={`Ir para slide ${slide}`}
                    className={`w-2 h-2 rounded-full ${
                      slide === 1 ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Teclas de Atalho */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">6. Teclas de Atalho (Keyboard Shortcuts)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Documente e implemente atalhos de teclado úteis
            </p>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Atalhos disponíveis nesta página:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Novo compromisso</span>
                  <kbd className="px-2 py-1 bg-background rounded">Ctrl + N</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Buscar</span>
                  <kbd className="px-2 py-1 bg-background rounded">Ctrl + K</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Ajuda</span>
                  <kbd className="px-2 py-1 bg-background rounded">?</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Fechar modal</span>
                  <kbd className="px-2 py-1 bg-background rounded">Escape</kbd>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              <strong>Dica:</strong> Não use apenas letras simples como atalhos (conflitam com leitores de tela).
              Prefira combinações com Ctrl, Alt ou Shift.
            </p>
          </div>

          {/* Foco Visível */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">7. Foco Visível</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Sempre mostre indicador de foco para usuários de teclado
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Bom: focus-visible
              </button>

              <button className="px-4 py-2 bg-primary text-primary-foreground rounded outline-none">
                Ruim: outline-none sem alternativa
              </button>
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-4">
              {`focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
            </code>

            <p className="text-sm text-muted-foreground mt-2">
              <strong>focus-visible</strong> mostra o anel apenas para navegação por teclado,
              não para cliques do mouse.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

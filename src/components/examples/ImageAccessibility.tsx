import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Exemplo de Acessibilidade em Imagens
 *
 * Demonstra:
 * - alt text descritivo para imagens informativas
 * - alt="" para imagens decorativas
 * - figure e figcaption para imagens com legenda
 * - role="img" para SVGs
 * - aria-describedby para descrições longas
 */
export function ImageAccessibility() {
  return (
    <section aria-labelledby="images-heading">
      <Card>
        <CardHeader>
          <CardTitle id="images-heading">Acessibilidade em Imagens</CardTitle>
          <CardDescription>
            Exemplos de como tornar imagens acessíveis para leitores de tela
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Imagem informativa com alt descritivo */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Imagem Informativa</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Use texto alternativo descritivo que transmita o significado da imagem
            </p>
            <img
              src="/images/luffy.jpg"
              alt="Monkey D. Luffy, protagonista de One Piece, com seu icônico chapéu de palha e sorriso determinado"
              className="rounded-lg max-w-md object-cover"
              width={400}
              height={300}
            />
            <code className="block text-xs bg-muted p-2 rounded mt-2">
              alt="Monkey D. Luffy, protagonista de One Piece, com seu chapéu de palha..."
            </code>
          </div>

          {/* Imagem decorativa */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Imagem Decorativa</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Imagens puramente decorativas devem ter alt vazio para serem ignoradas
            </p>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <img
                src="/images/pokemon.jpg"
                alt=""
                role="presentation"
                className="rounded-full object-cover"
                width={60}
                height={60}
              />
              <span className="font-medium">Conteúdo com ícone decorativo</span>
            </div>
            <code className="block text-xs bg-muted p-2 rounded mt-2">
              alt="" role="presentation"
            </code>
          </div>

          {/* Figure e Figcaption */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Figure com Figcaption</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Use figure e figcaption para associar legendas às imagens semanticamente
            </p>
            <figure className="max-w-md">
              <img
                src="/images/luffy.jpg"
                alt="Luffy usando seu poder Gear 5, com aura branca e expressão confiante"
                className="rounded-lg object-cover"
                width={400}
                height={250}
              />
              <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                Figura 1: Monkey D. Luffy, o futuro Rei dos Piratas
              </figcaption>
            </figure>
            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<figure><img alt="..."/><figcaption>...</figcaption></figure>`}
            </code>
          </div>

          {/* SVG Acessível */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">4. SVG Acessível</h3>
            <p className="text-sm text-muted-foreground mb-2">
              SVGs precisam de role="img" e título acessível
            </p>
            <svg
              role="img"
              aria-labelledby="chart-title chart-desc"
              width="200"
              height="100"
              className="border rounded"
            >
              <title id="chart-title">Gráfico de Vendas</title>
              <desc id="chart-desc">
                Gráfico de barras mostrando vendas trimestrais: Q1 50 unidades, Q2 80 unidades, Q3 60 unidades, Q4 90 unidades
              </desc>
              <rect x="10" y="50" width="30" height="50" fill="hsl(var(--primary))" />
              <rect x="50" y="20" width="30" height="80" fill="hsl(var(--primary))" />
              <rect x="90" y="40" width="30" height="60" fill="hsl(var(--primary))" />
              <rect x="130" y="10" width="30" height="90" fill="hsl(var(--primary))" />
            </svg>
            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<svg role="img" aria-labelledby="chart-title chart-desc"><title>...</title><desc>...</desc></svg>`}
            </code>
          </div>

          {/* Imagem com descrição longa */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5. Descrição Longa com aria-describedby</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Para imagens complexas, use aria-describedby para descrições detalhadas
            </p>
            <img
              src="/images/pokemon.jpg"
              alt="Pokémon em cena de batalha com cores vibrantes"
              aria-describedby="infographic-description"
              className="rounded-lg max-w-md object-cover"
              width={400}
              height={250}
            />
            <div id="infographic-description" className="text-sm bg-muted p-4 rounded-lg mt-2 max-w-md">
              <strong>Descrição detalhada:</strong> Imagem mostra um Pokémon em posição de batalha.
              A cena apresenta cores vibrantes e efeitos especiais típicos do anime. O personagem
              está em primeiro plano com um cenário dinâmico ao fundo.
            </div>
            <code className="block text-xs bg-muted p-2 rounded mt-2">
              aria-describedby="infographic-description"
            </code>
          </div>

          {/* Imagem como link */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">6. Imagem como Link</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Quando uma imagem é um link, o alt deve descrever o destino
            </p>
            <a
              href="#home"
              className="inline-block focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              <img
                src="/images/luffy.jpg"
                alt="Ir para a página inicial - Luffy apontando para frente"
                className="rounded-lg object-cover"
                width={100}
                height={100}
              />
            </a>
            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<a href="..."><img alt="Ir para..." /></a>`}
            </code>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

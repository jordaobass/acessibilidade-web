import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, AlertCircle, Info, Loader2 } from "lucide-react"

/**
 * Exemplo de Acessibilidade com Live Regions
 *
 * Demonstra:
 * - aria-live="polite" para atualizações não urgentes
 * - aria-live="assertive" para alertas urgentes
 * - role="status" para mensagens de status
 * - role="alert" para erros e alertas
 * - aria-busy para indicar carregamento
 * - aria-atomic para anunciar todo o conteúdo
 */
export function LiveRegionAccessibility() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [notification, setNotification] = useState<{
    type: "success" | "error" | "info"
    message: string
  } | null>(null)
  const [counter, setCounter] = useState(0)
  const [progressValue, setProgressValue] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  // Simular busca
  const handleSearch = () => {
    setIsSearching(true)
    setSearchResults([])

    setTimeout(() => {
      const results = [
        "Reunião de planejamento",
        "Reunião com cliente",
        "Reunião de retrospectiva",
      ].filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(results)
      setIsSearching(false)
    }, 1500)
  }

  // Simular upload com progresso
  const handleUpload = () => {
    setIsUploading(true)
    setProgressValue(0)

    const interval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setNotification({
            type: "success",
            message: "Upload concluído com sucesso!",
          })
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  // Limpar notificação após 5 segundos
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  return (
    <section aria-labelledby="live-region-heading">
      <Card>
        <CardHeader>
          <CardTitle id="live-region-heading">Live Regions e Anúncios Dinâmicos</CardTitle>
          <CardDescription>
            Exemplos de como comunicar atualizações dinâmicas para leitores de tela
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Notificação Global */}
          {notification && (
            <div
              role={notification.type === "error" ? "alert" : "status"}
              aria-live={notification.type === "error" ? "assertive" : "polite"}
              className={`flex items-center gap-2 p-4 rounded-lg ${
                notification.type === "success"
                  ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                  : notification.type === "error"
                  ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
                  : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
              }`}
            >
              {notification.type === "success" && <CheckCircle2 className="h-5 w-5" aria-hidden="true" />}
              {notification.type === "error" && <AlertCircle className="h-5 w-5" aria-hidden="true" />}
              {notification.type === "info" && <Info className="h-5 w-5" aria-hidden="true" />}
              <span>{notification.message}</span>
            </div>
          )}

          {/* Busca com Live Region */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Busca com Resultados Dinâmicos</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Usa aria-live="polite" para anunciar resultados sem interromper o usuário
            </p>

            <div className="flex gap-2 max-w-md">
              <Input
                type="search"
                placeholder="Buscar compromissos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Buscar compromissos"
              />
              <Button onClick={handleSearch} disabled={isSearching}>
                {isSearching ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
                    Buscando...
                  </>
                ) : (
                  "Buscar"
                )}
              </Button>
            </div>

            {/* Região de resultados com aria-live */}
            <div
              role="region"
              aria-live="polite"
              aria-busy={isSearching}
              aria-atomic="true"
              className="mt-4"
            >
              {isSearching ? (
                <p className="text-sm text-muted-foreground">
                  <span className="sr-only">Carregando, </span>
                  Buscando compromissos...
                </p>
              ) : searchResults.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-sm font-medium">
                    {searchResults.length} resultado(s) encontrado(s):
                  </p>
                  <ul className="space-y-1">
                    {searchResults.map((result, index) => (
                      <li key={index} className="text-sm p-2 bg-muted rounded">
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : searchTerm ? (
                <p className="text-sm text-muted-foreground">
                  Nenhum resultado encontrado para "{searchTerm}"
                </p>
              ) : null}
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<div aria-live="polite" aria-busy={isSearching} aria-atomic="true">`}
            </code>
          </div>

          {/* Contador com aria-live */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Contador com Anúncios</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Usa role="status" para anunciar mudanças de valor
            </p>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setCounter((c) => c - 1)}
                aria-label="Diminuir contador"
              >
                -
              </Button>

              <span
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="text-2xl font-bold min-w-[3rem] text-center"
              >
                {counter}
              </span>

              <Button
                variant="outline"
                onClick={() => setCounter((c) => c + 1)}
                aria-label="Aumentar contador"
              >
                +
              </Button>
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<span role="status" aria-live="polite">{counter}</span>`}
            </code>
          </div>

          {/* Upload com Progresso */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Upload com Barra de Progresso</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Usa progressbar nativo com anúncios de progresso
            </p>

            <div className="space-y-4 max-w-md">
              <Button onClick={handleUpload} disabled={isUploading}>
                {isUploading ? "Enviando..." : "Simular Upload"}
              </Button>

              {isUploading && (
                <div className="space-y-2">
                  <progress
                    value={progressValue}
                    max={100}
                    className="w-full h-2 rounded overflow-hidden"
                    aria-label="Progresso do upload"
                    aria-valuenow={progressValue}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {progressValue}%
                  </progress>

                  {/* Anúncio do progresso para leitores de tela */}
                  <div
                    role="status"
                    aria-live="polite"
                    className="text-sm text-muted-foreground"
                  >
                    {progressValue}% concluído
                  </div>
                </div>
              )}
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<progress aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>`}
            </code>
          </div>

          {/* Botões de Notificação */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">4. Diferentes Tipos de Anúncios</h3>
            <p className="text-sm text-muted-foreground mb-4">
              aria-live="assertive" interrompe a leitura atual (use com moderação)
            </p>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() =>
                  setNotification({
                    type: "success",
                    message: "Operação realizada com sucesso!",
                  })
                }
              >
                <CheckCircle2 className="h-4 w-4 mr-2" aria-hidden="true" />
                Sucesso (polite)
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  setNotification({
                    type: "error",
                    message: "Erro ao processar a solicitação!",
                  })
                }
              >
                <AlertCircle className="h-4 w-4 mr-2" aria-hidden="true" />
                Erro (assertive)
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  setNotification({
                    type: "info",
                    message: "Nova mensagem recebida.",
                  })
                }
              >
                <Info className="h-4 w-4 mr-2" aria-hidden="true" />
                Info (polite)
              </Button>
            </div>

            <div className="bg-muted p-4 rounded-lg mt-4 space-y-2">
              <h4 className="font-medium">Quando usar cada tipo:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>aria-live="polite":</strong> Atualizações não urgentes (resultados de busca, status)</li>
                <li><strong>aria-live="assertive":</strong> Alertas urgentes (erros, avisos críticos)</li>
                <li><strong>role="status":</strong> Informações de status (mensagens de sucesso)</li>
                <li><strong>role="alert":</strong> Erros e alertas importantes (sempre assertive)</li>
                <li><strong>aria-atomic="true":</strong> Anuncia todo o conteúdo, não apenas mudanças</li>
              </ul>
            </div>
          </div>

          {/* Timer com anúncio */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5. Timer com Anúncios Periódicos</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use aria-live com moderação para não sobrecarregar o usuário
            </p>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                <strong>Dica:</strong> Para timers, anuncie apenas em intervalos significativos
                (ex: a cada minuto, ou quando restam 10 segundos), não a cada segundo.
              </p>
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
{`// Bom: Anunciar apenas em pontos importantes
if (timeLeft === 60 || timeLeft === 10 || timeLeft === 0) {
  announceToScreenReader(\`Tempo restante: \${timeLeft} segundos\`)
}`}
            </code>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

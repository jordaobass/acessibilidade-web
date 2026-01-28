import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Eye } from "lucide-react"

/**
 * Exemplo de Acessibilidade em Tabelas
 *
 * Demonstra:
 * - caption para título da tabela
 * - scope em th para associar cabeçalhos
 * - aria-sort para indicar ordenação
 * - aria-describedby para descrição adicional
 * - Botões de ação com aria-label descritivo
 */
export function TableAccessibility() {
  const appointments = [
    { id: 1, title: "Reunião de equipe", date: "2024-01-15", time: "09:00", status: "Confirmado" },
    { id: 2, title: "Consulta médica", date: "2024-01-16", time: "14:30", status: "Pendente" },
    { id: 3, title: "Apresentação projeto", date: "2024-01-17", time: "10:00", status: "Confirmado" },
    { id: 4, title: "Almoço de negócios", date: "2024-01-18", time: "12:00", status: "Cancelado" },
  ]

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Confirmado":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "Pendente":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      case "Cancelado":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
      default:
        return ""
    }
  }

  return (
    <section aria-labelledby="table-heading">
      <Card>
        <CardHeader>
          <CardTitle id="table-heading">Acessibilidade em Tabelas</CardTitle>
          <CardDescription>
            Exemplos de tabelas de dados acessíveis para leitores de tela
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Tabela Simples */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Tabela de Dados com Cabeçalhos</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use caption, scope em th, e aria-sort para ordenação
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse" aria-describedby="table-description">
                <caption className="text-left font-medium mb-2 sr-only">
                  Agenda de compromissos
                </caption>
                <thead>
                  <tr className="border-b bg-muted">
                    <th
                      scope="col"
                      className="text-left p-3 font-semibold"
                      aria-sort="ascending"
                    >
                      <button className="flex items-center gap-1 hover:text-primary">
                        Compromisso
                        <span aria-hidden="true">↑</span>
                      </button>
                    </th>
                    <th scope="col" className="text-left p-3 font-semibold">
                      Data
                    </th>
                    <th scope="col" className="text-left p-3 font-semibold">
                      Horário
                    </th>
                    <th scope="col" className="text-left p-3 font-semibold">
                      Status
                    </th>
                    <th scope="col" className="text-left p-3 font-semibold">
                      <span className="sr-only">Ações</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="border-b hover:bg-muted/50">
                      <td className="p-3">
                        <span id={`appointment-${appointment.id}`}>
                          {appointment.title}
                        </span>
                      </td>
                      <td className="p-3">{appointment.date}</td>
                      <td className="p-3">{appointment.time}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-sm ${getStatusClass(appointment.status)}`}>
                          {appointment.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`Ver detalhes de ${appointment.title}`}
                            aria-describedby={`appointment-${appointment.id}`}
                          >
                            <Eye className="h-4 w-4" aria-hidden="true" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`Editar ${appointment.title}`}
                            aria-describedby={`appointment-${appointment.id}`}
                          >
                            <Edit className="h-4 w-4" aria-hidden="true" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`Excluir ${appointment.title}`}
                            aria-describedby={`appointment-${appointment.id}`}
                          >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p id="table-description" className="text-sm text-muted-foreground">
              Tabela mostrando 4 compromissos. Use as setas do teclado para navegar.
            </p>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<th scope="col" aria-sort="ascending">Título</th>`}
            </code>
          </div>

          {/* Tabela com Row Headers */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Tabela com Cabeçalhos de Linha</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use scope="row" quando a primeira célula de cada linha é um cabeçalho
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <caption className="text-left font-medium mb-2">
                  Horário Semanal
                </caption>
                <thead>
                  <tr className="border-b bg-muted">
                    <th scope="col" className="text-left p-3 font-semibold">Dia</th>
                    <th scope="col" className="text-left p-3 font-semibold">Manhã</th>
                    <th scope="col" className="text-left p-3 font-semibold">Tarde</th>
                    <th scope="col" className="text-left p-3 font-semibold">Noite</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <th scope="row" className="text-left p-3 font-medium bg-muted/50">Segunda</th>
                    <td className="p-3">Reunião</td>
                    <td className="p-3">Desenvolvimento</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="text-left p-3 font-medium bg-muted/50">Terça</th>
                    <td className="p-3">Code Review</td>
                    <td className="p-3">Testes</td>
                    <td className="p-3">Deploy</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="text-left p-3 font-medium bg-muted/50">Quarta</th>
                    <td className="p-3">Planning</td>
                    <td className="p-3">Desenvolvimento</td>
                    <td className="p-3">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<th scope="row">Segunda</th><td>Reunião</td>`}
            </code>
          </div>

          {/* Tabela Complexa com Colspan */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Tabela Complexa com Agrupamentos</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use colgroup, rowgroup, e headers para tabelas complexas
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <caption className="text-left font-medium mb-2">
                  Relatório de Vendas por Região
                </caption>
                <thead>
                  <tr className="bg-muted">
                    <th scope="col" rowSpan={2} className="border p-3 font-semibold" id="region">
                      Região
                    </th>
                    <th scope="colgroup" colSpan={2} className="border p-3 font-semibold" id="q1">
                      1º Trimestre
                    </th>
                    <th scope="colgroup" colSpan={2} className="border p-3 font-semibold" id="q2">
                      2º Trimestre
                    </th>
                  </tr>
                  <tr className="bg-muted/50">
                    <th scope="col" className="border p-3 font-medium" id="q1-units">Unidades</th>
                    <th scope="col" className="border p-3 font-medium" id="q1-revenue">Receita</th>
                    <th scope="col" className="border p-3 font-medium" id="q2-units">Unidades</th>
                    <th scope="col" className="border p-3 font-medium" id="q2-revenue">Receita</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="border p-3 font-medium" id="north">Norte</th>
                    <td className="border p-3" headers="q1 q1-units north">150</td>
                    <td className="border p-3" headers="q1 q1-revenue north">R$ 15.000</td>
                    <td className="border p-3" headers="q2 q2-units north">180</td>
                    <td className="border p-3" headers="q2 q2-revenue north">R$ 18.000</td>
                  </tr>
                  <tr>
                    <th scope="row" className="border p-3 font-medium" id="south">Sul</th>
                    <td className="border p-3" headers="q1 q1-units south">200</td>
                    <td className="border p-3" headers="q1 q1-revenue south">R$ 20.000</td>
                    <td className="border p-3" headers="q2 q2-units south">220</td>
                    <td className="border p-3" headers="q2 q2-revenue south">R$ 22.000</td>
                  </tr>
                </tbody>
                <tfoot className="bg-muted/30">
                  <tr>
                    <th scope="row" className="border p-3 font-semibold">Total</th>
                    <td className="border p-3 font-semibold">350</td>
                    <td className="border p-3 font-semibold">R$ 35.000</td>
                    <td className="border p-3 font-semibold">400</td>
                    <td className="border p-3 font-semibold">R$ 40.000</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<td headers="q1 q1-units north">150</td>`}
            </code>
          </div>

          {/* Tabela Responsiva */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">4. Tabela Responsiva com data-label</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use data-label para criar tabelas responsivas que se adaptam a telas pequenas
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse responsive-table">
                <caption className="sr-only">Lista de Tarefas</caption>
                <thead>
                  <tr className="border-b bg-muted">
                    <th scope="col" className="text-left p-3 font-semibold">Tarefa</th>
                    <th scope="col" className="text-left p-3 font-semibold">Prioridade</th>
                    <th scope="col" className="text-left p-3 font-semibold">Prazo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3" data-label="Tarefa">Revisar código</td>
                    <td className="p-3" data-label="Prioridade">
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">Alta</span>
                    </td>
                    <td className="p-3" data-label="Prazo">15/01/2024</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3" data-label="Tarefa">Escrever testes</td>
                    <td className="p-3" data-label="Prioridade">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">Média</span>
                    </td>
                    <td className="p-3" data-label="Prazo">20/01/2024</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <code className="block text-xs bg-muted p-2 rounded mt-2">
              {`<td data-label="Tarefa">Revisar código</td>`}
            </code>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

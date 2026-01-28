import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { Trash2, AlertTriangle, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Exemplo de Acessibilidade em Modais e Diálogos
 *
 * Demonstra:
 * - Dialog com foco trap
 * - aria-labelledby e aria-describedby
 * - AlertDialog para ações destrutivas
 * - Fechamento com Escape
 * - Retorno de foco ao elemento que abriu
 */

// Alert Dialog Components
const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out",
      className
    )}
    {...props}
  />
)

const AlertDialogContent = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
)

const AlertDialogTitle = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>) => (
  <AlertDialogPrimitive.Title
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
)

const AlertDialogDescription = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>) => (
  <AlertDialogPrimitive.Description
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
)

const AlertDialogAction = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>) => (
  <AlertDialogPrimitive.Action
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground hover:bg-destructive/90",
      className
    )}
    {...props}
  />
)

const AlertDialogCancel = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>) => (
  <AlertDialogPrimitive.Cancel
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold hover:bg-accent",
      className
    )}
    {...props}
  />
)

export function ModalAccessibility() {
  const [appointmentTitle, setAppointmentTitle] = useState("")
  const [appointmentDate, setAppointmentDate] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const handleSaveAppointment = () => {
    if (appointmentTitle && appointmentDate) {
      setStatusMessage(`Compromisso "${appointmentTitle}" criado com sucesso!`)
      setDialogOpen(false)
      setAppointmentTitle("")
      setAppointmentDate("")
    }
  }

  return (
    <section aria-labelledby="modal-heading">
      <Card>
        <CardHeader>
          <CardTitle id="modal-heading">Acessibilidade em Modais</CardTitle>
          <CardDescription>
            Exemplos de diálogos e modais acessíveis com foco trap e ARIA
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Status Message */}
          {statusMessage && (
            <div
              role="status"
              aria-live="polite"
              className="p-4 bg-green-100 dark:bg-green-900 rounded-lg text-green-800 dark:text-green-100"
            >
              {statusMessage}
            </div>
          )}

          {/* Dialog Padrão */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Dialog para Criar Compromisso</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Modal com foco trap, aria-labelledby e aria-describedby
            </p>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
                  Novo Compromisso
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Criar Novo Compromisso</DialogTitle>
                  <DialogDescription>
                    Preencha os campos abaixo para adicionar um novo compromisso à sua agenda.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="appointment-title">
                      Título do compromisso
                      <span className="text-destructive ml-1" aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="appointment-title"
                      value={appointmentTitle}
                      onChange={(e) => setAppointmentTitle(e.target.value)}
                      placeholder="Ex: Reunião com cliente"
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appointment-date">
                      Data
                      <span className="text-destructive ml-1" aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="appointment-date"
                      type="date"
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      aria-required="true"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleSaveAppointment}>
                    Salvar Compromisso
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <div className="text-sm text-muted-foreground space-y-1 mt-4">
              <p><strong>Recursos de acessibilidade:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Foco é capturado dentro do modal (focus trap)</li>
                <li>Pressione <kbd className="px-1 bg-muted rounded">Escape</kbd> para fechar</li>
                <li>Foco retorna ao botão que abriu o modal</li>
                <li>aria-labelledby aponta para o título</li>
                <li>aria-describedby aponta para a descrição</li>
              </ul>
            </div>
          </div>

          {/* Alert Dialog para Ações Destrutivas */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Alert Dialog para Ações Destrutivas</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use AlertDialog para confirmação de ações irreversíveis
            </p>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="h-4 w-4 mr-2" aria-hidden="true" />
                  Excluir Compromisso
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangle className="h-6 w-6 text-destructive" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
                    <AlertDialogDescription>
                      Tem certeza que deseja excluir este compromisso? Esta ação não pode ser desfeita
                      e todos os dados relacionados serão permanentemente removidos.
                    </AlertDialogDescription>
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-4">
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction>Sim, Excluir</AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialog>

            <div className="text-sm text-muted-foreground space-y-1 mt-4">
              <p><strong>Diferenças do Alert Dialog:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Usa role="alertdialog" ao invés de role="dialog"</li>
                <li>Requer interação explícita (não fecha ao clicar fora)</li>
                <li>Ideal para ações destrutivas ou irreversíveis</li>
                <li>Foco inicial vai para o botão de cancelar (ação mais segura)</li>
              </ul>
            </div>
          </div>

          {/* Informações sobre Focus Management */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Gerenciamento de Foco</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Boas práticas para gerenciamento de foco em modais
            </p>

            <div className="bg-muted p-4 rounded-lg space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Ao abrir o modal:</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Foco move para o primeiro elemento focável</li>
                  <li>Ou para o próprio modal se não houver elementos focáveis</li>
                  <li>Para AlertDialog, foco vai para o botão mais seguro (Cancelar)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Durante a interação:</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Tab navega apenas entre elementos dentro do modal</li>
                  <li>Shift+Tab faz navegação reversa</li>
                  <li>Foco não escapa do modal (focus trap)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Ao fechar o modal:</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Foco retorna ao elemento que acionou o modal</li>
                  <li>Se o elemento não existir mais, vai para um fallback lógico</li>
                  <li>Anúncio para leitor de tela sobre estado alterado</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Código de Exemplo */}
          <details className="mt-6">
            <summary className="cursor-pointer font-medium">Ver código de exemplo</summary>
            <pre className="mt-2 p-4 bg-muted rounded-lg overflow-x-auto text-xs">
{`<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título do Modal</DialogTitle>
      <DialogDescription>
        Descrição do propósito do modal.
      </DialogDescription>
    </DialogHeader>
    {/* Conteúdo */}
    <DialogFooter>
      <Button>Ação Principal</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
            </pre>
          </details>
        </CardContent>
      </Card>
    </section>
  )
}

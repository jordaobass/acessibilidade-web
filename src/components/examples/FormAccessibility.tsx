import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle2 } from "lucide-react"

/**
 * Exemplo de Acessibilidade em Formulários
 *
 * Demonstra:
 * - Labels associados corretamente com htmlFor/id
 * - aria-describedby para instruções e erros
 * - aria-invalid para campos com erro
 * - aria-required para campos obrigatórios
 * - fieldset e legend para grupos de campos
 * - aria-live para feedback dinâmico
 * - autocomplete para preenchimento automático
 */
export function FormAccessibility() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    birthdate: "",
    country: "",
    gender: "",
    bio: "",
    newsletter: false,
    notifications: false,
    terms: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [announceMessage, setAnnounceMessage] = useState("")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Senha deve ter pelo menos 8 caracteres"
    }

    if (!formData.terms) {
      newErrors.terms = "Você deve aceitar os termos de uso"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setSubmitted(true)
      setAnnounceMessage("Formulário enviado com sucesso!")
    } else {
      const errorCount = Object.keys(errors).length
      setAnnounceMessage(`Formulário contém ${errorCount} erro(s). Por favor, corrija os campos destacados.`)
    }
  }

  return (
    <section aria-labelledby="form-heading">
      <Card>
        <CardHeader>
          <CardTitle id="form-heading">Acessibilidade em Formulários</CardTitle>
          <CardDescription>
            Exemplo completo de formulário acessível com validação e feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Região de anúncios para leitores de tela */}
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            {announceMessage}
          </div>

          {submitted ? (
            <div
              role="alert"
              className="flex items-center gap-2 p-4 bg-green-100 dark:bg-green-900 rounded-lg text-green-800 dark:text-green-100"
            >
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              <span>Formulário enviado com sucesso!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Dados Pessoais - Fieldset */}
              <fieldset className="space-y-4 border p-4 rounded-lg">
                <legend className="text-lg font-semibold px-2">Dados Pessoais</legend>

                {/* Nome - Campo obrigatório */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Nome completo
                    <span className="text-destructive ml-1" aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : "name-hint"}
                    autoComplete="name"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name ? (
                    <p id="name-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                      <AlertCircle className="h-4 w-4" aria-hidden="true" />
                      {errors.name}
                    </p>
                  ) : (
                    <p id="name-hint" className="text-sm text-muted-foreground">
                      Digite seu nome como aparece em documentos oficiais
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    E-mail
                    <span className="text-destructive ml-1" aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    autoComplete="email"
                    placeholder="exemplo@email.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                      <AlertCircle className="h-4 w-4" aria-hidden="true" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Telefone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    autoComplete="tel"
                    placeholder="(00) 00000-0000"
                    aria-describedby="phone-hint"
                  />
                  <p id="phone-hint" className="text-sm text-muted-foreground">
                    Formato: (00) 00000-0000
                  </p>
                </div>

                {/* Data de Nascimento */}
                <div className="space-y-2">
                  <Label htmlFor="birthdate">Data de Nascimento</Label>
                  <Input
                    id="birthdate"
                    type="date"
                    value={formData.birthdate}
                    onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                    autoComplete="bday"
                  />
                </div>
              </fieldset>

              {/* Segurança - Fieldset */}
              <fieldset className="space-y-4 border p-4 rounded-lg">
                <legend className="text-lg font-semibold px-2">Segurança</legend>

                {/* Senha */}
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    aria-invalid={!!errors.password}
                    aria-describedby="password-requirements password-error"
                    autoComplete="new-password"
                    className={errors.password ? "border-destructive" : ""}
                  />
                  <p id="password-requirements" className="text-sm text-muted-foreground">
                    A senha deve ter pelo menos 8 caracteres
                  </p>
                  {errors.password && (
                    <p id="password-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                      <AlertCircle className="h-4 w-4" aria-hidden="true" />
                      {errors.password}
                    </p>
                  )}
                </div>
              </fieldset>

              {/* Informações Adicionais - Fieldset */}
              <fieldset className="space-y-4 border p-4 rounded-lg">
                <legend className="text-lg font-semibold px-2">Informações Adicionais</legend>

                {/* País - Select */}
                <div className="space-y-2">
                  <Label htmlFor="country">País</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => setFormData({ ...formData, country: value })}
                  >
                    <SelectTrigger id="country" aria-label="Selecione seu país">
                      <SelectValue placeholder="Selecione um país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="br">Brasil</SelectItem>
                      <SelectItem value="us">Estados Unidos</SelectItem>
                      <SelectItem value="pt">Portugal</SelectItem>
                      <SelectItem value="ar">Argentina</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Gênero - Radio Group */}
                <div className="space-y-3">
                  <Label id="gender-label">Gênero</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => setFormData({ ...formData, gender: value })}
                    aria-labelledby="gender-label"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="font-normal">Masculino</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="font-normal">Feminino</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="font-normal">Outro</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prefer-not" id="prefer-not" />
                      <Label htmlFor="prefer-not" className="font-normal">Prefiro não informar</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Bio - Textarea */}
                <div className="space-y-2">
                  <Label htmlFor="bio">Biografia</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    placeholder="Conte um pouco sobre você..."
                    aria-describedby="bio-hint"
                    rows={4}
                  />
                  <p id="bio-hint" className="text-sm text-muted-foreground">
                    Máximo de 500 caracteres. Atual: {formData.bio.length}/500
                  </p>
                </div>
              </fieldset>

              {/* Preferências - Fieldset */}
              <fieldset className="space-y-4 border p-4 rounded-lg">
                <legend className="text-lg font-semibold px-2">Preferências</legend>

                {/* Newsletter - Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, newsletter: checked as boolean })
                    }
                  />
                  <Label htmlFor="newsletter" className="font-normal">
                    Desejo receber a newsletter mensal
                  </Label>
                </div>

                {/* Notificações - Switch */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Notificações push</Label>
                    <p className="text-sm text-muted-foreground">
                      Receba alertas sobre novidades
                    </p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={formData.notifications}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, notifications: checked })
                    }
                    aria-describedby="notifications-desc"
                  />
                </div>
              </fieldset>

              {/* Termos - Obrigatório */}
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, terms: checked as boolean })
                    }
                    aria-required="true"
                    aria-invalid={!!errors.terms}
                    aria-describedby={errors.terms ? "terms-error" : undefined}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="font-normal">
                      Li e aceito os{" "}
                      <a href="#terms" className="underline text-primary">
                        termos de uso
                      </a>{" "}
                      e a{" "}
                      <a href="#privacy" className="underline text-primary">
                        política de privacidade
                      </a>
                      <span className="text-destructive ml-1" aria-hidden="true">*</span>
                    </Label>
                    {errors.terms && (
                      <p id="terms-error" className="text-sm text-destructive" role="alert">
                        {errors.terms}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="flex gap-4">
                <Button type="submit">
                  Enviar Cadastro
                </Button>
                <Button type="reset" variant="outline">
                  Limpar Formulário
                </Button>
              </div>
            </form>
          )}

          {/* Código de exemplo */}
          <details className="mt-6">
            <summary className="cursor-pointer font-medium">Ver código de exemplo</summary>
            <pre className="mt-2 p-4 bg-muted rounded-lg overflow-x-auto text-xs">
{`<Label htmlFor="email">E-mail</Label>
<Input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={!!errors.email}
  aria-describedby="email-error"
  autoComplete="email"
/>
{errors.email && (
  <p id="email-error" role="alert">
    {errors.email}
  </p>
)}`}
            </pre>
          </details>
        </CardContent>
      </Card>
    </section>
  )
}

import * as React from "react"
import { Controller } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = ({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) => {
  return <form {...props}>{children}</form>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- thin pass-through to react-hook-form's Controller
const FormField = ({ name, control, render }: any) => {
  return (
    <Controller
      name={name}
      control={control}
      render={render}
    />
  )
}

type FormItemContextValue = { id: string; invalid: boolean }

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

function useFormItem() {
  const ctx = React.useContext(FormItemContext)
  if (!ctx) throw new Error("Form components must be used inside <FormItem>")
  return {
    ...ctx,
    controlId: `${ctx.id}-control`,
    messageId: `${ctx.id}-message`,
  }
}

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { invalid?: boolean }
>(({ className, invalid = false, ...props }, ref) => {
  const id = React.useId()
  return (
    <FormItemContext.Provider value={{ id, invalid }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  const { controlId } = useFormItem()
  return <Label ref={ref} htmlFor={controlId} className={cn(className)} {...props} />
})
FormLabel.displayName = "FormLabel"

// Passes id, aria-invalid and aria-describedby to its single child control.
const FormControl = ({ children }: { children: React.ReactElement<Record<string, unknown>> }) => {
  const { controlId, messageId, invalid } = useFormItem()
  return React.cloneElement(children, {
    id: controlId,
    "aria-invalid": invalid || undefined,
    "aria-describedby": invalid ? messageId : undefined,
  })
}
FormControl.displayName = "FormControl"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { messageId } = useFormItem()
  if (!children) return null

  return (
    <p
      ref={ref}
      id={messageId}
      role="alert"
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {children}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
}

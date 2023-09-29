import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "./ui/textarea"
import { ContextMenu, ContextMenuTrigger } from "./ui/context-menu"
 
export function CreateNewPost() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed ml-10 bottom-10" variant="outline">Criar postagem</Button>
      </SheetTrigger>
      <SheetContent className="w-[100%]">
        <SheetHeader>
          <SheetTitle>Criar Nova Postagem</SheetTitle>
          <SheetDescription>
            Crie aqui sua nova postagem
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid  items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Descrição
            </Label><br />
            <Textarea id="name" placeholder="Escreva sua postagem aqui!" className="col-span-3 h-44 w-[100%] resize-y" />
          </div>
          <div className=" gap-6">
            <Label htmlFor="username" className="text-right inline-block">
              Foto
            </Label>
            <br />
            <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] cursor-pointer w-[320px] lg:w-[100%] mt-4 items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>

    </ContextMenu>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="mr-4" type="submit">Enviar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
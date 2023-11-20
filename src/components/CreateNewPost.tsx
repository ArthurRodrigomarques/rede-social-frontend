import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "./ui/textarea";
import { ContextMenu, ContextMenuTrigger } from "./ui/context-menu";
import { api } from "@/services/api";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "./ui/input";

export function CreateNewPost() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="fixed ml-10 bottom-10" variant="outline">
          Criar postagem
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[100%]">
        <SheetHeader>
          <SheetTitle>Criar Nova Postagem</SheetTitle>
          <SheetDescription>Crie aqui sua nova postagem</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Descrição
            </Label>
            <br />
            <Textarea
              id="description"
              value={description}
              // onChange={handleDescriptionChange}
              placeholder="Escreva sua postagem aqui!"
              className="col-span-3 h-44 w-[100%] resize-y"
            />
          </div>

          <div className="gap-6">
            <Label htmlFor="image" className="text-left inline-block">
              Foto
            </Label>
            <div className="grid w-full max-w-sm items-center gap-1.5 cursor-pointer">
            <Input className="text-black bg-white cursor-pointer" id="image" type="file" />
            </div>
            <br />
            <ContextMenu>
              <ContextMenuTrigger
                className="flex h-[150px] cursor-pointer w-[320px] lg:w-[100%] mt-4 items-center justify-center rounded-md border border-dashed text-sm">
              </ContextMenuTrigger>
            </ContextMenu>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="mr-4">
              Enviar
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

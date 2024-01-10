import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";

export default function Conversation() {
    return (
            <div className="w-[39%] ml-4 fixed h-[90vh] border-solid border-2 border-secondary rounded-3xl ">
                <div className="w-[90%] ml-3 mt-4  bg-secondary rounded-t-3xl ">
                <section className="flex ml-20 pt-4 pb-4 pr-40">
                    <div className="ml-10 w-[80%]">
                        <h3 className="mt-2">Arthur Marques </h3>
                    </div>
                    <Avatar className="">
                        <AvatarImage 
                        src="https://github.com/ArthurRodrigomarques.png"
                        className=""
                        />
                        <AvatarFallback>FT</AvatarFallback>
                    </Avatar>
                    
                </section>
            
                    <div className="flex fixed bottom-10 w-[40%] ">
                    <Textarea 
                    placeholder="Escreva sua mensagem" 
                    className="ml-3 w-[70%] rounded-l-xl resize-none"
                    />
                    <Button className="h-14 mt-[2px] ml-1 rounded-r-xl hover:cursor-pointer">Enviar</Button>
                    </div>
               </div>
            </div>
    )
}

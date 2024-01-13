import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";

export default function Conversation() {
    return (
            <div className="w-[94%]  md:w-[60%] lg:w-[39%] ml-4 fixed h-full md:h-[90vh] border-solid border-2 border-secondary rounded-3xl ">
                <div className="w-[94%] md:w-[90%] ml-3 mt-1 md:mt-4  bg-secondary rounded-t-3xl ">
                    <section className="flex justify-between w-[100%] ml-5 lg:ml-20 pt-4 pb-4 pr-40">
                        <div className="block md:hidden">
                            <ArrowLeft/>       
                        </div>
                        <div>
                            <h3 className="md:mt-2">Arthur Marques </h3>
                        </div>
                        <div >
                        <Avatar>
                            <AvatarImage 
                            src="https://github.com/ArthurRodrigomarques.png"
                            />
                            <AvatarFallback>FT</AvatarFallback>
                        </Avatar>
                        </div>
                    </section>
            
                    <div className="flex fixed bottom-5 md:bottom-10 w-[83%] md:w-[60%] lg:w-[40%] ">
                    <Textarea 
                    placeholder="Escreva sua mensagem" 
                    className="ml-3  md:w-[70%] rounded-l-xl resize-none"
                    />
                    <Button className="h-14 mt-[2px] ml-1 rounded-r-xl hover:cursor-pointer">Enviar</Button>
                    </div>
               </div>
            </div>
    )
}

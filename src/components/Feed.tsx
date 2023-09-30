import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import imagem2 from "../../public/images/IMAGEM2.png"
import { Heart, MessageCircle } from "lucide-react";

export default function Feed() {
    return (
        <div className="w-[100%] h-auto mt-20 block">
            <div className="w-[60%] ml-[20%] mr-[20%] flex flex-col text-center justify-center">
                <div className="flex flex-row">
                    <Avatar>
                    <AvatarImage className="w-10" src="https://github.com/ArthurRodrigomarques.png" alt="@shadcn" />
                    <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-2 ml-4">Name: tutu</h3>
                </div>
                <div className="text-left mt-3 ml-14 text-sm">
    <p className="">Conteudo do texto: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis pariatur totam veritatis dignissimos molestiae distinctio maxime ratione, laudantium ad sit quod voluptatum architecto dolore deleniti dolorem magni. Facere, pariatur?</p>

                <Image className="mt-5" src={imagem2} alt="Descrição da imagem" width={450} height={300} />
                </div>

                <div className="mt-5 ml-14 flex flex-row gap-10">
                    <MessageCircle className="cursor-pointer"/>
                    <Heart className="cursor-pointer"/>
                </div>
            </div>
            
        </div>
    )
}
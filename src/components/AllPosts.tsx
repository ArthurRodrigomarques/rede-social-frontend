"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Heart, MessageCircle } from 'lucide-react';

interface MyData {
    id:          string
    title:       string
    description: string
    image:       string
}

export default function AllPosts() {
  const [data, setData] = useState<MyData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<MyData[]>('http://localhost:4000/post');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);


  return (
    <div className='w-[100%] h-auto mt-20 block '>
      {data.length > 0 ? (
        <ul className="text-left mt-3 text-sm w-[60%] ml-[20%] mr-[20%] flex flex-col justify-center border-gray-800 ">
          {data.map((item) => (
            <div className=' ml-6 border  w-[100%]'>
              <div className="flex flex-row mb-2 mt-3 ml-4">
                  <Avatar>
                  <AvatarImage className="w-10" src="https://github.com/ArthurRodrigomarques.png" alt="@shadcn" />
                  <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                <h3 className="mt-2 ml-4">Name: tutu</h3>
              </div>
            <div className='ml-12'>
              <li  key={item.id}>{item.title}</li>
              <li className='w-[80%]'>{item.description}</li>
            <img className='mt-5 w-[450px] h-[300px] rounded-3xl' src={item.image} alt={item.description} />
            </div>
              <div className="mt-1 ml-36 flex flex-row  justify-center gap-16">
                      <MessageCircle className="cursor-pointer w-5 text-gray-600"/>
                      <Heart className="cursor-pointer w-5 text-gray-600"/>
              </div>
            </div>
            
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

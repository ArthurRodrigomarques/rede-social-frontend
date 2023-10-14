"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <div>
            <li key={item.id}>{item.title}</li>
            <li>{item.description}</li>
            </div>
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

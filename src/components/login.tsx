"use client"

import { AuthContext } from "@/services/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext} from "react"
import { useForm } from "react-hook-form";


export default function Login() {
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const { isAuthenticated, user, signIn  } = useContext(AuthContext)


      async function handleSignIn (data: any) {
        try {
          await signIn(data)
        } catch (error) {
          console.log("Usuário não encontrado",error)
        }
        
      }

    return (
      <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form 
            onSubmit={handleSubmit(handleSignIn)}
            className="space-y-6" 
            >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-primary">
                Email address
              </label>
              <div className="mt-2">
                <input
                {...register('email')}
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="email"
                  required
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-primary">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-primary hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                {...register('password')}
                  type="password"
                  placeholder="Senha"
                  autoComplete="current-password"
                  required
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Crie sua conta{' '}
            <Link href="/createaccount" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Clique aqui 
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
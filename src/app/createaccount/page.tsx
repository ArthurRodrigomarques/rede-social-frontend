"use client"

import { Button } from "@/components/ui/button"
import { Card, 
         CardContent, 
         CardDescription, 
         CardFooter, 
         CardHeader, 
         CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useForm } from "react-hook-form"

export default function CreateAccount() {
    const { register, handleSubmit } = useForm()

    function handleSignIn(data: any): void {
      console.log(data);
    }
    

    return (
        <div className="flex justify-center items-center h-screen w-screen">
        <Card className="mb-28">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Crie sua Conta</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              Github
            </Button>
            <Button variant="outline">
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} >
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
                {...register('email')}
                id="email" 
                type="email" 
                autoComplete="email"
                required
                placeholder="m@example.com" 
                />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
                {...register('password')}
                id="password" 
                type="password"
                autoComplete="password"
                required 
                placeholder="Password"
                />
          </div>
          
        <CardFooter className="mt-5">
          <Button className="w-full">Create account</Button>
        </CardFooter>
        </form>
        </CardContent>
      </Card>
      </div>
    )
}
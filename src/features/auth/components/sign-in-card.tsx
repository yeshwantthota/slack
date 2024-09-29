import { useAuthActions } from "@convex-dev/auth/react";
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa"

import { signInFlow } from "../types"
import { useState } from "react"

interface SignInCardProps {
    setState: (state: signInFlow) => void
}

export const SignInCard = ({setState}: SignInCardProps) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pending, setPending] = useState(false)

    const {signIn} = useAuthActions()

    const onProviderSignIn = (value: "github" | "google") => {
        setPending(true)
        signIn(value)
          .finally(() => setPending(false))
    }
    return (

        <Card className="h-full w-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                   Login to continue
                </CardTitle>
                <CardDescription>Use your email or another service to continue</CardDescription>
                </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                   <Input
                    disabled={pending}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    required
                   />
                   <Input
                    disabled={pending}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    type="password"
                    required
                   />
                   <Button type="submit" className="w-full" size="lg" disabled={pending}>
                    Continue
                    </Button>
                </form>
                <Separator/>
                <div className="flex flex-col gap-y-2.5">
                    <Button
                    disabled={pending}
                    onClick={() => void onProviderSignIn("google")}
                    variant="outline"
                    size="lg"
                    className="w-full relative" 
                    >
                        <FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
                        Continue with Google</Button>
                    <Button
                    disabled={pending}
                    onClick={() => void onProviderSignIn("github")}
                    variant="outline"
                    size="lg"
                    className="w-full relative" 
                    >
                        <FaGithub className="size-5 absolute top-2.5 left-2.5"/>
                        Continue with Github</Button>
                </div>
                <p className="text-xs text-muted-foreground">Don't have an account? <span className="text-sky-700 hover:underline cursor-pointer" onClick={() => setState("signUp")}>Sign Up</span>
                     </p> 

            </CardContent>
        </Card>
    )
}
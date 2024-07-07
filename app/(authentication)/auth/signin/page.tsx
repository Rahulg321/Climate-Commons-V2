/**
 * v0 by Vercel.
 * @see https://v0.dev/t/09Q4jqaNEJj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";
import { FaGithub, FaGoogle } from "react-icons/fa";
import SignInForm from "@/components/forms/SignInForm";
import {
  SetDarkThemeMoon,
  SetLightThemeSun,
  ThemeModeToggle,
} from "@/components/ThemeModeToggle";

export default function Component() {
  return (
    <div className="grid w-full min-h-screen lg:grid-cols-2">
      <div className="hidden lg:block relative">
        <Image
          src="https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login Illustration"
          fill
          className="h-full w-full object-cover border"
        />
      </div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[400px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground">
              Enter your email and password to sign in.
            </p>
          </div>
          <div className="">
            <SignInForm />
          </div>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Dont have an Account?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-primary hover:underline"
              prefetch={false}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <ThemeModeToggle />
      </div>
    </div>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4A1sRezBDXZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";
import {
  SetDarkThemeMoon,
  SetLightThemeSun,
  ThemeModeToggle,
} from "@/components/ThemeModeToggle";

export default function RegisterPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className="flex items-center relative justify-center bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
      <div className="flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
              Create an Account
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="font-medium text-primary hover:underline"
                prefetch={false}
              >
                Sign in
              </Link>
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <ThemeModeToggle />
      </div>
    </div>
  );
}

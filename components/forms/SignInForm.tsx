"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  RegisterFormSchema,
  RegisterFormZodType,
} from "@/lib/schemas/RegisterFormSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  LoginFormSchema,
  loginFormZodType,
} from "@/lib/schemas/LoginFormSchema";

const SignInForm = () => {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormZodType),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="user@example.com" {...field} type="email" />
              </FormControl>
              <FormDescription>Enter your regsitered email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="gupta....." {...field} type="password" />
              </FormControl>
              <FormDescription>Enter a valid password.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;

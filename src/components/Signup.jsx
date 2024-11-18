import React from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Logo, Input } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Signup() {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    try {
      const userData = await authService.createAccount();
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`lg:w-1/4 md:w-1/3 sm:w-1/2 bg-purple-300 rounded-xl p-10 border-3 border-purple-500`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl mb-10 font-bold leading-tight">
          Sign up to create account
        </h2>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="FullName:"
              placeholder="enter your fullname"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email:"
              type="email"
              placeholder="enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password:"
              type="password"
              placeholder="enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full ml-2">
              Create Account
            </Button>
          </div>
        </form>
        <p className="mt-7 text-center text-sm text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

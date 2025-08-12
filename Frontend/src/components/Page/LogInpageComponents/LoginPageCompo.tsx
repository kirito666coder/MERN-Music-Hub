// src/components/LoginPageCompo.jsx
import React from "react";
import GoogleLoginButton from "./GoogleLoginButton";
import './styles/loginAnimatiioins.css'

const LoginPageCompo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#b91c1c] to-[#1e3a8a] px-4 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-[20vh] -left-[20vw] w-[70vw] max-w-[900px] h-[70vw] bg-[#b91c1c]/25 rounded-full pulse" />
      <div className="absolute -bottom-[18vh] -right-[18vw] w-[60vw] max-w-[800px] h-[60vw] bg-[#1e3a8a]/25 rounded-full pulse delay" />

      {/* Spinning Rings */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[80vw] max-w-[1200px] h-[80vw] border border-white/10 rounded-full spin-slow" />
        <div className="absolute w-[60vw] max-w-[900px] h-[60vw] border border-white/10 rounded-full spin-slow-reverse" />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl text-center fadeIn relative z-10">
        {/* Logo / Title */}
        <div className="mb-6">
          <div className="flex justify-center items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-14 h-14 drop-shadow-lg bounce-slow">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#b91c1c" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="30" fill="url(#grad1)" />
              <path d="M26 20 L44 32 L26 44 Z" fill="white" opacity="0.95" />
            </svg>

            <h1 className="text-4xl font-extrabold text-white tracking-wide text-glow">SongPlay</h1>
          </div>
          <p className="text-gray-300 mt-2 text-sm">Feel the rhythm. Sign in to start your journey.</p>
        </div>

        {/* Google Login button (your existing file) */}
        <GoogleLoginButton />

        <div className="mt-6 text-xs text-gray-400 leading-relaxed">
          By logging in, you agree to our{" "}
          <a href="#" className="underline hover:text-white transition">Terms</a> and{" "}
          <a href="#" className="underline hover:text-white transition">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
};

export default LoginPageCompo;

import GoogleLoginButton from "./GoogleLoginButton";

const LoginPageCompo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 px-4 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl text-center animate-fadeIn">
        {/* Logo / Title */}
        <div className="mb-6">
          <div className="flex justify-center items-center gap-3">
            {/* Custom Play + Music Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-12 h-12 drop-shadow-lg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="30" fill="url(#grad1)" />
              <path
                d="M26 20 L44 32 L26 44 Z"
                fill="white"
                opacity="0.9"
              />
            </svg>

            <h1 className="text-4xl font-extrabold text-white tracking-wide">
              SongPlay
            </h1>
          </div>
          <p className="text-gray-300 mt-2 text-sm">
            Feel the rhythm. Sign in to start your journey.
          </p>
        </div>

        {/* Google Login */}
        <GoogleLoginButton />

        {/* Terms */}
        <div className="mt-6 text-xs text-gray-400 leading-relaxed">
          By logging in, you agree to our{" "}
          <a href="#" className="underline hover:text-white transition">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-white transition">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default LoginPageCompo;

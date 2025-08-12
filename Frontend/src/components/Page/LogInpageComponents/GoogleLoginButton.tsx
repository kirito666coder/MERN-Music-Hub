const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`
  }

  return (
    <button
      onClick={handleLogin}
      className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-200"
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google Logo"
        className="w-5 h-5"
      />
      Login with Google
    </button>
  )
}

export default GoogleLoginButton


const GoogleLoginButton = () => {
    const handleLogin = ()=>{
        window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`
    }
  return (
    <button onClick={handleLogin}>
     Login with Google
    </button>
  )
}

export default GoogleLoginButton

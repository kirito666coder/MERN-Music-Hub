import "./styles/loginAnimatiioins.css";

const GoogleLoginButton = () => {
  const handleLogin = ()=>{
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`
}
  return (
    <button className="google-login-btn" onClick={handleLogin}>
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google logo"
        className="google-icon"
      />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLoginButton;

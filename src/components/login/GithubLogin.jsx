const GithubLogin = () => {
  const handleLogin = ()=>{
    window.location.href = `http://localhost:8080/oauth2/authorization/github`;
  }

  return (
    <div>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
};

export default GithubLogin;

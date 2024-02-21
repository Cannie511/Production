const LoginPage = ({currentpage}) => {
    
  return (
    <>
      <button onClick={()=>currentpage('home')}>Log in</button>
    </>
  );
};
export default LoginPage;

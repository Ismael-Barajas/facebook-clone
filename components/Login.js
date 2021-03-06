import Image from "next/image";
import { signIn } from "next-auth/client";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/5me"
        height={300}
        width={300}
        objectFit="contain"
        alt="Login"
      />
      <h1
        onClick={() => signIn()}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;

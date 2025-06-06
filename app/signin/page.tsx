import {LoginGoogleButton} from "@/components/login-button"
import {Metadata}from 'next';

export const metadata: Metadata = {
    title: "Sign In",
};

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center">
    <div className=' bg-white w-96 mx-auto rounded-sm shadow p-8'>
        <p className='display flex content-center items-center font-medium mb-9 text-gray-500'>Sign In your account</p>
        <div className='py-4 text-center'>
            <LoginGoogleButton/>
        </div>
    </div>
    </div>
  )
}

export default SignInPage

import {FaG} from 'react-icons/fa6';
import {signIn} from '@/auth';

export const LoginGoogleButton = () => {
  return (
    <form action={async () => {
        "use server"
        await signIn("google");
    }}
    >
      <button className='flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-medium py-3 text-base rounded-sm hover:bg-blue-700
    cursor-pointer'>
        <FaG className='size-6'/>
        Sign In with google
    </button>
    </form>
  );
};

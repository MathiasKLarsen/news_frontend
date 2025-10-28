'use server';

import { Logout } from '@/data/PostLogin';

const LogOutButton = () => {
  return (
    <form action={Logout}>
      <button
        type="submit"
        className="text-white hover:bg-red-600 p-2 rounded-md w-full text-left cursor-pointer"
      >
        Logout
      </button>
    </form>
  );
};

export default LogOutButton;
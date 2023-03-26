import { UserIcon } from "@heroicons/react/24/outline";
import { Fragment, type FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

const AuthState: FC = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
        <span className="sr-only">Account</span>
        <UserIcon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 -translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 -translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <Popover.Panel className="absolute right-0 z-10 flex w-64 flex-col space-y-3 rounded-3xl bg-white p-5 drop-shadow-xl">
          <Link
            href="/auth/signin"
            className="w-full rounded-2xl bg-red-600 py-3 px-8 text-center text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-red-700"
          >
            Sign in
          </Link>
          <Link
            href="/auth/register"
            className="w-full rounded-2xl bg-red-600 py-3 px-8 text-center text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-red-700"
          >
            Register
          </Link>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default AuthState;

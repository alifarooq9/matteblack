import { UserIcon } from "@heroicons/react/24/outline";
import { Fragment, type FC } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import classNames from "classnames";
import { useSession } from "next-auth/react";

const AuthState: FC = () => {
  //current auth
  const { status } = useSession();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
        <span className="sr-only">Account</span>
        <UserIcon className="h-6 w-6" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 -translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 -translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        {status === "authenticated" ? (
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-5 py-3">
              <p className="text-sm text-gray-500">Signed in as</p>
              <p className="truncate text-sm font-medium text-gray-900">
                tom@example.com
              </p>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-5 py-2 text-sm"
                    )}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-5 py-2 text-sm"
                    )}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-5 py-2 text-sm"
                    )}
                  >
                    License
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? "bg-red-100 text-red-600" : "text-red-600",
                        "block w-full px-5 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        ) : (
          <Menu.Items className="absolute right-0 z-10 flex w-56 flex-col space-y-3 rounded-3xl border bg-white p-4 drop-shadow-xl">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/auth/signin"
                  className={classNames(
                    active
                      ? "bg-red-700 hover:bg-red-700"
                      : "bg-red-600 hover:bg-red-700",
                    "w-full rounded-2xl py-3 px-8 text-center text-sm font-medium text-white transition-all duration-300 ease-in-out"
                  )}
                >
                  Sign in
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/auth/register"
                  className={classNames(
                    active
                      ? "bg-red-700 hover:bg-red-700"
                      : "bg-red-600 hover:bg-red-700",
                    "w-full rounded-2xl py-3 px-8 text-center text-sm font-medium text-white transition-all duration-300 ease-in-out"
                  )}
                >
                  Register
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
};

export default AuthState;

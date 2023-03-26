import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { navigation } from "../header";

const accountPages = [
  { name: "Profile", href: "/account/profile" },
  { name: "Create Account", href: "/account/create" },
  { name: "Sign in", href: "/account/signin" },
];

const Footer: FC = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center divide-x divide-gray-200"
            >
              <div className="relative mr-2 h-8 w-8">
                <Image src="logo.svg" fill alt="" />
              </div>
              <span className="pl-2 text-xl font-bold">Matteblack</span>
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {navigation.categories[0]?.name}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.categories[0]?.sections[1]?.[0]?.items.map(
                    (item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {navigation.categories[1]?.name}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.categories[1]?.sections[1]?.[0]?.items.map(
                    (item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Pages
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.pages.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Account
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {accountPages.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { type FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { atom, useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    href: "#",
    color: "White and black",
    price: "$140.00",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
  },
  {
    id: 2,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  // More products...
];

//global cart state
export const cartOpenState = atom(false);

const Cart: FC = () => {
  //cart open state
  const [open, setOpen] = useAtom(cartOpenState);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center sm:items-center sm:px-6 lg:px-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-105"
            >
              <Dialog.Panel className="flex w-full max-w-3xl transform text-left text-base transition sm:my-8">
                <div className="relative flex w-full flex-col overflow-hidden bg-white pt-6 pb-8 sm:rounded-3xl sm:pb-6 lg:py-8">
                  <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <h2 className="text-lg font-medium text-gray-900">
                      Shopping Cart
                    </h2>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-500"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <section aria-labelledby="cart-heading">
                    <h2 id="cart-heading" className="sr-only">
                      Items in your shopping cart
                    </h2>

                    <ul
                      role="list"
                      className="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8"
                    >
                      {products.map((product, productIdx) => (
                        <li
                          key={product.id}
                          className="flex py-8 text-sm sm:items-center"
                        >
                          <div className="relative h-24 w-24 flex-none overflow-hidden rounded-3xl border border-gray-200 sm:h-32 sm:w-32">
                            <Image
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="object-cover"
                              fill
                            />
                          </div>
                          <div className="ml-4 grid flex-auto grid-cols-1 grid-rows-1 items-start gap-y-3 gap-x-5 sm:ml-6 sm:flex sm:items-center sm:gap-0">
                            <div className="row-end-1 flex-auto sm:pr-6">
                              <h3 className="font-medium text-gray-900">
                                <a href={product.href}>{product.name}</a>
                              </h3>
                              <p className="mt-1 text-gray-500">
                                {product.color}
                              </p>
                            </div>
                            <p className="row-span-2 row-end-2 font-medium text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right">
                              {product.price}
                            </p>
                            <div className="flex items-center sm:block sm:flex-none sm:text-center">
                              <label
                                htmlFor={`quantity-${productIdx}`}
                                className="sr-only"
                              >
                                Quantity, {product.name}
                              </label>
                              <select
                                id={`quantity-${productIdx}`}
                                name={`quantity-${productIdx}`}
                                className="block max-w-full rounded-xl border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
                              >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                              </select>

                              <button
                                type="button"
                                className="ml-4 font-medium text-red-600 hover:text-red-500 sm:ml-0 sm:mt-2"
                              >
                                <span>Remove</span>
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section
                    aria-labelledby="summary-heading"
                    className="mt-auto sm:px-6 lg:px-8"
                  >
                    <div className="bg-gray-100 p-6 sm:rounded-3xl sm:p-8">
                      <h2 id="summary-heading" className="sr-only">
                        Order summary
                      </h2>

                      <div className="flow-root">
                        <dl className="-my-4 divide-y divide-gray-200 text-sm">
                          <div className="flex items-center justify-between py-4">
                            <dt className="text-gray-600">Subtotal</dt>
                            <dd className="font-medium text-gray-900">
                              $262.00
                            </dd>
                          </div>
                          <div className="flex items-center justify-between py-4">
                            <dt className="text-gray-600">Shipping</dt>
                            <dd className="font-medium text-gray-900">$5.00</dd>
                          </div>
                          <div className="flex items-center justify-between py-4">
                            <dt className="text-gray-600">Tax</dt>
                            <dd className="font-medium text-gray-900">
                              $53.40
                            </dd>
                          </div>
                          <div className="flex items-center justify-between py-4">
                            <dt className="text-base font-medium text-gray-900">
                              Order total
                            </dt>
                            <dd className="text-base font-medium text-gray-900">
                              $320.40
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </section>

                  <div className="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
                    <Link
                      href="/checkout"
                      className="rounded-2xl border border-transparent bg-red-600 py-3 px-4 text-sm font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Continue to Checkout
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;

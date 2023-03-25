import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import CategoryScection from "~/components/landing/category";
import Layout from "~/components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <main>
          <section className="relative min-h-screen overflow-hidden bg-white py-10">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
              <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg sm:pt-10">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                    Summer styles are finally here
                  </h1>
                  <p className="mt-4 text-lg text-gray-500">
                    This year, our new summer collection will shelter you from
                    the harsh elements of a world that doesn&apos;t care if you
                    live or die.
                  </p>
                </div>
                <div>
                  <div className="mt-10">
                    {/* Decorative image grid */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    >
                      <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="relative h-64 w-44 overflow-hidden rounded-3xl sm:opacity-0 lg:opacity-100">
                              <Image
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                alt=""
                                fill
                                className="object-cover object-center"
                              />
                            </div>
                            <div className="relative h-64 w-44 overflow-hidden rounded-3xl">
                              <Image
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                alt=""
                                fill
                                className="object-cover object-center"
                              />
                            </div>
                          </div>
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="relative h-64 w-44 overflow-hidden rounded-3xl">
                              <Image
                                fill
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="relative h-64 w-44 overflow-hidden rounded-3xl">
                              <Image
                                fill
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="relative h-64 w-44 overflow-hidden rounded-3xl">
                              <Image
                                fill
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                          </div>
                          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="relative h-64 w-44 overflow-hidden rounded-3xl">
                              <Image
                                fill
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="relative h-64 w-44 overflow-hidden rounded-3xl">
                              <Image
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                alt=""
                                fill
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/store"
                      className="inline-block rounded-2xl border border-transparent bg-red-600 py-3.5 px-8 text-center font-medium text-white transition-all duration-300 ease-in-out hover:bg-red-700"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <CategoryScection />
        </main>
      </Layout>
    </>
  );
};

export default Home;

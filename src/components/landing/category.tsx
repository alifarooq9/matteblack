import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

const CategoryScection: FC = () => {
  return (
    <section aria-labelledby="category-heading" className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="category-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-red-600 hover:text-red-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 relative overflow-hidden rounded-3xl sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center transition-all duration-300 ease-in-out group-hover:opacity-75"
              fill
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <Link href="store">
                    <span className="absolute inset-0" />
                    New Arrivals
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 relative overflow-hidden rounded-3xl sm:aspect-none sm:relative sm:h-full">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              fill
              className="object-cover object-center transition-all duration-300 ease-in-out group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <Link href="/store">
                    <span className="absolute inset-0" />
                    Accessories
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 relative overflow-hidden rounded-3xl sm:aspect-none sm:relative sm:h-full">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              fill
              className="object-cover object-center transition-all duration-300 ease-in-out group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <Link href="/store">
                    <span className="absolute inset-0" />
                    Workspace
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/store"
            className="block text-sm font-semibold text-red-600 hover:text-red-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryScection;

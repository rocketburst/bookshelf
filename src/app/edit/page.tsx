import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Edit() {
  async function createBook(data: FormData) {
    "use server";

    await prisma.user.create({
      data: {
        name: data.get("name") as string,
        genre: data.get("genre") as string,
        description: data.get("description") as string,
      },
    });
  }

  return (
    <main className="text-gray-600 body-font">
      <div className="container px-5 py-24 flex">
        <div className="bg-white rounded-lg p-8 flex flex-col max-w-auto mx-auto mt-10 md:mt-0 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            New Book
          </h2>

          <p className="leading-relaxed mb-5 text-gray-600">
            Add some stuff about the book below :)
          </p>

          <form action={createBook}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>

              <input
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="genre"
                className="leading-7 text-sm text-gray-600"
              >
                Genre
              </label>

              <input
                id="genre"
                name="genre"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="description"
                className="leading-7 text-sm text-gray-600"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Create
            </button>
          </form>

          <button className="text-indigo-500 bg-white border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg mt-4 w-[6.5rem]">
            <Link href="/">Back</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

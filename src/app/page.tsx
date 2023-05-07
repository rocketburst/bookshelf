import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const books = await prisma.book.findMany();

  return (
    <main className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {books.map((book) => (
          <div
            className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
            key={book.id}
          >
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                {book.name} ·{" "}
                <span className="text-green-600 ">{book.genre}</span>
              </h2>
              <p className="leading-relaxed text-base">{book.description}</p>
            </div>
          </div>
        ))}

        <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          <Link href="/edit">Create new book</Link>
        </button>
      </div>
    </main>
  );
}

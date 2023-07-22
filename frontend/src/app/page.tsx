/* eslint-disable @next/next/no-img-element */
'use client';

import { useGetBooksQuery } from '@/redux/services/bookApi';

export default function Home() {
    const { data, isError, isLoading, isSuccess } = useGetBooksQuery(3);

    return (
        <main className="flex min-h-screen w-full  items-center justify-between relative flex-wrap bg-gray-300">
            <img
                src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full object-cover absolute"
            />
            <div className="w-full h-full flex flex-wrap justify-center z-10">
                {data?.books.map((book) => (
                    <div
                        key={book._id}
                        className="w-[250px] h-[450px] flex-shrink-0 bg-white  m-4 rounded-xl shadow-xl"
                    >
                        <div className="w-full h-full p-4  flex flex-col items-center">
                            <img
                                src={book.image}
                                alt=""
                                className="w-[200px] h-[300px] object-cover hover:scale-105 rounded-lg hover-smooth cursor-pointer hover:opacity-80"
                            />
                            <p className="mt-4">{book.name}</p>
                            <p>Tác giả: {book.authorId.name}</p>
                            <p>{book.price}đ</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

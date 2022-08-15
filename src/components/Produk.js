import React from "react";

function Produk() {
  return (
    <div className="container mx-auto pl-16 pr-16">
      <div className="grid grid-flow-col grid-cols-12 gap-2 mt-2">
        {/* left sidebar */}
        <div className="w-full col-span-2">
          <ul className="border border-gray-300 mt-5 pt-2 pb-2 border-r-0 border-l-0">
            <li className="m-2">
              <button className="bg-green-500 text-left px-4 bg-opacity-60 text-gray-700 py-1 text-sm rounded-md font-bold w-full">
                Forum
              </button>
            </li>
            <li className="m-2">
              <button className="hover:bg-green-500 text-left px-4 hover:bg-opacity-20 text-gray-700 py-1 text-sm rounded-md w-full">
                Tags
              </button>
            </li>
            <li className="m-2">
              <button className="hover:bg-green-500 text-left px-4 hover:bg-opacity-20 text-gray-700 py-1 text-sm rounded-md w-full">
                Leaderboard
              </button>
            </li>
            <li className="m-2">
              <button className="hover:bg-green-500 text-left px-4 hover:bg-opacity-20 text-gray-700 py-1 text-sm rounded-md w-full">
                Blogs
              </button>
            </li>
          </ul>
        </div>
        {/* end left sidebar */}

        {/* content */}
        <div className="w-full col-span-7 p-4">
          <div className="flex w-full items-end content-end mb-3">
            <div className="w-3/5">
              <h1 className="text-left font-bold text-4xl">Forum</h1>
            </div>
            <div className="w-2/5">
              <div className="flex justify-end">
                <button className="text-center text-lg py-3 px-3 w-44 rounded-md bg-green-600 text-white">
                  Buat Pertanyaan
                </button>
              </div>
            </div>
          </div>
          <p>
            Tempat berkomunikasi para programmer dengan cara mengajukan atau
            menjawab sebuah pertanyaan
          </p>
          <br />
          <div className="flex gap-2">
            <input
              type="search"
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-orange-400 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Ketik disini untuk mencari pertanyaan"
            />
            <button
              type="button"
              className="w-1/5 px-2 rounded-lg bg-green-600 text-white p-4 border border-green-600"
            >
              Telusuri
            </button>
          </div>

          <div class="mt-5 text-base font-medium text-center text-gray-500 border-b border-gray-200">
            <ul class="flex flex-wrap pb-0">
              <li class="mr-4">
                <button
                  class="inline-block p-3 text-gray-700 rounded-t-lg border-b-2 border-green-600 active"
                  aria-current="page"
                >
                  Aktif
                </button>
              </li>
              <li class="mr-4">
                <button class="inline-block p-3 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-green-600 hover:bg-green-200">
                  Baru
                </button>
              </li>
              <li class="mr-4">
                <button class="inline-block p-3 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-green-600 hover:bg-green-200">
                  Belum Dijawab
                </button>
              </li>
            </ul>
          </div>

          {/* artikel 1 */}
          <div className="w-full rounded-md shadow-md shadow-gray-300 p-7 mt-10">
            <div className="flex gap-8">
              <div>
                <h1 className="text-lg text-center">0</h1>
                <p className="text-center">suka</p>
                <h1 className="text-lg text-center">0</h1>
                <p>suka</p>
              </div>
              <div>
                <p className="text-lg font-medium mb-2">
                  Bagaimana Menggunakan API?
                </p>
                <p className="text-sm">....</p>
                <div className="flex gap-2 mt-3 text-sm">
                  <button className="py-1 px-2 bg-green-600 bg-opacity-20 hover:bg-opacity-30 rounded-sm">
                    #javascript
                  </button>
                  <button className="py-1 px-2 bg-green-600 bg-opacity-20 hover:bg-opacity-30 rounded-sm">
                    #api
                  </button>
                  <button className="py-1 px-2 bg-green-600 bg-opacity-20 hover:bg-opacity-30 rounded-sm">
                    #html
                  </button>
                </div>
              </div>
            </div>

            <div className="flex text-sm mt-5 text-gray-500">
              <div className="w-1/5 flex item-end">
                <div className="flex items-end">
                  <p className="text-left">2</p>
                </div>
              </div>
              <div className="w-4/5">
                <p className="text-right">Aktivitas terakhir 3 jam yang lalu</p>
                <p className="text-right text-gray-700">
                  <button className="bg-green-600 bg-opacity-20 p-1 rounded-sm mr-1">
                    Lv.0
                  </button>{" "}
                  Zhispananamies
                </p>
              </div>
            </div>
          </div>
          {/* end artikel 1 */}

          {/* artikel 2 */}
          <div className="w-full rounded-md shadow-md shadow-gray-300 p-7 mt-10">
            <div className="flex gap-8">
              <div>
                <h1 className="text-lg text-center">0</h1>
                <p className="text-center">suka</p>
                <h1 className="text-lg text-center">0</h1>
                <p>suka</p>
              </div>
              <div>
                <p className="text-lg font-medium mb-2">
                  Login Error Pada CI4 Dengan Menggunakan Library myth-auth
                </p>
                <p className="text-sm">
                  Saya mencoba menggunakan codeigniter-4 dan mencoba menggunakan
                  MYTH\AUTH, dan saya mendapatkan masalah, jika dibatasi di
                  filter saya,i...{" "}
                </p>
                <div className="flex gap-2 mt-3 text-sm">
                  <button className="py-1 px-2 bg-green-600 bg-opacity-20 hover:bg-opacity-30 rounded-sm">
                    #javascript
                  </button>
                  <button className="py-1 px-2 bg-green-600 bg-opacity-20 hover:bg-opacity-30 rounded-sm">
                    #api
                  </button>
                  <button className="py-1 px-2 bg-green-600 bg-opacity-20 hover:bg-opacity-30 rounded-sm">
                    #html
                  </button>
                </div>
              </div>
            </div>

            <div className="flex text-sm mt-5 text-gray-500">
              <div className="w-1/5 flex item-end">
                <div className="flex items-end">
                  <p className="text-left">2</p>
                </div>
              </div>
              <div className="w-4/5">
                <p className="text-right ">
                  Aktivitas terakhir 3 jam yang lalu
                </p>
                <p className="text-right text-gray-700">
                  <button className="bg-green-600 bg-opacity-20 p-1 rounded-sm mr-1">
                    Lv.0
                  </button>{" "}
                  Zhispananamies
                </p>
              </div>
            </div>
          </div>
          {/* end artikel 2 */}
        </div>
        {/* end content */}

        {/* right sidebar*/}
        <div className="w-full col-span-3 p-5">
          <div className="shadow-lg p-5 shadow-gray-300">
            <h1 className="text-xl font-bold mb-3 border-b border-gray-400 pb-3">
              Selamat Datang!
            </h1>
            <p className="text-sm leading-relaxed">
              Ikuti facebook , telegram dan instagram kami untuk update terbaru.
              Setelah membuat pertanyaan, kamu bisa copy-paste link pertanyaan
              kamu ke grup Telegram atau FB untuk mengasih tahu para member di
              grup tersebut Ada yang tidak dimengerti? FAQ.
            </p>
          </div>

          <div className="shadow-lg p-5 shadow-gray-300 mt-10">
            <h1 className="text-xl font-bold mb-3 border-b border-gray-400 pb-3">
              User Teraktif
            </h1>
            <div className="text-sm leading-relaxed">
              <button className="border border-green-600 hover:bg-green-600 hover:bg-opacity-50 hover:border-opacity-0 font-medium text-left text-green-600 hover:text-white px-5 py-2 mb-4 rounded-md w-full">
                Harian
              </button>
              <ul>
                <li className="mb-3">
                  <h1 className="text-md font-medium">mnrltffrds</h1>
                  <p className="text-sm text-gray-500">2 Jawaban</p>
                </li>
                <li className="mb-3">
                  <h1 className="text-md font-medium">mnrltffrds</h1>
                  <p className="text-sm text-gray-500">2 Jawaban</p>
                </li>
                <li className="mb-3">
                  <h1 className="text-md font-medium">mnrltffrds</h1>
                  <p className="text-sm text-gray-500">2 Jawaban</p>
                </li>
                <li className="mb-3">
                  <h1 className="text-md font-medium">mnrltffrds</h1>
                  <p className="text-sm text-gray-500">2 Jawaban</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* end right sidebar */}
      </div>
    </div>
  );
}

export default Produk;

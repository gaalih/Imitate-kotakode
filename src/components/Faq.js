import React from "react";

function Faq() {
  return (
    <div className="container mx-auto pl-16 pr-16">
      {/* head */}
      <div className="head relative w-full bg-green-700 h-80 rounded-b-3xl">
        <h1 className="text-white text-center pt-32 text-3xl px-36 font-bold">
          Pertanyaan & Jawaban terkait Kotakode
        </h1>
        <p className="text-center text-white mt-10">
          Punya pertanyaan seputar produk dan layanan Kotakode? Temukan berbagai
          informasi yang tersedia di bawah ini.
        </p>
      </div>

      <div className="relative z-20 -top-24 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-3xl shadow-xl text-center py-4 px-16">
          <h1 className="text-3xl mb-4">FAQ</h1>
        </div>
      </div>
      {/* end head */}

      {/* accordion  */}
      <div className="pr-48 pl-48 mb-40">
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>Apa itu Kotakode?</p>
            </span>
            <svg
              data-accordion-icon=""
              className="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div className="p-5 text-gray-600 bg-gray-100">
          <p className="mb-2">
            Kotakode merupakan platform komunitas bagi para pegiat IT di
            Indonesia dimana programmer dapat belajar dan berbagi wawasan
            seputar dunia IT terkini untuk menuntun terciptanya ekosistem yang
            inklusif bagi programmer tahu lebih lanjut mengenai pemrograman.
            Kotakode memberikan 3 fitur menarik, yaitu
          </p>
          <h3 className="mt-5 font-bold text-xl text-black">Online Forum</h3>
          <p>
            Kotakode dapat menjawab pertanyaan dan membantu programmer dalam
            memberikan jawaban yang berkualitas.
          </p>
          <h3 className="mt-5 font-bold text-xl text-black">Microblogging</h3>
          <p>
            Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan
            terkait info terkini di bidang IT.
          </p>
          <h3 className="mt-5 font-bold text-xl text-black">Job Hiring</h3>
          <p>
            Kotakode membantu rekruiter dalam mencari talent terbaik yang
            memenuhi standar perusahaan.
          </p>
        </div>
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>Bagaimana cara melakukan pendaftaran akun di Kotakode?</p>
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>Bagaimana cara membuat pertanyaan di Kotakode?</p>
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>Bagaimana cara agar pertanyaan cepat terjawab?</p>
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>Bagaimana cara menjawab pertanyaan di Kotakode?</p>
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>
                Mengapa saya tidak bisa menghapus pertanyaan/jawaban di
                Kotakode?
              </p>
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>Apa yang dimaksud dengan Poin Kredibilitas?</p>
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>Apa yang dimaksud dengan Tag?</p>
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>
                Apa yang dimaksud dengan Badge? Bagaimana cara mendapatkannya?
              </p>
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>Bagaimana cara menjadi Moderator di Kotakode?</p>
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <h2>
          <button
            type="button"
            className="flex pt-7 pb-7 justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border-b-2 border-gray-400 text-gray-900"
          >
            <span className="flex items-center text-2xl">
              <p>Apa saja yang Moderator bisa lakukan di situs Kotakode?</p>
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
      </div>
      {/* end accordion */}
    </div>
  );
}

export default Faq;

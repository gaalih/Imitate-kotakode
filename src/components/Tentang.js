import React from "react";

function Tentang() {
  return (
    <div className="container mx-auto pl-16 pr-16">
      {/* head */}
      <div className="head relative w-full bg-green-700 h-80 rounded-b-3xl">
        <h1 className="text-white text-center pt-32 text-3xl px-36 font-bold">
          Dukung kami dalam menciptakan ekosistem yang inklusif bagi programmer
          di seluruh Indonesia
        </h1>
      </div>

      <div className="relative z-20 -top-24 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 w-2/3 h-48 rounded-3xl shadow-xl text-center py-6 px-16">
          <h1 className="text-3xl mb-4">Tentang Kotakode</h1>
          <p>
            Kotakode merupakan platform komunitas bagi para pegiat IT di
            Indonesia dimana programmer dapat belajar dan berbagi wawasan
            seputar dunia IT terkini untuk mendukung memberikan pertumbuhan
            perekonomian di Indonesia.
          </p>
        </div>
      </div>
      {/* end head */}

      {/* team */}
      <div className="static -mt-20">
        <h1 className="text-center text-4xl font-bold px-10 mb-10">
          Tim Kotakode
        </h1>

        <div className="mt-20">
          <div className="flex gap-8 px-16">
            <img
              className="rounded-full shadow-md w-60"
              src="https://placeimg.com/192/192/people"
            />
            <div className="pl-5">
              <h1 className="text-4xl font-medium mb-3">Peter Tanugraha</h1>
              <p className="text-2xl text-orange-500 mb-2">Cofounder & CEO</p>
              <p className="text-sm font-bold text-gray-500 mb-3">
                Computer Engineering @University of Toronto 2019
              </p>
              <p className="pl-5">
                <ul className="list-disc">
                  <li>Deep Learning Engineer @IBM Canada (1.5 years)</li>
                  <li>
                    Deep Learning Engineer / Software Engineer @Nightingtale.ai
                    Canada (1.5 years)
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex gap-8 px-16">
            <img
              className="rounded-full shadow-md w-60"
              src="https://placeimg.com/192/192/people"
            />
            <div className="pl-5">
              <h1 className="text-4xl font-medium mb-3">Michael Englo</h1>
              <p className="text-2xl text-orange-500 mb-2">Cofounder & CTO</p>
              <p className="text-sm font-bold text-gray-500 mb-3">
                Computer Science @University of British Columbia 2020
              </p>
              <p className="pl-5">
                <ul className="list-disc">
                  <li>Software Engineer @Google Canada (Currently)</li>
                  <li>Software Engineer @Google Sillcon Valley (4 month)</li>
                  <li>Software Engineer @Optimal Efficiency (1.6 years)</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex gap-8 px-16">
            <img
              className="rounded-full shadow-md w-60"
              src="https://placeimg.com/192/192/people"
            />
            <div className="pl-5">
              <h1 className="text-4xl font-medium mb-3">
                Anncarel Sanchiabarca
              </h1>
              <p className="text-2xl text-orange-500 mb-2">Cofounder & CBO</p>
              <p className="text-sm font-bold text-gray-500 mb-3">
                Computing & Information Systems @University of London 2019
              </p>
              <p className="pl-5">
                <ul className="list-disc">
                  <li>Software Engineer @Crowde (3 months)</li>
                  <li>CEO @Egglab.id</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        {/* end team */}

        {/* mascott */}
        <div className="w-full mt-20 p-28 bg-orange-500">
          <div className="flex gap-8 text-white">
            <div className="w-2/3">
              <p className="text-xl font-bold">Maskot Kotakode</p>
              <h1 className="text-4xl font-bold mb-3 mt-1">
                Kucing Robot Koko!
              </h1>
              <p>
                Banyak dari kita yang menyukai kucing, termasuk para programmer.
                Koko merupakan sebuah robot berbentuk kucing dengan kombinasi
                warna hijau dan putih. Koko adalah sebuah robot yang fanatik
                terhadap teknologi, khususnya di bidang IT. Ia datang dari masa
                depan dan diprogram untuk membantu orang-orang yang memiliki
                semangat yang sama dengan dirinya. Sama seperti Koko, Kotakode
                memiliki semangat untuk membantu para fanatik IT di Indonesia
                untuk mengembangkan ekosistem yang menyenangkan untuk
                mempelajari hal-hal yang berkaitan dengan dunia IT terkini.
              </p>
            </div>
            <img
              className="rounded-xl shadow-md w-1/3"
              src="https://placeimg.com/300/300/tech"
            />
          </div>
        </div>
        {/* end mascott */}

        {/* mascott */}
        <div className="w-full p-28">
          <h1 className="text-center text-4xl font-bold px-10 mb-10">
            Punya Pertanyaan Mengenai Kotakode?
          </h1>
          <div className="pl-10 pr-10">
            <p>
              Kotakode merupakan platform yang dibuat untuk mengatasi
              permasalahan bagi para pegiat IT di Indonesia. Kami menyadari
              bahwa kami sangat membutuhkan kontribusi pengguna dalam membangun
              Kotakode. Agar setiap fitur, tombol, dan warna yang kami buat
              sesuai dengan kebutuhan pengguna. Oleh karena itu jika kamu
              memiliki pertanyaan, saran, atau tawaran kerjasama yang ingin
              ditanyakan dan diskusikan dengan kami. Silakan hubungi kami
              melalui:
            </p>
            <h3 className="mt-5 font-bold text-1xl">Kotakode:</h3>
            <p>
              Ariobimo Sentral level 8. Jalan H. R. Rasuna Said Kav X-2 No. 5,
              Kuningan Timur, Setiabudi, Jakarta Selatan 12950
            </p>
            <h3 className="mt-5 font-bold text-1xl">Email:</h3>
            <p className="text-green-400">petertanugraha@kotakode.com</p>
          </div>
        </div>
        {/* end mascott */}
      </div>
    </div>
  );
}

export default Tentang;

import React from "react";

function Footer() {
  return (
    <div className="static w-full h-56 justify-center gap-1 mt-10">
      <div className="grid grid-cols-4 bg-black text-gray-500 py-12 px-24 font-light">
        <div>
          <ul>
            <li className="text-gray-400 font-medium">Bagian Dari :</li>
            <li></li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-gray-400 font-medium">Produk :</li>
            <li>Pertanyaan</li>
            <li>Blog</li>
            <li>Pengguna</li>
            <li>Events</li>
            <li>Partnership</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-gray-400 font-medium">Perusahaan :</li>
            <li>About</li>
            <li>FAQ</li>
            <li>Rules</li>
            <li>Legal</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-gray-400 font-medium">Hubungi Kami :</li>
            <li>petertanugraha@kotakode.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

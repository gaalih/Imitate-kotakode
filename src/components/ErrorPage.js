import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-md px-20 py-12 font-bold re text-center text-gray-700 w-1/3 h-32 mx-32 my-32">
        <p className="text-center">404 | Halaman Tidak Ditemukan</p>
        <small className="font-light">
          Klik Untuk Kembali Ke{" "}
          <button
            onClick={() => {
              navigate("/");
            }}
            className="font-medium text-green-600"
          >
            Halaman Home
          </button>
        </small>
      </div>
    </div>
  );
}

export default ErrorPage;

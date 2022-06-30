import React from 'react'

function DetailPengirimanContent() {
  return (
    <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-3 md:gap-6 bg-white p-5 rounded-xl">
      <div className="md:col-span-1 mb-6">
        <button type="button" className="mb-3 text-gray-700 border border-gray-100 hover:bg-gray-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>        
        </button>
        <div className="px-4 sm:px-0 border-2 rounded-xl">
          <div className="px-2 mt-2 mb-2">
            <h3 className="text-lg font-bold leading-6 text-gray-900">Informasi Pengiriman</h3>
            <p className="mt-1 text-sm font-medium text-gray-700">
              No Surat Jalan :<span className="ml-1 text-sm text-gray-500">GP 2503022</span>
            </p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Driver :<span className="ml-1 text-sm text-gray-500">Sofian</span> 
            </p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Kendaraan :<span className="ml-1 text-sm text-gray-500">BK 2022 ALK</span>
            </p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Teli :<span className="ml-1 text-sm text-gray-500">Martasi</span>
            </p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Date of Shipment :<span className="ml-1 text-sm text-gray-500">22/06/2022 - 10:00 AM</span>
            </p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Customer :<span className="ml-1 text-sm text-gray-500">CV JAYA BERSAUDARA</span> 
            </p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Sales :<span className="ml-1 text-sm text-gray-500">YONI</span> 
            </p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Tujuan :<span className="ml-1 text-sm text-gray-500">Medan Amplas, Medan</span> 
            </p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              Alamat :<span className="ml-1 text-sm text-gray-500">Jl. Masukan alamat lengkap No. 39 Medan Amplas, Medan, Sumatera Utara</span> 
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mt-5 md:mt-0 md:col-span-4"> */}
        <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-10">                  
            <li className="mb-6 ml-6">            
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>         
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Diproses by Qori <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">[Logistik]</span></h3>
                <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 January 2022</date>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10:00 AM</time>
            </li>
            <li className="mb-6 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>                
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Dimuat by Martasi <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">[Teli]</span></h3>
                <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 January 2022</date>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10:00 AM</time>
            </li>
            <li className="mb-6 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>                
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Selesai Dimuat by Martasi <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">[Teli]</span></h3>
                <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 January 2022</date>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10:00 AM</time>
            </li>
            <li className="mb-6 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>                
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Dikirim by Sopian <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">[Driver]</span></h3>
                <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 January 2022</date>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">11:00 AM</time>
            </li>
            <li className="mb-6 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>                
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Selesai Dikirim by Sopian <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">[Driver]</span></h3>
                <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 January 2022</date>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10:00 AM</time>
            </li>
            <li className="mb-6 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-orange-200 rounded-full ring-8 ring-white dark:ring-orange-900 dark:bg-orange-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500 dark:text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>               
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Dipending by Qori <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">[Logistik]</span></h3>
                <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 January 2022</date>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10:00 AM</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Barang yg dimuat salah</p>
            </li>
            <li className="mb-6 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-red-200 rounded-full ring-8 ring-white dark:ring-red-900 dark:bg-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 dark:text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>               
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Dicancel by Qori <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">[Logistik]</span></h3>
                <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">22 January 2022</date>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">10:00 AM</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Customer Cancel</p>
            </li>
        </ol>
      </div>
    {/* </div> */}
  </div>
  )
}

export default DetailPengirimanContent
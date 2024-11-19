import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null); // Inisialisasi dengan null
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchProductData = async () => {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image[0]); // Set gambar pertama saat produk ditemukan
      }
    };

    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Produk data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Produk image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" // Tambahkan cursor-pointer
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Info produk */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl gap-1 mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3 h-3" alt="" /> {/* Perbaiki className */}
            <img src={assets.star_icon} className="w-3 h-3" alt="" /> {/* Perbaiki className */}
            <img src={assets.star_icon} className="w-3 h-3" alt="" /> {/* Perbaiki className */}
            <img src={assets.star_icon} className="w-3 h-3" alt="" /> {/* Perbaiki className */}
            <img src={assets.star_dull_icon} className="w-3 h-3" alt="" /> {/* Perbaiki className */}
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Sizes</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button key={index} className="border border-gray-100 px-4 py-2 rounded-md hover:bg-gray-100">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
import React  from "react";
import "./style.css"



const products = [
    { id: 1, name: "iPhone 13 Pro - Transparent", price: "LKR 499", image: "https://aprozone.in/cdn/shop/products/2_e0a9aaee-1404-4107-bbcd-b2c3857c4d70.jpg?v=1649828326" },
    { id: 2, name: "Samsung S23+ - Transparent", price: "LKR 799", image: "https://ringke.co.in/cdn/shop/products/813QWORNAjL._SL1500.jpg?v=1674470230" },
    { id: 3, name: "iPhone 14 - Transparent with magsafe", price: "LKR 799", image: "https://ringke.co.in/cdn/shop/files/71AZj2D_KQL._SL1500_9cc5bb0f-0c2a-4407-89da-43f45ad1795e.jpg?v=1685705996" },
    { id: 4, name: "Pixel 7 Pro - Transparent Wireless", price: "LKR 599", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfs_x2d4EqZXoDuGTqP4YqntC_Lztdm7PSCQ&s" },
    { id: 5, name: "Pixel 6 a-matte Black", price: "LKR 499", image: "https://riggear-web-images.s3.ap-south-1.amazonaws.com/UploadImages/f892ed55-631e-4412-b860-542409137283_full.png" },
    { id: 6, name: "Pixel 6a", price: "LKR 799", image: "https://riggear-web-images.s3.ap-south-1.amazonaws.com/UploadImages/f892ed55-631e-4412-b860-542409137283_full.png" },
    { id: 7, name: "iPhone 14 - Transparent with magsafe", price: "LKR 799", image: "https://m.media-amazon.com/images/I/71HlZREsxML.jpg" },
    { id: 8, name: "Pixel 7 Pro - Transparent Wireless", price: "LKR 599", image: "https://sirphire.s3.ap-south-1.amazonaws.com/feb-2025/teardown_google-pixel-7_back-cover-front-view.jpg" },
    { id: 9, name: "iPhone 13 Pro - Transparent", price: "LKR 499", image: "https://m.media-amazon.com/images/I/71-Vr6lmMRL.jpg" },
    { id: 10, name: "Samsung S23+ - Transparent", price: "LKR 799", image: "https://spigen.in/cdn/shop/files/detail_web_sp681_optikpro_07_800x.jpg?v=1740972162" },
    { id: 11, name: "iPhone 14 - Transparent with magsafe", price: "LKR 799", image: "https://aprozone.in/cdn/shop/products/14_61d3e262-3c80-42b2-9c0a-ef1fc8e5e7b2.jpg?v=1698305918&width=1080" },
    { id: 12, name: "Pixel 7 Pro - Transparent Wireless", price: "LKR 599", image: "https://www.mytrendyphone.eu/images/Google-Pixel-7-Pro-Privacy-Full-Cover-Tempered-Glass-Screen-Protector-Black-EdgeNone-04122023-01-p.webp" },
];

 function Landing(){
    return (
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.name}  width={200} height={250}/>
            </div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
          </div>
        ))}
      </div>
    );
  };
  export default Landing;
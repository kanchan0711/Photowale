import LightGallery from 'lightgallery/react';

// Import Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Import Images
import Gal2 from "../assets/Gal2.jpg";
import Gal3 from "../assets/Gal3.jpg";
import Gal4 from "../assets/Gal4.jpg";
import Gal5 from "../assets/Gal5.jpg";
import Gal6 from "../assets/Gal6.jpg";
import Gal7 from "../assets/Gal7.jpg";
import Gal8 from "../assets/Gal8.jpg";
import Gal9 from "../assets/Gal9.jpg";
import Gal10 from "../assets/Gal10.jpg";
import Gal11 from "../assets/Gal11.jpg";
import Gal12 from "../assets/Gal12.jpg";
import img from "../assets/serviceCard2.webp"

const images = [img, img,img,img,img,img,img,img,img,img,img,img,];
// const images = new Array(12).fill(img)

const Gallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className="App">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        <div className='flex flex-wrap justify-center gap-3  my-10'>
          {images.map((img, idx) => (
            <a href={img} key={idx} className="md:w-[250px] lg:w-[380px] h-full overflow-hidden block">
              <img
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover rounded"
              />
            </a>
          ))}
        </div>
      </LightGallery>
    </div>
  );
};

export default Gallery;



// import LightGallery from 'lightgallery/react';

// // Import Styles
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';

// // Import Plugins
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

// // Import Images
// import Gal2 from "../assets/Gal2.jpg";
// import Gal3 from "../assets/Gal3.jpg";
// import Gal4 from "../assets/Gal4.jpg";
// import Gal5 from "../assets/Gal5.jpg";
// import Gal6 from "../assets/Gal6.jpg";
// import Gal7 from "../assets/Gal7.jpg";
// import Gal8 from "../assets/Gal8.jpg";
// import Gal9 from "../assets/Gal9.jpg";
// import Gal10 from "../assets/Gal10.jpg";
// import Gal11 from "../assets/Gal11.jpg";
// import Gal12 from "../assets/Gal12.jpg";
// import img from "../assets/serviceCard2.webp"

// const Gallery = () => {
//   // const images = [
//   //    Gal2, Gal3, Gal4, Gal5, Gal6, Gal7,
//   //   Gal8,
//   //   Gal8, Gal9, Gal10, Gal11, 
//   // ];
//   const images = new Array(12).fill(img)
//   const onInit = () => {
//     console.log('lightGallery has been initialized');
//   };

//   return (
//     <div className="App  ">
//       <LightGallery
//                     className="gallery-item"
//                     onInit={onInit}
//         speed={500}
//         plugins={[lgThumbnail, lgZoom]}
//       >

//           {/* <a href={Gal1} >
//             <img
//               src={Gal1}
//               alt="img"
//               className="w-56 h-full object-cover m-2 inline-block"
//             />
//           </a>
//           <a href={Gal2} >
//             <img
//               src={Gal2}
//               alt="img"
//               className="w-56 h-full object-cover m-2 inline-block"
//             />
//           </a>
//           <a href={Gal3} >
//             <img
//               src={Gal3}
//               alt="img"
//               className="w-56 h-full object-cover m-2 inline-block"
//             />
//           </a> */}
//           <div className='flex w-full justify-between flex-wrap gap-10 px-5'>
//         {images.map((img, idx) => (
//           <a href={img} >
//             <img
//               src={img}
//               alt={`Gallery image ${idx + 1}`}
//               className="w-full max-w-1/5 h-full object-cover  inline-block"
//             />
//           </a>
//         ))}
//         </div>
//       </LightGallery>
//     </div>
//   );
// };

// export default Gallery;

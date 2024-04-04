// import React from 'react';
// import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';


// // Lista de imágenes de ejemplo
// const images = [
//   { id: 1, src: '.././loteria/1loteria.jpg', title: 'Imagen 1' },
//   { id: 2, src: '.././loteria/2loteria.jpg', title: 'Imagen 2' },
//   { id: 3, src: '.././loteria/3loteria.jpg', title: 'Imagen 3' },
//   // Agrega más imágenes según sea necesario
// ];


// const Lottery = () => {
//     return (
//       <Grid container spacing={0.5}>
//         {images.map(image => (
//           <Grid item xs={3} key={image.id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140px"
//                 width="300px"
//                 image={image.src}
//                 alt={image.title}
//               />
//               <CardContent>
//                 <Typography variant="body2" component="p">
//                   {image.title}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     );
//   };

// export default Lottery;






// pages/index.js

// import ImageGrid from '../../components/ImageGrid';

// const images = [
//     '.././loteria/1loteria.jpg',
//     '.././loteria/2loteria.jpg',
//     // ... (agrega todas tus imágenes aquí)
//     '.././loteria/3loteria.jpg',
// ];

// const Home = () => {
//     return (
//         <div>
//             <h1>Grid de Imágenes</h1>
//             <ImageGrid images={images} />
//         </div>
//     );
// };

// export default Home;


import LotteryImageList from "@/components/LotteryImageList";

function Lottery () {

  return (
    <div>
      <LotteryImageList/>
    </div>
  );
}

export default Lottery;


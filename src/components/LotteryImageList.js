import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const LotteryImageList = () => {
  const [selectedImages, setSelectedImages] = React.useState([]);

  const toggleImageSelection = (img) => {
    if (selectedImages.includes(img)) {
      // Si la imagen ya está seleccionada, la eliminamos del estado
      setSelectedImages(prevSelected => prevSelected.filter(selectedImg => selectedImg !== img));
    } else {
      // Si la imagen no está seleccionada, la añadimos al estado
      setSelectedImages(prevSelected => [...prevSelected, img]);
    }
  };

  const isImageSelected = (img) => {
    return selectedImages.includes(img);
  };

  useEffect(() => {
    if (selectedImages.length === itemData.length) {
      Swal.fire({
        title: '¡Juego terminado!',
        text: 'Has seleccionado todas las imágenes.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }
  }, [selectedImages]);

  return (
    <Paper>
      <Grid container spacing={1}>
        <Grid item xs={8} md={4}>
          <ImageList sx={{ width: '100%', height: 550 }} cols={4} rowHeight={164}>
            {itemData.map((item) => (
              <ImageListItem 
                key={item.img} 
                onClick={() => toggleImageSelection(item.img)}
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  '::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: isImageSelected(item.img) ? 'rgba(45, 197, 138, 0.67)' : 'transparent',
                    zIndex: 1,
                    transition: 'background-color 0.1s ease-in-out'
                  }
                }}
              >
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={4} md={8}>
          <Card style={{ backgroundColor: '#4AC7A214'}}>
            <CardContent>
              <Typography variant="h6">
                Lotería
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: 16, 
                  color: 'gray' 
                }}
              >
              </Typography>
            </CardContent>
          </Card>
          <Grid container spacing={1} style={{ marginTop: '16px' }}>
            <Grid item xs={9}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Turno de tarjetas
                  </Typography>
                  <Box>
                  <img
                    width={225}
                    src='.././loteria/3loteria.jpg'
                  />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Jugadores
                  </Typography>
                  {/* Contenido para Jugadores */}
                  <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                    <li>Jugador 1</li>
                    <li>Jugador 2</li>
                    <li>Jugador 3</li>
                    <li>Jugador 4</li>
                    <li>Jugador 5</li>
                    <li>Jugador 6</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}


const itemData = [
  {
    img: '.././loteria/1loteria.jpg',
    title: 'Image 1',
  },
  {
    img: '.././loteria/2loteria.jpg',
    title: 'Image 2',
  },
  {
    img: '.././loteria/3loteria.jpg',
    title: 'Image 3',
  },
  {
    img: '.././loteria/4loteria.jpg',
    title: 'Image 4',
  },
  {
    img: '.././loteria/5loteria.jpg',
    title: 'Image 5',
  },
  {
    img: '.././loteria/6loteria.jpg',
    title: 'Image 6',
  },
  {
    img: '.././loteria/7loteria.jpg',
    title: 'Image 7',
  },
  {
    img: '.././loteria/8loteria.jpg',
    title: 'Image 8',
  },
  {
    img: '.././loteria/9loteria.jpg',
    title: 'Image 9',
  },
  {
    img: '.././loteria/10loteria.jpg',
    title: 'Image 10',
  },
  {
    img: '.././loteria/11loteria.jpg',
    title: 'Image 11',
  },
  {
    img: '.././loteria/12loteria.jpg',
    title: 'Image 12',
  },
  {
    img: '.././loteria/13loteria.jpg',
    title: 'Image 13',
  },
  {
    img: '.././loteria/14loteria.jpg',
    title: 'Image 14',
  },
  {
    img: '.././loteria/15loteria.jpg',
    title: 'Image 15',
  },
  {
    img: '.././loteria/16loteria.jpg',
    title: 'Image 16',
  },
];

export default LotteryImageList;
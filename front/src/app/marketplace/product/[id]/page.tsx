'use client';

import { ProductCarousel } from '@/components/carousel';
import productsData, { ProductProps } from '@/mockData/products';
import { AddShoppingCart, FavoriteBorder } from '@mui/icons-material';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { use } from 'react';

export default function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // Não precisa de useState - só busca uma vez
  const product = productsData.find((item) => item.id === Number(id));

  // Early return se produto não existir
  if (!product) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography>Produto não encontrado</Typography>
      </Box>
    );
  }

  const allImages = [product.images.main, ...product.images.gallery];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, gap: 1.5 }}>
      {/* Carrossel de imagens */}
      <ProductCarousel>
        {allImages.map((image, index) => (
          <Box key={index} sx={{ flex: '0 0 100%', minWidth: 0, px: 1 }}>
            <Box
              component='img'
              src={image}
              alt={`${product.title} - imagem ${index + 1}`}
              sx={{
                width: '100%',
                height: { xs: '18em', md: '28em' },
                objectFit: 'cover',
                backgroundColor: 'grey.100',
                borderRadius: 2,
                userSelect: 'none',
              }}
            />
          </Box>
        ))}
      </ProductCarousel>

      {/* Preço e favorito */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='h3' color='primary.main'>
          R$ {product.price}
        </Typography>
        <FavoriteBorder fontSize='medium' sx={{ color: 'primary.dark' }} />
      </Box>

      {/* Título e tags */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Typography variant='h3'>{product.title}</Typography>

        <Typography variant='body2' color='textSecondary'>
          Interesses para rolo:
        </Typography>

        <Box sx={{ display: 'flex', gap: 1.5 }}>
          {['lorem', 'ipsum', 'shaw 🔥'].map((tag, index) => (
            <Box
              key={index}
              sx={{
                border: '1px solid',
                borderColor: 'primary.dark',
                borderRadius: '0.25rem',
                px: 1,
              }}
            >
              <Typography variant='body2'>{tag}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Botões de ação */}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '3.75rem',
          my: 2,
        }}
      >
        <Button
          sx={{
            width: '100%',
            borderRadius: 0,
            backgroundColor: '#fff',
            color: '#000',
          }}
        >
          <Typography variant='body2' fontWeight='bold'>
            Rolo
          </Typography>
        </Button>

        <Button
          variant='contained'
          sx={{
            width: '100%',
            borderRadius: 0,
            backgroundColor: '#fff',
            color: '#000',
          }}
        >
          <AddShoppingCart />
        </Button>

        <Button
          variant='contained'
          sx={{
            width: '100%',
            borderRadius: 0,
          }}
        >
          <Typography variant='body2' fontWeight='bold'>
            Comprar Agora
          </Typography>
        </Button>
      </Box>

      {/* Info do vendedor */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBlock: '1px solid #D1D4DA33',
          py: 2.5,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar
            src={product.seller.avatar}
            alt={`${product.seller.name} profile`}
          />
          <Typography>{product.seller.name}</Typography>
        </Box>

        <Box>
          <Typography variant='body2' color='textSecondary'>
            2 horas
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {product.location.city} - {product.location.state}
          </Typography>
        </Box>
      </Box>

      {/* Descrição */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          p: 1,
          borderRadius: 1,
          minHeight: '6.5rem',
        }}
      >
        <Typography variant='body2'>{product.description}</Typography>
      </Box>
    </Box>
  );
}

'use client';

import { ProductCarousel } from '@/components/carousel';
import productsData from '@/mockData/products';
import { AddShoppingCart, FavoriteBorder } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const product = productsData.find((item) => item.id === Number(id));

  if (!product) {
    router.push('/');

    return (
      <Box sx={{ p: 2 }}>
        <Typography>Produto não encontrado</Typography>
      </Box>
    );
  }

  const allImages = [product.images.main, ...product.images.gallery];
  const sellerProducts = productsData
    .filter((item) => item.seller.name && item.id !== product.id)
    .slice(0, 4);

  return (
    <Box
      sx={{
        p: 2,
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: 4,
      }}
    >
      {/* Área principal em desktop: imagem de um lado, infos do outro */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          width: '100%',
          maxWidth: 1200,
        }}
      >
        {/* Carrossel ocupa metade no desktop */}
        <Box sx={{ width: { xs: '100%', md: '50%' }, minWidth: 0 }}>
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
        </Box>

        {/* Infos ocupam metade no desktop, plaptop esquerda */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            pl: { xs: 0, md: 3 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'space-between', md: 'space-around' },
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'column-reverse' },
            }}
          >
            {/* Preço e favorito */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: { md: '1rem' },
              }}
            >
              <Typography
                variant={'h3'}
                color='primary.main'
                sx={{ fontSize: { md: 36 } }}
              >
                R$ {product.price}
              </Typography>
              <FavoriteBorder
                fontSize='medium'
                sx={{ color: 'primary.dark', fontSize: { md: '1.75em' } }}
              />
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
          </Box>

          <Box>
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
          </Box>
        </Box>
      </Box>

      {/* Descrição abaixo, sempre em toda tela */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          p: 2,
          borderRadius: 2,
          minHeight: '6.5rem',
          maxWidth: 1200,
          width: '100%',
          mt: 2,
        }}
      >
        <Typography variant='body2'>{product.description}</Typography>
      </Box>

      {/* Outros produtos deste vendedor */}
      {sellerProducts.length > 0 && (
        <Box
          sx={{
            maxWidth: 1200,
            width: '100%',
            mt: 4,
          }}
        >
          <Typography variant='h5' sx={{ mb: 2 }}>
            Outros produtos de {product.seller.name}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 2,
            }}
          >
            {sellerProducts.map((item) => (
              <Link
                key={item.id}
                href={`/marketplace/product/${item.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Card
                  sx={{
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardMedia
                    component='img'
                    height='180'
                    image={item.images.main}
                    alt={item.title}
                    sx={{
                      objectFit: 'cover',
                      backgroundColor: 'grey.100',
                    }}
                  />
                  <Box sx={{ p: 1.5 }}>
                    <Typography
                      variant='body2'
                      sx={{
                        fontWeight: 'bold',
                        mb: 0.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant='h6' color='primary.main'>
                      R$ {item.price}
                    </Typography>
                    <Typography variant='caption' color='textSecondary'>
                      {item.location.city} - {item.location.state}
                    </Typography>
                  </Box>
                </Card>
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

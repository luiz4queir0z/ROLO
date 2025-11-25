import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import {
  StoreOutlined,
  HandshakeOutlined,
  PlaceRounded,
  DateRange,
} from '@mui/icons-material';
import Link from 'next/link';

const user = {
  name: 'Ana Beatriz',
  username: '@anabeatriz',
  avatar: '/avatar_placeholder.png',
  bio: 'Amante de tecnologia e games retrô. Aberta a negociações criativas e a encontrar novos lares para minhas coisas.',
  location: 'São Paulo, SP',
  memberSince: '2023',
  stats: [
    {
      label: 'Itens',
      value: 12,
      icon: <StoreOutlined sx={{ color: '#FE733B' }} />,
    },
    {
      label: 'Rolos feitos',
      value: 27,
      icon: <HandshakeOutlined sx={{ color: '#FE733B' }} />,
    },
  ],
};

const products = [
  {
    id: 1,
    title: 'Console Retro',
    seller: 'Ana Beatriz',
    price: '350',
    img: 'https://placehold.co/160/D9D9D9/ffffff?text=PRODUCT',
  },
  {
    id: 2,
    title: 'Console Retro',
    seller: 'Ana Beatriz',
    price: '350',
    img: 'https://placehold.co/160/FFD700/ffffff?text=PRODUCT',
  },
  {
    id: 3,
    title: 'Console Retro',
    seller: 'Ana Beatriz',
    price: '350',
    img: 'https://placehold.co/160/87CEEB/ffffff?text=PRODUCT',
  },
  {
    id: 4,
    title: 'Console Retro',
    seller: 'Ana Beatriz',
    price: '350',
    img: 'https://placehold.co/160/FF6347/ffffff?text=PRODUCT',
  },
  {
    id: 5,
    title: 'Console Retro',
    seller: 'Ana Beatriz',
    price: '350',
    img: 'https://placehold.co/160/40E0D0/ffffff?text=PRODUCT',
  },
  {
    id: 6,
    title: 'Console Retro',
    seller: 'Ana Beatriz',
    price: '350',
    img: 'https://placehold.co/160/8A2BE2/ffffff?text=PRODUCT',
  },
];

export default function Profile() {
  return (
    <Box
      sx={{
        backgroundColor: '#232428',
        minHeight: '100vh',
        py: 4,
        color: '#fff',
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 5,
        }}
      >
        {/* Perfil */}
        <Box
          sx={{
            bgcolor: '#272A30',
            borderRadius: 3,
            p: 4,
            minWidth: { md: 340 },
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{ width: 120, height: 120, mb: 2, bgcolor: '#FE733B' }}
          />
          <Typography variant='h4' sx={{ fontWeight: 700 }}>
            {user.name}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: '#FE733B', fontWeight: 500, mb: 2 }}
          >
            {user.username}
          </Typography>
          <Box
            sx={{
              mb: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
              alignItems: 'left',
              width: '100%',
            }}
          >
            <Typography
              variant='body2'
              sx={{
                color: '#FFFFFF60',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <PlaceRounded sx={{ color: '#FE733B' }} />
              {user.location}
            </Typography>
            <Typography
              variant='body2'
              sx={{
                color: '#FFFFFF60',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <DateRange sx={{ color: '#FE733B' }} />
              Membro desde {user.memberSince}
            </Typography>
          </Box>
          <Typography variant='body1' align='left' sx={{ mb: 3 }}>
            {user.bio}
          </Typography>
        </Box>
      </Box>
      {/* Estatísticas tem que ser arrumando, o margin não está sendo aplicado por causa do mx "auto" */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'flex',
          gap: 2,
          width: '100%',
          mt: 4,
          mb: 2,

          justifyContent: 'center',
        }}
      >
        {user.stats.map((stat, idx) => (
          <Box
            key={idx}
            sx={{
              bgcolor: '#272A30',
              borderRadius: 2,
              px: 3,
              py: 2,
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Typography variant='h5' sx={{ fontWeight: 700 }}>
              {stat.value}
            </Typography>
            <Typography
              variant='body2'
              sx={{ display: 'flex', justifyContent: 'center', mt: 0.8 }}
            >
              {stat.icon}
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Galeria de Produtos*/}
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          mt: 6,
          px: 2,
          flex: 1,
          gap: 5,
        }}
      >
        <Typography variant='h4' sx={{ fontWeight: 700, mb: 1 }}>
          Galeria
        </Typography>
        <Typography variant='body2' sx={{ color: '#FE733B', mb: 3 }}>
          Mostrando todos os itens disponíveis
        </Typography>
        <Grid
          container
          spacing={1.5}
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        >
          {products.map((product) => (
            <Grid key={product.id} size={1}>
              <Link
                href={`/marketplace/product/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card
                  sx={{
                    bgcolor: '#272A30',
                    color: '#fff',
                    borderRadius: 2,
                    boxShadow: 3,
                    border: `1px solid #FE733B`,
                  }}
                >
                  <CardMedia
                    component='img'
                    height={180}
                    src={product.img}
                    alt={product.title}
                    sx={{ objectFit: 'cover', bgcolor: '#232428' }}
                  />
                  <CardContent>
                    <Typography
                      variant='h6'
                      sx={{ color: '#FE733B', fontWeight: 600 }}
                    >
                      {product.title}
                    </Typography>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                      Vendedor: {product.seller}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{ color: '#fff', fontWeight: 700 }}
                    >
                      R$ {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
          {/* apenas para ter mais produtos no grid, arrumar dps */}
          {products.map((product) => (
            <Grid key={product.id} size={1}>
              <Link
                href={`/marketplace/product/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card
                  sx={{
                    bgcolor: '#272A30',
                    color: '#fff',
                    borderRadius: 2,
                    boxShadow: 3,
                    border: `1px solid #FE733B`,
                  }}
                >
                  <CardMedia
                    component='img'
                    height={180}
                    src={product.img}
                    alt={product.title}
                    sx={{ objectFit: 'cover', bgcolor: '#232428' }}
                  />
                  <CardContent>
                    <Typography
                      variant='h6'
                      sx={{ color: '#FE733B', fontWeight: 600 }}
                    >
                      {product.title}
                    </Typography>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                      Vendedor: {product.seller}
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{ color: '#fff', fontWeight: 700 }}
                    >
                      R$ {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

// Falta colocar uma codicional, quando for o proprio usuario vai aparecer um botao de editar perfil no canto superior direito da caixa do perfil, que vai levar para configurações do perfil

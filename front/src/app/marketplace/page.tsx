import { BannerCarousel } from '@/components/carousel';
import CategoryButton from '@/components/categoryButton';
import SearchBar from '@/components/SearchBar';
import bannerData from '@/mockData/banner';
import categorieData from '@/mockData/categories';
import productsData from '@/mockData/products';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Link from 'next/link';

export default function MarketPlace() {
  return (
    <>
      <BannerCarousel>
        {bannerData.map((banner, index) => (
          <Box
            key={index}
            component='img'
            src={banner}
            alt='Banner'
            sx={{
              backgroundColor: '#D9D9D9',
              width: '100%',
              objectFit: 'cover',
            }}
          />
        ))}
      </BannerCarousel>
      <Box
        sx={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <SearchBar placeholder='Procurar por um item...' />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <CategoryButton categories={categorieData} />
        </Box>
        <Grid
          container
          spacing={1.5}
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 7 }}
        >
          {productsData.map((product, index) => (
            <Grid key={index} size={1}>
              <Link
                href={`/marketplace/product/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card
                  variant='outlined'
                  sx={{ borderRadius: '0.5rem', height: '100%' }}
                >
                  <CardMedia
                    component='img'
                    height={160}
                    image={product.images.main}
                  />
                  <CardContent sx={{ padding: 1 }}>
                    <Typography variant='body2' color='textSecondary'>
                      {product.title}
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      R$ {product.price}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      padding: 0,
                      paddingTop: 1,
                      margin: 1,
                      marginTop: 0,
                      borderTop: '1px solid #7C7F85',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Avatar
                        src={product.seller.avatar}
                        alt={`${product.seller.name} avatar`}
                        sx={{ width: '1.75rem', height: '1.75rem' }}
                      />
                      <Typography variant='body2' sx={{ fontSize: 14 }}>
                        {product.seller.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography variant='body2' sx={{ fontSize: 14 }}>
                        {(() => {
                          const now = new Date();
                          const date = new Date(product.createdAt);
                          const diffMs = now.getTime() - date.getTime();
                          const diffHours = Math.floor(
                            diffMs / (1000 * 60 * 60)
                          );
                          const diffDays = Math.floor(
                            diffMs / (1000 * 60 * 60 * 24)
                          );

                          if (diffHours < 24) {
                            return `${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
                          } else if (diffDays === 1) {
                            return 'ontem';
                          } else {
                            return `${diffDays} ${diffDays === 1 ? 'dia' : 'dias'}`;
                          }
                        })()}
                      </Typography>
                      <Typography variant='body2' sx={{ fontSize: 14 }}>
                        {product.location.city} - {product.location.state}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

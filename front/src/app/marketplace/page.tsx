import { BannerCarousel } from '@/components/carousel';
import CategoryButton from '@/components/categoryButton';
import ProductCard from '@/components/productCard';
import SearchBar from '@/components/searchBar';
import bannerData from '@/mockData/banner';
import categorieData from '@/mockData/categories';
import productsData from '@/mockData/products';
import { Box, Grid } from '@mui/material';
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
              height: { sm: 'auto', md: 340, lg: 410 },
              flex: '0 0 100%',
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
            gap: 2,
            overflowX: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <CategoryButton categories={categorieData} />
        </Box>
        <Grid
          container
          spacing={1.5}
          columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        >
          {productsData.map((product, index) => (
            <Grid key={index} size={1}>
              <Link
                href={`/marketplace/product/${product.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ProductCard product={product} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

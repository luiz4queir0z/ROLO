/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  PersonOutline,
  EmailOutlined,
  LockOutlined,
} from '@mui/icons-material';

// Cores
const PRIMARY_ORANGE = '#FE733B';
const DARK_GRAY = '#232428';
const INPUT_BG = '#272A30';
const LIGHT_GRAY = '#dcdcdc';

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '0.75rem',
    backgroundColor: INPUT_BG,
    '& fieldset': { borderColor: '#444444' },
    '&:hover fieldset': { borderColor: PRIMARY_ORANGE },
    '&.Mui-focused fieldset': {
      borderColor: PRIMARY_ORANGE,
      borderWidth: '2px',
    },
    color: 'white',
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'grey.600',
    opacity: 1,
  },
  '& .MuiInputLabel-root': { color: 'grey.400' },
};

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Lógica de login ou cadastro
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: PRIMARY_ORANGE,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
      }}
    >
      {/* Cabeçalho */}
      <Box
        sx={{
          width: '100%',
          height: { xs: 224, md: 256 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 3,
          paddingTop: 5,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton
            aria-label='voltar'
            onClick={() => console.log('Voltar')}
            sx={{
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            <ArrowBack sx={{ color: 'white' }} />
          </IconButton>
          <Typography variant='body1' sx={{ color: 'white', ml: 1 }}>
            voltar
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component='img'
            src={'/logo_branca.svg'}
            alt='Rolo SVG'
            sx={{
              backgroundColor: 'trasparent',
              width: '50px',
              objectFit: 'cover',
              marginBottom: 2,
            }}
          />
          <Typography
            variant='h4'
            sx={{ color: 'white', fontWeight: 'bold', letterSpacing: '0.2em' }}
          >
            ROLO
          </Typography>
        </Box>
      </Box>

      {/* Card principal */}
      <Box
        component='main'
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 400 },
          backgroundColor: DARK_GRAY,
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          boxShadow: 24,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          marginTop: { xs: 2, sm: '-20px' },
          zIndex: 10,
        }}
      >
        <Typography
          variant='h4'
          component='h1'
          sx={{
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 3,
            textAlign: 'center',
          }}
        >
          {mode === 'register' ? 'Crie sua conta' : 'Login'}
        </Typography>

        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          {/* Condicional: campos do cadastro ou login */}
          {mode === 'register' ? (
            <>
              <Box>
                <Typography
                  variant='subtitle2'
                  sx={{ color: 'grey.300', marginBottom: 0.5 }}
                >
                  Nome
                </Typography>
                <TextField
                  fullWidth
                  variant='outlined'
                  name='name'
                  placeholder='Digite seu nome'
                  value={formData.name}
                  onChange={handleChange}
                  sx={inputSx}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PersonOutline sx={{ color: PRIMARY_ORANGE }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </>
          ) : null}

          {/* Campos em comum: email e senha */}
          <Box>
            <Typography
              variant='subtitle2'
              sx={{ color: 'grey.300', marginBottom: 0.5 }}
            >
              E-mail
            </Typography>
            <TextField
              fullWidth
              variant='outlined'
              type='email'
              name='email'
              placeholder='Digite seu email'
              value={formData.email}
              onChange={handleChange}
              sx={inputSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailOutlined sx={{ color: PRIMARY_ORANGE }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Typography
              variant='subtitle2'
              sx={{ color: 'grey.300', marginBottom: 0.5 }}
            >
              Senha
            </Typography>
            <TextField
              fullWidth
              variant='outlined'
              type='password'
              name='password'
              placeholder='Digite sua senha'
              value={formData.password}
              onChange={handleChange}
              sx={inputSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockOutlined sx={{ color: PRIMARY_ORANGE }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Campo Confirmação de senha apenas no cadastro */}
          {mode === 'register' ? (
            <Box>
              <Typography
                variant='subtitle2'
                sx={{ color: 'grey.300', marginBottom: 0.5 }}
              >
                Confirmação de senha
              </Typography>
              <TextField
                fullWidth
                variant='outlined'
                type='password'
                name='confirmPassword'
                placeholder='Digite sua senha novamente'
                value={formData.confirmPassword}
                onChange={handleChange}
                sx={inputSx}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockOutlined sx={{ color: PRIMARY_ORANGE }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          ) : null}

          {/* Esqueceu a senha link apenas no login */}
          {mode === 'login' ? (
            <Typography
              variant='body2'
              sx={{
                color: PRIMARY_ORANGE,
                textAlign: 'right',
                mb: 1,
                mt: -1,
                cursor: 'pointer',
                fontSize: '0.95rem',
              }}
              onClick={() => console.log('Recuperar senha')}
            >
              Esqueceu a senha?
            </Typography>
          ) : null}

          <Button
            fullWidth
            type='submit'
            variant='contained'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
              paddingY: 1.5,
              marginTop: 3,
              borderRadius: '0.75rem',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: LIGHT_GRAY,
                opacity: 0.9,
                boxShadow: 'none',
              },
            }}
          >
            {mode === 'register' ? 'CADASTRAR' : 'ENTRAR'}
          </Button>
        </Box>

        <Divider sx={{ marginY: 3 }}>
          <Typography variant='body2' sx={{ color: PRIMARY_ORANGE }}>
            ou
          </Typography>
        </Divider>

        <Button
          fullWidth
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: 'blue',
            fontWeight: 'bold',
            paddingY: 1.5,
            borderRadius: '0.75rem',
            textTransform: 'none',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: 'grey.100',
            },
          }}
          startIcon={
            <Box
              component='img'
              src={'/icon_google.png'}
              alt='G'
              sx={{
                backgroundColor: 'trasparent',
                width: '80%',
                objectFit: 'cover',
              }}
            />
          }
        >
          Google
        </Button>

        {/* Link para alternância entre modos */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            marginBottom: 2,
          }}
        >
          <Typography variant='body2' sx={{ color: 'grey.400' }}>
            {mode === 'register'
              ? 'Já tem conta? '
              : 'Não tem conta? '}
            <span
              onClick={() =>
                setMode(mode === 'register' ? 'login' : 'register')
              }
              style={{
                color: PRIMARY_ORANGE,
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {mode === 'register'
                ? 'acesse seu Login'
                : 'cadastre-se'}
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

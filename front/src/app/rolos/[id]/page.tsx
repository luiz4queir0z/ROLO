/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  TextField,
  IconButton,
  Drawer,
  Grid,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// Dados mock
const mockChats = [
  {
    id: 1,
    product: 'Cadeira Gamer',
    user1: { id: 1, name: 'John Doe', avatar: '/avatar_johndoe.jpg' },
    user2: { id: 2, name: 'Você', avatar: '/avatar_voce.jpg' },
    status: 'online',
  },
  {
    id: 2,
    product: 'Produto 1',
    user1: { id: 3, name: 'Ana Julia', avatar: '' },
    user2: { id: 2, name: 'Você', avatar: '/avatar_voce.jpg' },
    status: 'offline',
  },
];

const mockMessages: Record<
  number,
  Array<{
    id: number;
    sender_id: number;
    content: string | { img: string; title: string };
    status: string;
    created_at: string;
    self: boolean;
    type?: 'product';
  }>
> = {
  1: [
    {
      id: 1,
      sender_id: 1,
      content: 'Oi! Está disponível?',
      status: 'sent',
      created_at: '21:00',
      self: false,
    },
    {
      id: 2,
      sender_id: 2,
      content: 'Sim, está sim 🙂',
      status: 'delivered',
      created_at: '21:01',
      self: true,
    },
    {
      id: 3,
      sender_id: 1,
      content: 'Ótimo! Posso retirar hoje à noite?',
      status: 'read',
      created_at: '21:02',
      self: false,
    },
    {
      id: 4,
      sender_id: 2,
      content: 'Pode sim, me avise quando chegar!',
      status: 'delivered',
      created_at: '21:03',
      self: true,
    },
  ],
  2: [
    {
      id: 1,
      sender_id: 3,
      content: 'Olá!',
      status: 'sent',
      created_at: '21:00',
      self: false,
    },
    {
      id: 2,
      sender_id: 2,
      content: 'Oi, Julia!',
      status: 'delivered',
      created_at: '21:01',
      self: true,
    },
  ],
};

const otherGallery = [
  {
    id: 1,
    img: 'https://placehold.co/160/D9D9D9/ffffff?text=PRODUCT',
    title: 'as 1',
  },
  {
    id: 2,
    img: 'https://placehold.co/160/FFD700/ffffff?text=PRODUCT',
    title: 'vezes 2',
  },
  {
    id: 3,
    img: 'https://placehold.co/160/87CEEB/ffffff?text=PRODUCT',
    title: 'penso 3',
  },
];
const userGallery = [
  {
    id: 1,
    img: 'https://placehold.co/160/FF6347/ffffff?text=PRODUCT',
    title: 'eu 4',
  },
  {
    id: 2,
    img: 'https://placehold.co/160/40E0D0/ffffff?text=PRODUCT',
    title: 'quero 5',
  },
  {
    id: 3,
    img: 'https://placehold.co/160/8A2BE2/ffffff?text=PRODUCT',
    title: 'm 6',
  },
];

export default function ChatView() {
  const params = useParams();
  const chatId = Number(params.id);

  // Busca os dados do chat e mensagens pelo id
  const chat = mockChats.find((c) => c.id === chatId);
  const [messages, setMessages] = useState(mockMessages[chatId] ?? []);
  const [input, setInput] = useState('');
  const [drawerUserOpen, setDrawerUserOpen] = useState(false);
  const [drawerOtherOpen, setDrawerOtherOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (!chat) {
    return (
      <Box
        sx={{
          bgcolor: '#232428',
          minHeight: '100vh',
          px: 2,
          py: 3,
          maxWidth: 400,
          mx: 'auto',
          color: '#fff',
        }}
      >
        <Typography variant='h6' sx={{ color: '#FE733B' }}>
          Chat não encontrado
        </Typography>
      </Box>
    );
  }

  const otherUser = chat.user1.name !== 'Você' ? chat.user1 : chat.user2;
  const myself = chat.user1.name === 'Você' ? chat.user1 : chat.user2;

  // Handler para enviar mensagem
  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender_id: myself.id,
        content: input,
        status: 'sent',
        created_at: '21:05',
        self: true,
      },
    ]);
    setInput('');
  };

  // Handler enviar produto para o chat
  const sendProductToChat = (product: any) => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender_id: myself.id,
        content: product,
        status: 'sent',
        created_at: '21:05',
        self: true,
        type: 'product',
      },
    ]);
  };
  const renderMessage = (msg: any) => {
    if (
      msg.type === 'product' &&
      msg.content &&
      typeof msg.content !== 'string'
    ) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: msg.self ? 'flex-end' : 'flex-start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid',
              borderColor: msg.self ? '#FE733B' : '#dcdcdc',
              borderRadius: 2,
              p: 1,
              bgcolor: '#272A30',
            }}
          >
            <Box
              component='img'
              src={msg.content.img}
              sx={{ width: 80, height: 80, borderRadius: 2 }}
            />
            <Typography variant='caption' sx={{ color: '#fff', mt: 0.5 }}>
              {msg.content.title}
            </Typography>
          </Box>
          <Typography variant='caption' sx={{ color: '#dcdcdc', mt: 0.5 }}>
            {msg.created_at}
          </Typography>
        </Box>
      );
    }
    // Mensagem de texto padrão
    return (
      <Box>
        {msg.content}
        <Box
          sx={{
            display: 'flex',
            justifyContent: msg.self ? 'flex-end' : 'flex-start',
            mt: 0.5,
          }}
        >
          <Typography variant='caption' sx={{ color: '#dcdcdc' }}>
            {msg.created_at}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        bgcolor: '#232428',
        minHeight: '100vh',
        py: 2,
        px: 2,
        maxWidth: 400,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* Cabeçalho do chat (dinâmico) */}
      <Box
        sx={{
          mb: 2,
          pb: 1,
          borderBottom: '1px solid #FE733B',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <IconButton
          onClick={() => setDrawerOtherOpen(true)}
          aria-label='Galeria Outro'
          sx={{ bgcolor: '#272A30' }}
        >
          <Avatar src={otherUser.avatar || ''} />
        </IconButton>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant='subtitle2'
            sx={{ color: '#FE733B', fontWeight: 'bold' }}
          >
            {chat.product}
          </Typography>
          <Typography variant='body2' sx={{ color: '#fff', fontWeight: 500 }}>
            {otherUser.name}{' '}
            {chat.status === 'online' && (
              <span style={{ color: '#24F87A', fontSize: '0.85em' }}>•</span>
            )}
          </Typography>
        </Box>

        {/* Botão Galeria do usuário logado (Drawer à direita) */}
        <IconButton
          onClick={() => setDrawerUserOpen(true)}
          aria-label='Minha Galeria'
          sx={{ bgcolor: '#272A30' }}
        >
          <Avatar src={myself.avatar || ''} />
        </IconButton>
      </Box>

      {/* Mensagens */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          mb: 2,
          maxHeight: '68vh',
          overflowY: 'auto',
        }}
      >
        {messages.map((msg) => (
          <Box
            key={msg.id}
            sx={{
              display: 'flex',
              flexDirection: msg.self ? 'row-reverse' : 'row',
              alignItems: 'flex-end',
            }}
          >
            <Avatar
              src={msg.self ? chat.user2.avatar : otherUser.avatar}
              sx={{
                width: 30,
                height: 30,
                ml: msg.self ? 1 : 0,
                mr: msg.self ? 0 : 1,
              }}
            />
            <Box
              sx={{
                maxWidth: '75%',
                bgcolor:
                  msg.type === 'product'
                    ? 'transparent'
                    : msg.self
                      ? '#FE733B'
                      : '#272A30',
                color: '#fff',
                p: msg.type === 'product' ? 0 : 1.5,
                borderRadius: msg.self
                  ? '16px 16px 0px 16px'
                  : '16px 16px 16px 0px',
                fontSize: 15,
                wordBreak: 'break-word',
                boxShadow:
                  msg.self && msg.type !== 'product'
                    ? '0 1px 6px #FE733B33'
                    : 'none',
              }}
            >
              {renderMessage(msg)}
            </Box>
          </Box>
        ))}
        <div ref={messagesEndRef}/>
      </Box>

      {/* Campo de envio de mensagem */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#272A30',
          borderRadius: 2,
          px: 2,
          py: 1,
          mb: 1,
        }}
      >
        <TextField
          variant='standard'
          placeholder='Digite sua mensagem...'
          sx={{ flex: 1, color: '#fff' }}
          InputProps={{
            disableUnderline: true,
            style: { color: '#fff' },
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
        />
        <IconButton color='primary' onClick={sendMessage}>
          <SendIcon sx={{ color: '#FE733B' }} />
        </IconButton>
      </Box>

      {/* Drawer: galeria do outro usuário */}
      <Drawer
        anchor='left'
        open={drawerOtherOpen}
        onClose={() => setDrawerOtherOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '100%', sm: 340 },
              bgcolor: '#232428',
              color: '#fff',
              p: 3,
            },
          },
        }}
      >
        <Typography variant='h5' sx={{ mb: 3, color: '#FE733B' }}>
          Galeria de {otherUser.name}
        </Typography>
        <Grid container spacing={2} columns={2}>
          {otherGallery.map((p) => (
            <Grid key={p.id} size={1}>
              <Box
                sx={{
                  borderRadius: 2,
                  bgcolor: '#272A30',
                  p: 1,
                  textAlign: 'center',
                  cursor: 'pointer',
                  width: '100%',
                  height: '100%',
                }}
                onClick={() => {
                  sendProductToChat(p);
                  setDrawerUserOpen(false);
                }}
              >
                <Box
                  component='img'
                  height={100}
                  width='100%'
                  src={p.img}
                  sx={{ objectFit: 'cover' }}
                />
                <Typography fontSize={14} align='left' sx={{ mt: 1 }}>
                  {p.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Drawer>

      {/* Drawer: sua galeria (direita) */}
      <Drawer
        anchor='right'
        open={drawerUserOpen}
        onClose={() => setDrawerUserOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '100%', sm: 340 },
              bgcolor: '#232428',
              color: '#fff',
              p: 3,
            },
          },
        }}
      >
        <Typography variant='h5' sx={{ mb: 3, color: '#FE733B' }}>
          Sua Galeria
        </Typography>
        <Grid container spacing={1.5} columns={2}>
          {userGallery.map((p) => (
            <Grid key={p.id} size={1}>
              <Box
                sx={{
                  borderRadius: 2,
                  bgcolor: '#272A30',
                  p: 1,
                  textAlign: 'center',
                  cursor: 'pointer',
                  width: '100%',
                  height: '100%',
                }}
                onClick={() => {
                  sendProductToChat(p);
                  setDrawerUserOpen(false);
                }}
              >
                <Box
                  component='img'
                  height={100}
                  width='100%'
                  src={p.img}
                  sx={{ objectFit: 'cover' }}
                />
                <Typography fontSize={14} align='left' sx={{ mt: 1 }}>
                  {p.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Drawer>
    </Box>
  );
}

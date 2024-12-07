import React from 'react';
import { TextField, Button, Box, Typography, Card } from '@mui/material';
import { User } from './types';
import { Controller, useForm } from 'react-hook-form';

function UserForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data Submitted: ', data);
  };

  return (
    <Card
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      className={'user-form-container'}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        backgroundColor: 'primary',
        padding: '50px',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Cadastro de Usuário
      </Typography>
      {/* Campo: Nome */}
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: 'Nome é obrigatório.' }}
        render={({ field }: { field: any }) => (
          <TextField
            {...field}
            className={'control-field'}
            placeholder="Nome"
            fullWidth
            size={'small'}
            margin="normal"
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
        )}
      />

      {/* Campo: Idade */}
      <Controller
        name="age"
        control={control}
        defaultValue=""
        rules={{
          required: 'Idade é obrigatória.',
          validate: (value: number) =>
            value > 0 || 'A idade deve ser um número positivo.',
        }}
        render={({ field }: { field: any }) => (
          <TextField
            {...field}
            className={'control-field'}
            placeholder="Idade"
            type="number"
            fullWidth
            size={'small'}
            margin="normal"
            error={!!errors.age}
            helperText={errors?.age?.message}
          />
        )}
      />

      {/* Campo: Email */}
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'E-mail é obrigatório.',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'E-mail inválido.',
          },
        }}
        render={({ field }: { field: any }) => (
          <TextField
            {...field}
            className={'control-field'}
            placeholder="E-mail"
            type="email"
            fullWidth
            size={'small'}
            margin="normal"
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
        )}
      />

      {/* Campo: Senha */}
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: 'Senha é obrigatória.' }}
        render={({ field }: { field: any }) => (
          <TextField
            {...field}
            className={'control-field'}
            placeholder="Senha"
            type="password"
            fullWidth
            size={'small'}
            margin="normal"
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Salvar
      </Button>
    </Card>
  );
}

export default UserForm;

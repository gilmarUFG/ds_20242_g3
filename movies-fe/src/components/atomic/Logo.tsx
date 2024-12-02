import { Grid2 } from '@mui/material';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { colors } from '../../styles/colors';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();
  function handleNavigation() {
    navigate('/assista-ai');
  }

  return (
    <Grid2
      onClick={() => handleNavigation()}
      display={'flex'}
      alignItems={'center'}
      sx={{ gap: 1, textDecoration: 'none', cursor: 'pointer' }}
    >
      <MovieFilterIcon color={'info'} fontSize="large" />
      <h1 style={{ color: colors.white }}>Assista AI</h1>
    </Grid2>
  );
}

export default Logo;

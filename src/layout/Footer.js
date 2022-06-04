import { Link, Typography } from '@mui/material';
import { Container } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../theme/elements/layoutStyles';
import { iconStyles } from '../theme/components';

function Footer() {
  const { icon } = iconStyles();
  const { footer } = styles();
  return (
    <footer className={footer}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            gap: '1rem',
          }}
        >
          <Link
            className={icon}
            href="https://www.linkedin.com/in/yaizavc/"
            target="_blank"
          >
            <LinkedInIcon fontSize="lg" />
          </Link>
          <Link
            className={icon}
            href="https://github.com/Yaiza16"
            target="_blank"
          >
            <GitHubIcon fontSize="lg" />
          </Link>
        </Container>
        <Typography variant="overline">Yaiza Vallejo Caro</Typography>
      </Container>
    </footer>
  );
}

export default Footer;

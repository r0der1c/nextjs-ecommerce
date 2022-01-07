import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from 'components/ProTip';
import Link from 'components/Link';
import Copyright from 'components/Copyright';
import Layout from 'components/Layout';

export default function About() {
  return <Layout>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/" color="secondary">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  </Layout>
}

// About.getLayout = page => <Layout> {page} </Layout>
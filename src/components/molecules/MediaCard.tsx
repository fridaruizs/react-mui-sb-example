'use client';
import * as React from 'react';
import { MouseEventHandler } from 'react';

import Image from 'next/image';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton/Skeleton';

import { catApiService } from '@/services/catApi';

export default function MediaCard({
  heading,
  text,
  main,
  secondary,
}: {
  heading: string;
  text: string;
  main: { text: string; href?: string; onclick?: any };
  secondary?: { text: string; href: string };
}) {
  const [catPhotoUrl, setCatPhotoUrl] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(true);

  const styles = {
    button: {
      color: 'primary.contrastText',
    },
  }

  React.useEffect(() => {
    catApiService
      .fetchRandomCatPhotoUrl()
      .then((url) => {
        setCatPhotoUrl(url);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <Skeleton variant="rectangular" width={500} height={300} />
  ) : (
    <Card>
      {catPhotoUrl && (
        <Image
          alt="Random Cat"
          src={catPhotoUrl}
          width={640}
          height={480}
          style={{
            maxWidth: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={'primary.main'}>
          {heading}
        </Typography>
        <Typography variant="body2" color="primary.dark">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={main.href} onClick={main.onclick} sx={styles.button}>
          {main.text}
        </Button>
        {secondary && (
          <Button size="small" href={secondary.href}>
            {secondary.text}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

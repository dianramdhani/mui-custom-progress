import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

// sumber: https://www.figma.com/file/qbCjd0iuij251vvpAtTyYy/Kartuku?node-id=9%3A1052&mode=dev

export default function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing={2} direction="row">
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
      <CircularProgress
        variant="determinate"
        value={progress}
        sx={{
          zoom: 0.5,
          position: 'relative',
          width: '250px !important',
          height: '250px !important',

          '&:before': {
            content: '""',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
            width: 'calc(100% + 20px)',
            height: 'calc(100% + 20px)',
            background:
              'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="278" height="278" viewBox="0 0 278 278" fill="none"><g filter="url(%23filter0_dd_9_1051)"><path d="M264 139C264 208.036 208.036 264 139 264C69.9644 264 14 208.036 14 139C14 69.9644 69.9644 14 139 14C208.036 14 264 69.9644 264 139ZM46.2455 139C46.2455 190.227 87.7731 231.754 139 231.754C190.227 231.754 231.754 190.227 231.754 139C231.754 87.7731 190.227 46.2455 139 46.2455C87.7731 46.2455 46.2455 87.7731 46.2455 139Z" fill="%231F65E6"/></g><defs><filter id="filter0_dd_9_1051" x="0" y="0" width="278" height="278" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="5"/><feColorMatrix type="matrix" values="0 0 0 0 0.0689062 0 0 0 0 0.261003 0 0 0 0 0.6125 0 0 0 0.6 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_1051"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-4" dy="-4"/><feGaussianBlur stdDeviation="5"/><feColorMatrix type="matrix" values="0 0 0 0 0.345313 0 0 0 0 0.508041 0 0 0 0 0.8125 0 0 0 0.6 0"/><feBlend mode="normal" in2="effect1_dropShadow_9_1051" result="effect2_dropShadow_9_1051"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_9_1051" result="shape"/></filter></defs></svg>\') center no-repeat',
          },

          '.MuiCircularProgress-svg': {
            position: 'relative',
            zIndex: 1,
          },

          '.MuiCircularProgress-circle': {
            color: '#fff',
            r: 19.2,
            strokeWidth: 5.9,
            strokeLinecap: 'round',
          },
        }}
      />
    </Stack>
  );
}

// pages/index.js
import Link from 'next/link';

import * as React from 'react';
import Button from '@mui/material/Button';

const MyComponent = () => {
    return (
     <Button variant="contained">Hello World</Button>
    );
};

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">Go to About</Link>

      <MyComponent />
    </div>
  );
}

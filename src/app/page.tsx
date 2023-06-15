import { Suspense } from 'react'
import PhotoSlider from '@/components/photoslider'
import styles from './home.module.css'

export default function Home() {
  const slides = [
    {url: '/image-1.jpg', title: 'Sofa'},
    {url: '/image-2.jpg', title: 'Sofa-2'},
    {url: '/image-3.jpg', title: 'Silla-1'},
    {url: '/image-4.jpg', title: 'Silla-2'}
  ];

  return (
    <Suspense>
      <PhotoSlider slides={slides} parentWidth={800} parentHeight={450}/>
      <div>Home page</div>
    </Suspense>
  )
}

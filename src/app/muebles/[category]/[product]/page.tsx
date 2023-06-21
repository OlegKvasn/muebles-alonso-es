/* eslint-disable @next/next/no-img-element */
import styles from './product.module.css'
// import Sidebar from '@/components/sidebar';
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchProduct } from '@/contentful/productsMuebles' 
import Image from 'next/image';
import RichText from '@/contentful/RichText';


const ProductDetails = async({ params }: { params: { product: string } }) => {
  const product = await fetchProduct({ slug: params.product, preview: draftMode().isEnabled })
  	if (!product) {
		return notFound()
	}

  return ( 
    <div className={styles.container}>
      <div className={styles.banner}>
        {product.images && (
					<img
						src={product.images[0].src}
						srcSet={`${product.images[0].src}?w=800 1x, ${product.images[0].src} 2x`}
						width={600}
						height={400}
						alt={product.images[0].alt}
					/>
				)}
        <h2>{product.title}</h2>
      </div>
      <div className={styles.info}>
        <p>{`Price: ${product.price} €`}</p>
      </div>
      <div className={styles.description}>
        <h3>Details:</h3>
        <RichText document={product.description} />
      </div>
    </div>
   );
}
 
export default ProductDetails;
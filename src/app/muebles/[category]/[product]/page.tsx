/* eslint-disable @next/next/no-img-element */
import styles from './product.module.css'
// import Sidebar from '@/components/sidebar';
import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { fetchProduct, fetchAllProducts } from '@/contentful/productsMuebles' 
import RichText from '@/contentful/RichText';

interface ProductPageParams {
	product: string
}
interface ProductPageProps {
	params: ProductPageParams
}

// products can be statically generated at build time with Next.js.
export async function generateStaticParams(): Promise<ProductPageParams[]> {
	const products = await fetchAllProducts({ preview: false })
	return products.map((product) => ({ product: product.titleSlug }))
}

export async function generateMetadata({ params }: ProductPageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const product = await fetchProduct({ slug: params.product, preview: draftMode().isEnabled })
	if (!product) {
		return notFound()
	}
	return {
		title: product.title,
	}
}


const ProductDetails = async({ params }: ProductPageProps) => {
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
						srcSet={`${product.images[0].src}?fit=fill`}
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
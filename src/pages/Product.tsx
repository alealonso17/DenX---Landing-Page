import ProductHero from "../components/layout/product-page/ProductHero";
import ProductSoftwareCard from "../components/layout/product-page/ProductSoftwareCard";


export default function Home(){
    return(
        <main className='flex flex-col items-center justify-center'>
            <ProductHero />
            <ProductSoftwareCard />
        </main>
    )
}
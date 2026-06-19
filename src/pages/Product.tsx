import ProductHero from "../components/product-page/ProductHero";
import ProductSoftwareCard from "../components/product-page/ProductSoftwareCard";
import ProductComparitionSection from "../components/product-page/ProductComparitionSection";
import ProductOperationsSection from "../components/product-page/ProductOperationsSection";
import ProductIntelligentProcessingSection from "../components/product-page/ProductIntelligentProcessingSection";
import ProductTestimonialsSection from "../components/product-page/ProductTestimonialsSection";

export default function Home(){
    return(
        <main className='relative flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,#12B98112,transparent_34%),radial-gradient(circle_at_80%_20%,#ffffff,transparent_28%),#FBF9F9]'>
            <div className='pointer-events-none absolute left-[-10rem] top-32 h-96 w-96 rounded-full bg-[#12B981]/10 blur-3xl' />
            <div className='pointer-events-none absolute right-[-8rem] top-[42rem] h-[28rem] w-[28rem] rounded-full bg-white/80 blur-3xl' />
            <div className='pointer-events-none absolute left-1/2 top-[88rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#12B981]/8 blur-3xl' />
            <div className='relative z-10 flex w-full flex-col items-center justify-center'>
                <ProductHero />
                <ProductSoftwareCard />
                <ProductComparitionSection />
                <ProductOperationsSection />
                <ProductIntelligentProcessingSection />
                <ProductTestimonialsSection />
            </div>
        </main>
    )
}
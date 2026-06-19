import Button from "../ui/Button";
import PlayIcon from "../../../assets/svg/PlayIcon";

export default function ProductHero() {
    return(
        <section className='flex h-auto w-full flex-col items-center justify-center px-4'>
            <h1 className='mx-auto mb-6 max-w-4xl pt-20 text-center text-4xl font-bold leading-tight tracking-tight text-neutral-primary sm:pt-24 sm:text-5xl md:pt-30 md:text-[59px]'>Stop overpaying your <br className="hidden sm:block" /> suppliers without realizing it.</h1> 
            <p className='mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-neutral-secondary opacity-50 sm:text-base'>DenX automates the comparison of purchase orders, delivery notes, and invoices to detect discrepancies instantly, saving you hours of manual review.</p>
            <div className='flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-10'>
                <Button text='Request Access' type='primary' />
                <Button text='See how it works' type='outline' icon={<PlayIcon size={20} />} />
            </div>
        </section>
    )
}
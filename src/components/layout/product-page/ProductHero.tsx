import Button from "../ui/Button";
import PlayIcon from "../../../assets/svg/PlayIcon";

export default function ProductHero() {
    return(
        <section className='w-full h-auto flex flex-col items-center justify-center'>
            <h1 className='font-display-lg text-display-lg md:text-[59px] font-bold tracking-tight text-neutral-primary mb-6 max-w-4xl mx-auto leading-tight text-center pt-30'>Stop overpaying your <br /> suppliers without realizing it.</h1> 
            <p className='text-center opacity-40 font-body-lg text-body-lg text-neutral-secondary mb-10 max-w-2xl mx-auto'>DenX automates the comparison of purchase orders, delivery notes, and invoices to detect discrepancies instantly, saving you hours of manual review.</p>
            <div className='flex items-center justify-center gap-10'>
                <Button text='Request Access' type='primary' />
                <Button text='See how it works' type='outline' icon={<PlayIcon size={20} />} />
            </div>
        </section>
    )
}
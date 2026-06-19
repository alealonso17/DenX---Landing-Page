import HeroContact from "../components/contact-page/HeroContact";
import ContactForm from "../components/contact-page/ContactForm";


export default function Contact() {
  return (
    <main className='relative flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,#12B98112,transparent_34%),radial-gradient(circle_at_80%_20%,#ffffff,transparent_28%),#FBF9F9]'>
      <HeroContact />
      <ContactForm />
    </main>
  )
}

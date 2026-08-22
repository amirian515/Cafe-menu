import { SiInstagram, SiTelegram, SiWhatsapp } from "@icons-pack/react-simple-icons";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="flex justify-between gap-6 md:gap-8 text-sm md:text-base">

         <div >
                <h3 className="text-yellow-500 font-bold md:text-lg">کافه لوکس</h3>
                <p className=" md:text-sm text-xs text-gray-400 mt-2 max-w-50">
                    تجربه‌ای لوکس از طعم و آرامش، در قلب شهر شما.
                </p>
         </div>

        <div>
            <h4 className="font-bold mb-3 text-right">دسترسی سریع</h4>
            <ul className="flex flex-col gap-2 md:text-sm text-xs text-gray-400 text-right">
                <li>خانه</li>
                <li>منو</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
            </ul>
        </div>
        <div>
        <h4 className="font-bold mb-3 text-right">تماس با ما</h4>
        <ul className="flex flex-col gap-2 md:text-sm text-xs text-gray-400 text-right">
            <li>تهران، خیابان ولیعصر</li>
            <li>۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li>info@cafeluxe.com</li>
        </ul>
        </div>

        <div>
        <h4 className="font-bold mb-3 text-right">ما را دنبال کنید</h4>
        <div className="flex flex-col md:flex-row gap-3 items-end">
                    <a href="#" className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-full">
                    <SiInstagram size={16} color="#fff" />
                    </a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-full">
                    <SiWhatsapp size={16} color="#fff" />
                    </a>
                    <a href="#" className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-full">
                    <SiTelegram size={16} color="#fff" />
                    </a>
        </div>
        </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
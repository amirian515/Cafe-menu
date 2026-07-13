import { SiInstagram, SiTelegram, SiWhatsapp } from "@icons-pack/react-simple-icons";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="flex justify-between gap-8">

         <div>
                <h3 className="text-yellow-500 font-bold text-lg">کافه لوکس</h3>
                <p className="text-sm text-gray-400 mt-2 max-w-[200px]">
                    تجربه‌ای لوکس از طعم و آرامش، در قلب شهر شما.
                </p>
         </div>

        <div>
            <h4 className="font-bold mb-3">دسترسی سریع</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
                <li>خانه</li>
                <li>منو</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
            </ul>
        </div>
        <div>
        <h4 className="font-bold mb-3">تماس با ما</h4>
        <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>تهران، خیابان ولیعصر</li>
            <li>۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li>info@cafeluxe.com</li>
        </ul>
        </div>

        <div>
        <h4 className="font-bold mb-3">ما را دنبال کنید</h4>
        <div className="flex gap-3">
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
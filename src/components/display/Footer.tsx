import { Phone } from "lucide-react";
import FormContact from "./FormContact";

const Footer = () => {
  return (
    <footer id="footer" className="footer  bg-primary py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 container gap-3">
        <div className="flex flex-col gap-3 text-white items-center sm:items-start">
          <h3 className="text-2xl font-bold tracking-[0.1rem] science-font ">
            Nous Contacter
          </h3>
          <p className="text-center sm:text-start">
            N'hesitez pas à nous contacter si vous avez des questions
          </p>
          <p className="flex gap-2 font-bold items-center">
            <Phone className="h-4 w-4 " /> +261 346810300
          </p>
        </div>
        <div>
          <FormContact />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center mt-8 science-font  text-white">
        <p className="text-3xl">{"created by  persi".toLocaleUpperCase()}</p>
        <p className="text-sm">Copyright © 2025 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

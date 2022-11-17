import { GlobeHemisphereEast, FacebookLogo, WhatsappLogo, InstagramLogo } from 'phosphor-react'

export function Cards() {
    return (
        <>
            <div className="flex m-auto w-96  border rounded-full pointer hover:bg-[#5c5c5c9a] transition-colors">
                <a href='https://www.compumar.com.br' style={{display: "ruby"}} className="w-96 text-center m-auto pt-4 pb-4 pl-11 pr-11 text-white text-xl hover:text-[#81D8F7] transition-colors">
                    <GlobeHemisphereEast size={32} className="mr-2" color="#ffffff" weight="thin" />www.compumar.com.br</a>
            </div>
            <div className="flex m-auto mt-2 w-96  border rounded-full pointer hover:bg-[#5c5c5c9a] transition-colors">
                <a href='https://api.whatsapp.com/send/?phone=555136615222&text=Ol%C3%A1&app_absent=0' style={{display: "ruby"}} className="w-96 text-center m-auto pt-4 pb-4 pl-11 pr-11 text-white text-xl hover:text-[#81D8F7] transition-colors">
                    <WhatsappLogo size={32} className="mr-2" color="#ffffff" weight="thin" />WhatsApp</a>
            </div>
            <div className="flex m-auto mt-2 w-96  border rounded-full pointer hover:bg-[#5c5c5c9a] transition-colors">
                <a href='https://www.facebook.com/CompumarTecnologiaDaInformacao' style={{display: "ruby"}} className="w-96 text-center m-auto pt-4 pb-4 pl-11 pr-11 text-white text-xl hover:text-[#81D8F7] transition-colors">
                    <FacebookLogo size={32} className="mr-2" color="#ffffff" weight="thin" />Facebook</a>
            </div>
            <div className="flex m-auto mt-2 w-96  border rounded-full pointer hover:bg-[#5c5c5c9a] transition-colors">
                <a href='https://www.instagram.com/compumarinformatica/' style={{display: "ruby"}} className="w-96 text-center m-auto pt-4 pb-4 pl-11 pr-11 text-white text-xl hover:text-[#81D8F7] transition-colors">
                    <InstagramLogo size={32} className="mr-2" color="#ffffff" weight="thin" />Instagram</a>
            </div>
        </>
    )
}
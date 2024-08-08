import Image from "next/image";
import logo from '@/assets/aton-logo.png'

export default function Home() {
  return (
    <div className="flex w-[1440px] items-center justify-center mx-auto">
      <Image src={logo} alt="aton soluções técnicas" width={190} height={0} className="w-[190px] pt-10"/>
    </div>
  );
}

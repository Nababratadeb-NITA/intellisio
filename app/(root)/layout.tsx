import { Navbar } from "@/components/Nabvar";
import { Sidebar } from "@/components/Sidebar";


const RootLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  const isPro = true;

  return ( 
    <div className="h-full">
      <Navbar isPro={isPro} />
      <div className="hidden md:flex mt-16 h-full w-20 flex-col fixed inset-y-0">
        <Sidebar isPro={isPro} />
      </div>
      <main className="md:pl-20 pt-16 h-full">
        {children}
      </main>
    </div>
   );
}
 
export default RootLayout;
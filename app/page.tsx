import AnyQuestion from "@/components/AnyQuestion/AnyQuestion";
import HeaderHome from "@/components/HeaderHome/HeaderHome";
import SomeProject from "@/components/SomeProject/SomeProject";
import SummaryAboutMe from "@/components/SummaryAboutMe/SummaryAboutMe";
import Footer from "@/components/common/Footer/Footer";

export default function Home() {
  return (
    <main>
      <HeaderHome />
      <SomeProject />
      <SummaryAboutMe />
      <AnyQuestion />
      <Footer />
    </main>
  );
}

import AnyQuestion from "@/components/AnyQuestion/AnyQuestion";
import HeaderHome from "@/components/HeaderHome/HeaderHome";
import SomeProject from "@/components/SomeProject/SomeProject";
import SummaryAboutMe from "@/components/SummaryAboutMe/SummaryAboutMe";

export default function Home() {
  return (
    <main>
      <HeaderHome />
      <SomeProject />
      <SummaryAboutMe />
      <AnyQuestion />
    </main>
  );
}

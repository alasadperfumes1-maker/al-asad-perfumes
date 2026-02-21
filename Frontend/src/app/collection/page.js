import CollectionHero from "@/components/CollectionHero";
import CollectionSection from "@/components/CollectionSection";

export const metadata = {
  title: "Perfume Collection | Al Asad Perfumes",
  description:
    "Browse premium perfumes for men and women. Discover refined fragrances crafted for lasting impressions.",
};

export default function CollectionPage() {
  return (
    <>
      <CollectionHero />
      <CollectionSection />
    </>
  );
}

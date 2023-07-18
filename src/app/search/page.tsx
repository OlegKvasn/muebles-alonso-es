import ProductCard from "@/components/product/productCard";
import { draftMode } from "next/headers";
import { fetchAllProducts } from "@/contentful/productsMuebles";
import Grid from "@/components/grid";
import PageTitle from "@/components/pageTitle";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const searchQuery = searchParams.q ?? "";

  const products = await fetchAllProducts({ preview: draftMode().isEnabled });
  const searchedProducts = products.filter((e) => {
    const title = e.title.toLowerCase();
    const category = e.category.toLowerCase();

    return (
      title.includes(searchQuery.toLowerCase()) ||
      category.includes(searchQuery.toLowerCase())
    );
  });

  const resultsText = searchedProducts.length > 1 ? "results" : "result";

  return (
    <main>
      {searchQuery ? (
        <PageTitle>
          <p>
            {searchedProducts.length === 0
              ? "There are no products that match "
              : `Showing ${searchedProducts.length} ${resultsText} for `}
            <span>&quot;{searchQuery}&quot;</span>
          </p>
        </PageTitle>
      ) : null}
      {searchedProducts.length > 0 ? (
        <Grid>
          <ProductCard products={searchedProducts} />
        </Grid>
      ) : null}
    </main>
  );
}

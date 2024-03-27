import SearchBar from "./components/SearchBar/SearchBar";
import RecipeCard from "./components/SearchBar/RecipeCard/RecipeCard";
export default function Home() {
  return (
    <main className="pt-10">
      <SearchBar />
      <div className="grid grid-cols-1 gap-4 px-4 py-8 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </main>
  );
}

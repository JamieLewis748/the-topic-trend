  import { categories } from "@/constants";
  import fetchNews from "@/lib/fetchNews";


  const news: NewsResponse = await fetchNews(categories.join(","))

  async function Home() {
    return (
      <main>
  {/* Newslist */}
      </main>
    )
  }



  export default Home

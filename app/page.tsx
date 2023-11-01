  import { categories } from "@/constants";
  import fetchNews from "@/lib/fetchNews";
  import Newslist from "./Newslist";


  
  async function Home() {
    const news: NewsResponse = await fetchNews()    
  return (
      <main>
        <Newslist news={news}/>
      </main>
    )
  }



  export default Home

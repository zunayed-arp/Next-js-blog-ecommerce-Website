import Head from 'next/head'
import BlogHomePage from '../components/BlogHomePage'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import RecentBlogPost from '../components/RecentBlogPost'
import PopularPost from '../components/PopularPost'
import Pagination from '../components/Pagination'
import NewsLetter from '../components/NewsLetter'
import HeroSection from '../components/HeroSection'
import { useAuth } from '../hooks/useAuth'

export default function Home({ posts }) {

  const { contexts } = useAuth();
  const { user } = contexts;

  return (
    <>
      <Head>
        <title>Job Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection key={'fdsfasf'} />
      <div key={"dsfsdfsdafdsfjuwrjk"} className="flex flex-col items-center justify-center min-h-screen py-2 overflow-y-auto overflow-x-auto">
        {/**Featured Post */}
        <div key={'fdsfasdfsf'} className="container mx-auto px-4 m-2 flex justify-between ">
          <h1 className="text-2xl">Featured Posts</h1>
          <h1 className=" flex flex-row justify-end cursor-pointer"> <AiOutlineArrowLeft className='mt-1 opacity-25' /> <AiOutlineArrowRight className='mt-1' /> </h1>
        </div>
        <div key={'fdsfasdsfsdff'} className="grid grid-cols-3 xs:grid-cols-1 gap-4 container mx-auto px-4 xs:grid-cols-1  	">

          {
            posts.slice(0, 6).map((post) => <BlogHomePage key={post.id} post={post} />


            )
          }

        </div>


        {/**Poular This Week */}
        <div key={'fdsdfssfsdffasf'} className="container mx-auto px-4 py-6 m-2 flex justify-between ">
          <h1 className="text-2xl">Popular Post</h1>
          <h1 className=" flex flex-row justify-end border p-3 "> See All </h1>
        </div>
        <div key={'fdsfdfgrsrgregherasf'} className="grid grid-cols-3  xs:grid-cols-1 gap-4 container mx-auto px-4 xs:grid-cols-1  	">
          {
            posts.slice(0, 6).map((post) => <PopularPost key={post.id} post={post} />

            )
          }
        </div>

        {/**Recent Posts */}

        <div key={'fdsfrtrtrgasf'} className="container mx-auto px-4 py-6 m-2 flex justify-between ">
          <h1 className="text-2xl">Recent Post</h1>
        </div>
        <div key={'fdsfgererhteasf'} className="grid grid-cols-2  xs:grid-cols-1 gap-4 container mx-auto px-4 xs:grid-cols-1  	">
          {
            posts.slice(0, 8).map((post) => <RecentBlogPost key={post.id} post={post} />
                
              
            )
          }
        </div>

        <Pagination key={'fdsfasdfsdfsdaff'} />
        <NewsLetter key={'fdsfafdsfsadfsf'} />

      </div>
    </>
  )
}



export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()

  // console.log(data)

  return {
    props: {
      posts: data
    }
  }

}
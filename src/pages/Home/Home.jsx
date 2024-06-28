import { IoIosArrowRoundForward } from 'react-icons/io';
import JobData from '../../components/JobData/JobData';
import banner from '../../picture/banner.jpg'
import FAQSection from '../../components/FAQ/FAQSection';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import Reviews from '../../components/Reviews/Reviews';

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full">
            <p className="mb-5 text-5xl font-bold">
              The <span className='text-blue-900'>Easiest Way </span> to Get Your New Job
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>


      {/* Category Section */}
      <div className='mt-12 mb-12 space-y-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-2 '>Popular Categories</h1>
          <p className='text-slate-400 '>Search all the open positions on the web. Get your own personalized salary <br /> estimate. Read reviews on over 30000+ companies worldwide.</p>
        </div>

        <div>
          <Categories></Categories>

        </div>

      </div>

      <div className="divider"></div>

      {/* Jobs Section */}
      <div className='mt-12 mb-12 space-y-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-2 '>Your Ideal job awaits</h1>
          <p className='text-slate-400 '>Get latest job openings that best suits you.</p>
        </div>

        <div className='w-full container mx-auto'>
          <JobData></JobData>

          <div className='mt-8 text-center'>
            <Link className='btn btn-outline btn-primary' to="/job">
              <button className='flex items-center gap-2'>
                Show All Jobs
                <IoIosArrowRoundForward className='text-3xl' />
              </button>
            </Link>
          </div>
        </div>
      </div>



      {/* FAQ Section */}
      <div className='mb-8'>
        <FAQSection></FAQSection>
      </div>


      <div className="divider"></div>

      {/* Reviews */}
      <div className='space-y-8 mb-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-2 '>Reviews</h1>
          <p className='text-slate-400 '>Read what our customers are saying about us! Below you&apos;ll find a collection of <br /> reviews highlighting their experiences and feedback.</p>
        </div>

        <div>
          <Reviews></Reviews>
        </div>
      </div>

    </>
  );
};

export default Home;
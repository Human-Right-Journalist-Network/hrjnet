import React from 'react'
import MainLayout from '../../layouts/Index'


const Projects = () => {
  return (
    <MainLayout>
      <div className="flex grid-cols-1 md:grid-cols-2">
        <div className="row-span-4 grid-flow-col">
          <div className="flex gap-3 p-12">
            <p className="col-md-4 bg-black h-0.5 w-32 mt-2.5"></p>
            <p className="uppercase">Our Projects</p>
          </div>
          <p className="text-5xl text-left font-bold">Weekly cleanliness program in city</p>
        </div>
      </div>

      <div className="col-md-4 col-md-offset-4 bg-white p-12">
        <p>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id. Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget. Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui, varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.</p>
      </div>

      <div className="flex items-center flex-start bg-white p-12">
        <div className="mx-auto w-full">
          <img src="../assets/pro.png" className="img-responsive" alt="" />
        </div>
      </div>

      <div className="flex grid-cols-1 md:grid-cols-2 p-12">
        <div className="row-span-4 grid-flow-col">
          <p className="text-5xl text-left font-bold text-[#1D2130]">Some cool heading</p>
        </div>
      </div>

      <div className="col-md-4 col-md-offset-4 bg-white p-12">
        <p>Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper sit tellus adipiscing. Est sapien rhoncus sit vestibulum sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum felis interdum pharetra. Diam fermentum in lectus morbi at eget sit et quisque. Semper commodo viverra donec magna egestas nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim penatibus faucibus tempus. Arcu pharetra morbi bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi eu lectus suscipit sagittis, ultrices ut dui.</p>

        <ul className="list-disc">
          <li>Posuere sed pulvinar enim faucibus justo, cursus.</li>
          <li>In diam facilisi at sit convallis blandit blandit in.</li>
          <li>Maecenas odio orci lectus urna ante consequat erat non morbi.</li>
        </ul>

        <p>Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio orci lectus urna ante consequat erat non morbi.</p>
      </div>

      <div className="md:grid grid-cols-2 gap-12 p-12 bg-[#EBF0F9]">
        <div className="flex  gap-8 ">
          <img src="../assets/bulk.png" className="img-responsive h-12" alt="" />
          <p className="text-2xl font-bold font-Roboto mb-6">200+ Plantation in 1 week</p>
          {/* <p className=" text-sm font-Roboto mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> */}
        </div>

        <div>
          <div className="flex grid-cols-3">
            {/* <Carousel> */}
            {/* {donation_spendings.map((donation, index) => ( */}
            <img src="../assets/hr3.jpeg" className="img-responsive" alt="logo" />
            {/* ))} */}
            {/* </Carousel> */}
          </div>
        </div>

        <div>
          <div className="col-span-2">
            <span className="text-[12px] ine-clamp-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</span>
            <br />
            <button className="bg-[#70C174] text-white btn p-3 rounded mt-8">Donate Now</button>
          </div>
        </div>

        <div>
          <div className="col-span-2">
            <span className="text-[12px] ine-clamp-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</span>
            <br />
            <button className="bg-[#70C174] text-white btn p-3 rounded mt-8">Donate Now</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Projects
import chefService from "../../../assets/home/chef-service.jpg";

const BistroBossSection = () => {
  return (
    <div className="my-4">
      <div className="relative">
        {/* Background Image */}
        <div
          className="h-[300px] lg:h-[500px] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${chefService})` }}
        ></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-white lg:px-6 px-4 py-2 lg:py-8 lg:px-16 lg:py-12 rounded-md shadow-lg max-w-2xl text-center">
            <h1 className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-4">
              Bistro Boss
            </h1>
            <p className="text-sm lg:text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroBossSection;

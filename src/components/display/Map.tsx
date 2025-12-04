const Map = () => {
  return (
    <div className="container flex flex-col items-center justify-center py-9 gap-3">
      <p className="text-xl">Lieux:</p>
      <div className="w-9/12  h-[40vh] sm:w-8/12 max-w-2xl rounded-sm overflow-hidden">
        <img
          src="map.jpg"
          alt="img-map"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Map;

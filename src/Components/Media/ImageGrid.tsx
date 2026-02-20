interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <section id="images" className="flex flex-col gap-6 py-20">
      <h1 className="text-3xl font-share-tech-mono">Images</h1>
      <div className="h-[1px] bg-custom-teal-500 w-20"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-2">
        {images.map((img, index) => (
          <img key={index} src={img} className="w-full h-auto" />
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;

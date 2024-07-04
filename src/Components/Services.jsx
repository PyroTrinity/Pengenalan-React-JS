function ServicesItem ({imageSrc, title, description}){
    return(
        <div className="item w-72 px-10">
            <img src={imageSrc} alt="" />
            <div className="text-center">
                <h1 className="text-xl font-blod">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Services() {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-red-500 font-bold">
            WHAT WE SERVE
        </h1>
        <h1 className="text-4xl font-bold">
            Your Favorite Food <br/>
            Delivery Partner
        </h1>
      </div>

      <div className="flex justify-center">
        <ServicesItem
            imageSrc="/images/service-1.png"
            title="Easy To Order"
            description="You only need a few steps in ordering food"
        />
        <ServicesItem
            imageSrc="/images/service-2.png"
            title="Fastest Delivery"
            description="Fast delivery to your doorstep"
        />
        <ServicesItem
            imageSrc="/images/service-3.png"
            title="Best Quality"
            description="Customer support available round the clock"
        />
      </div>
    </div>
  );
}

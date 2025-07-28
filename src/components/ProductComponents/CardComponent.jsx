
import { Card } from "flowbite-react";


export function CardComponent({image, title, description}) {
  return (
    <Card
      className="max-w-sm"
    //   renderImage={() => <Image width={500} height={500} src={image} alt="image 1" />}
    >
      <img src={image} width={500} height={500} alt="image" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
        {description}
      </p>
    </Card>
  );
}

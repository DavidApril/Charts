import {Card, CardContent} from '@/components/ui/card';
import {Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel';

export const RepositoriesCarousel = () => {
  return (
    <Carousel
      opts={{
        align: 'center'
      }}
      className="w-full"
    >
      <CarouselContent className={'flex-1'}>
        {Array.from({length: 10}).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">R3p0 {index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  CardHeader,
  CardDescription,
  CardSkeleton
} from '@/components';
import {SpotifyTrack} from '@/interfaces';
import {SpotifyService} from '@/services';
import {useState, useEffect} from 'react';

export const TopSongsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [track, setTrack] = useState<SpotifyTrack>();

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  useEffect(() => {
    SpotifyService.getTrack('0YJ9FWWHn9EfnN0lHwbzvV')
      .then(r => setTrack(r))
      .catch(e => console.error({e}));
  }, [SpotifyService]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({length: 5}).map((_, index) => (
            <CarouselItem key={index}>
              {track
                ? <a href={track.external_urls.spotify} target="_blank" rel="noreferrer">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <img src={track.album.images[0].url} alt="Song" className="flex-1"/>
                      <CardHeader>{track.name}</CardHeader>
                      <CardDescription>{track.artists[0].name}</CardDescription>
                    </CardContent>
                  </Card>
                </a>
                : <CardSkeleton/>
              }
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Song {current} of {count}
      </div>
    </div>
  );
};

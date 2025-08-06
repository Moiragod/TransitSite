export interface CarouselItem {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

export interface CarouselProps {
  items: CarouselItem[];
} 
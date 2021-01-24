export default interface IBanner {
  name: string;
  image: ImageData;
  buttonPosition: 'left' | 'right';
  title: string;
  subtitle: string;
  ctaText: string;
}
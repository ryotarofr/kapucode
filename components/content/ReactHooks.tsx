import { CarouselCard } from "./Card2";

export const ReactHooks = ({ project }: { project: any }) => {
  return (
    <div>
      <div>○useState</div>
      <CarouselCard project={project} />
    </div>
  );
};

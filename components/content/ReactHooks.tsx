import { CarouselCard } from "./Card2";

export const ReactHooks = ({ project }: { project: any }) => {
  return (
    <div>
      <div className="text-2xl">ReactHooks</div>
      <CarouselCard project={project} />
    </div>
  );
};

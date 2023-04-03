import ChevronLeft from "@mui/icons-material/ChevronLeft";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

import { ReactHooks } from "../../components/content/ReactHooks";
import { projects } from "../../data/projects";

function Project({ project }: { project: any }) {
  const router = useRouter();

  let component;
  switch (project.slug) {
    case "reacthooks1":
      component = <ReactHooks project={project} />;
      break;
    case "reacthooks2dsd":
      component = <div>b test</div>;
      break;
    default:
      //いずれも一致しなかった場合;
      break;
  }

  return (
    <div>
      <div className="h-screen overflow-y-hidden">
        <div
          className="font-poppins w-screen border-b-[0.5px]  border-gray-300 px-4
               text-xl font-bold  "
        >
          <div
            className="tablet:rounded-none
            mobile:rounded-none
                     mx-auto flex flex-row 
               items-center justify-between "
          >
            <div
              className="cursor-pointer text-gray-400 hover:text-gray-700"
              onClick={() => router.push("/", "/", { shallow: true })}
            >
              <ChevronLeft />
            </div>
            <p className="text-center">{project.name}</p>
            <div
              className="invisible cursor-pointer rounded-md 
                px-2 text-gray-400 hover:bg-blue-100 hover:text-gray-700"
            >
              <i className="fa-sharp fa-solid fa-xmark fa-sm"></i>
            </div>
          </div>
        </div>
        <div
          className={`font-proxima
          tablet:rounded-none
                    mobile:rounded-none  mx-auto flex 
                    flex-col
                     items-center bg-white
                     `}
        >
          <div
            className="h-screen max-h-full
               w-full overflow-y-scroll "
          >
            <div className="flex justify-center">{/* <Slider images={project.images} /> */}</div>

            <div className="tablet:px-12 mobile:px-8 mx-auto flex max-w-3xl justify-start px-6">
              <div>
                {/* <b className="font-poppins">Description</b>
                <div
                  className="mt-1.5"
                  dangerouslySetInnerHTML={{
                    __html: project.long_description,
                  }}
                /> */}
                {/* {component} */}
              </div>
            </div>

            <div className="w-full">
              {/* componentを追加していく */}
              {component}
            </div>
            <div className="tablet:px-6 my-6 flex w-full flex-row justify-start px-12 sm:px-6">
              <div>
                <b className="font-poppins">Created on</b>
                <p className="mt-1.5 ">{project.date}</p>
              </div>
            </div>

            <div className="mb-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(params: GetServerSidePropsContext) {
  try {
    const data = projects.find((project: any) => project.slug.toLowerCase() == params.query.slug);
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        project: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Project;

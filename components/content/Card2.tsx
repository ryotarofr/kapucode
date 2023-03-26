import { Carousel } from "@mantine/carousel";
import { createStyles, Card, Text, Group, getStylesRef, rem } from "@mantine/core";
import { useReducer } from "react";
import { useSelector } from "react-redux";

import { INITIAL_STATE2, postReducer2, TOGGLE_BOOLEAN } from "../../features/postReducer";

const useStyles = createStyles((theme) => ({
  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    opacity: 0,
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
  },

  carouselIndicator: {
    "&[data-active]": {
      width: rem(16),
    },
    height: rem(4),
    transition: "width 250ms ease",
    width: rem(4),
  },
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

export function CarouselCard({ project }: { project: any }) {
  const { classes } = useStyles();
  const postList = useSelector((state: any) => state.posts.value);
  console.log(postList);
  // const slides = postList.map((item:any) => (
  //   <Carousel.Slide key={item.name}>
  //     <Items {...item} />
  //   </Carousel.Slide>
  // ));

  let component;
  switch (project.slug) {
    case "reacthooks1":
      component = postList.map((item: any) => (
        <Carousel.Slide key={item.name}>
          <Items {...item} />
        </Carousel.Slide>
      ));

      // component = (
      //   <Carousel.Slide>
      //     <Items />
      //   </Carousel.Slide>
      // );

      break;
    case "reacthooks2dsd":
      component = <div>b test</div>;
      break;
    default:
      //いずれも一致しなかった場合;
      break;
  }

  return (
    <Card radius="md">
      <Card.Section>
        <Carousel
          classNames={{
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
            root: classes.carousel,
          }}
          loop
          withIndicators
        >
          {component}
        </Carousel>
      </Card.Section>
    </Card>
  );
}

const useStyles2 = createStyles((theme) => ({
  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },
}));

function Items({ content, id, name, desc1, desc2 }: any) {
  const { classes } = useStyles2();
  // const postList = useSelector((state: any) => state.posts.value);
  // console.log(postList);

  const [state, dispatch] = useReducer(postReducer2, INITIAL_STATE2);
  const [state2, dispatch2] = useReducer(postReducer2, INITIAL_STATE2);
  const [state3, dispatch3] = useReducer(postReducer2, INITIAL_STATE2);
  // console.log(state2.isBool);

  const handleClick = () => {
    dispatch({ type: TOGGLE_BOOLEAN });
  };

  const handleClick2 = () => {
    dispatch2({ type: TOGGLE_BOOLEAN });
  };

  const handleClick3 = () => {
    dispatch3({ type: TOGGLE_BOOLEAN });
  };

  return (
    <div className="">
      <Text fw={600} fz="lg" pt={20}>
        {/* useStateについて */}
        {id == 1 && (
          <div className="text-cente mx-auto">
            const [
            <span
              className="cursor-pointer border-b border-gray-500 text-blue-500 hover:text-blue-800"
              onClick={handleClick}
            >
              {name[0]}
            </span>
            ,{" "}
            <span
              className="cursor-pointer border-b border-gray-500 text-blue-500 hover:text-blue-800"
              onClick={handleClick2}
            >
              {name[1]}
            </span>
            ] ={" "}
            <span
              className="cursor-pointer border-b border-gray-500 text-blue-500 hover:text-blue-800"
              onClick={handleClick3}
            >
              {name[2]}
            </span>
          </div>
        )}

        {/* useEffectについて */}
        {id == 2 && <div onClick={handleClick}>useEffect</div>}

        {/* useContextについて */}
        {id == 3 && <div>useContext</div>}
      </Text>

      {/* <div>
        const [<span onClick={handleClick}>state</span>, <span>setState</span>] ={" "}
        <span>useState()</span>
      </div> */}
      <Group mt="lg" position="apart">
        <Text fw={600} fz="xl">
          <div className=" border-b-2 px-2">説明</div>
        </Text>
      </Group>

      <Text fz="sm" mt="lg">
        {/* useStateについて */}
        {state.isBool ? (
          <div>
            <div className="text-stone-500">{desc1.a}</div>
            <div className=" text-blue-600">{desc2.a}</div>
          </div>
        ) : null}
        {state2.isBool ? (
          <div>
            <div className="text-stone-500">{desc1.b}</div>
            <div className=" text-blue-600">{desc2.b}</div>
          </div>
        ) : null}
        {state3.isBool ? (
          <div>
            <div className="text-stone-500">{desc1.c}</div>
            <div className=" text-blue-600">{desc2.c}</div>
          </div>
        ) : null}

        {/* useEffectについて */}
        {state || state2 || state3 ? <></> : null}

        {/* useContextについて */}
      </Text>
    </div>
  );
}

import { Carousel } from "@mantine/carousel";
import { createStyles, Card, Text, Group, Button, getStylesRef, rem } from "@mantine/core";
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

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export function CarouselCard({ project }: { project: any }) {
  const { classes } = useStyles();
  const postList = useSelector((state: any) => state.posts.value);
  const [state2, dispatch] = useReducer(postReducer2, INITIAL_STATE2);

  const handleClick = () => {
    dispatch({ type: TOGGLE_BOOLEAN });
  };

  let component;
  switch (project.slug) {
    case "reacthooks1":
      component = (
        <Carousel.Slide>
          <Items />
        </Carousel.Slide>
      );

      break;
    case "reacthooks2dsd":
      component = <div>b test</div>;
      break;
    default:
      //いずれも一致しなかった場合;
      break;
  }

  return (
    <Card padding="xl" radius="md" withBorder>
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

function Items({ handleClick1 }: any) {
  const { classes } = useStyles();
  const postList = useSelector((state: any) => state.posts.value);
  console.log(postList);

  const [state2, dispatch] = useReducer(postReducer2, INITIAL_STATE2);

  console.log(state2.isBool);

  // const booleanValue = useSelector((state: any) => state.isBool);
  // console.log(booleanValue);

  // const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: TOGGLE_BOOLEAN });
  };

  //

  // const handleFetch = () => {
  //   dispatch({ type: postActionKind.FETCH_START });

  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       dispatch({ payload: data, type: postActionKind.FETCH_SUCCESS });
  //     })
  //     .catch((err) => {
  //       dispatch({ type: postActionKind.FETCH_ERROR });
  //     });
  // };

  return (
    <div>
      <div>useState</div>
      <div>
        const [<span onClick={handleClick}>state</span>, <span>setState</span>] ={" "}
        <span>useState()</span>
      </div>
      {/* <div>this state: {state2.isBool ? <div>{postList[0].content}</div> : }</div> */}
      <Group mt="lg" position="apart">
        <Text fw={500} fz="lg">
          Forde, Norway
        </Text>
      </Group>

      <Text c="dimmed" fz="sm" mt="sm">
        {state2.isBool ? <div>{postList[0].content}</div> : <div>OFF</div>}
        {/* Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in
        ultimate comfort. Enjoy the view of the epic mountain range of Blegja and the Førdefjord. */}
      </Text>

      <Group mt="md" position="apart">
        <div>
          <Text className={classes.price} fw={500} fz="xl" span>
            397$
          </Text>
          <Text c="dimmed" fz="sm" span>
            {" "}
            / night
          </Text>
        </div>

        <Button radius="md">Book now</Button>
      </Group>
    </div>
  );
}

import { Carousel } from "@mantine/carousel";
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  card: {
    alignItems: "flex-start",
    backgroundPosition: "center",
    // backgroundSize: 'fit',
    display: "flex",
    flexDirection: "column",
    // height: rem(440),
    justifyContent: "space-between",
  },

  category: {
    color: theme.white,
    fontWeight: 700,
    opacity: 0.7,
    textTransform: "uppercase",
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(32),
    fontWeight: 900,
    lineHeight: 1.2,
    marginTop: theme.spacing.xs,
  },
}));

interface CardProps {
  category: string;
  image: string;
  title: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      bg="teal"
      // className={classes.card}
      p="xl"
      radius="md"
      shadow="md"

      // sx={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title className={classes.title} order={3}>
          {title}
        </Title>
      </div>
      <Button color="dark" variant="white">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    category: "nature",
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Best forests to visit in North America",
  },
  {
    category: "beach",
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Hawaii beaches review: better than you think",
  },
  {
    category: "nature",
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Mountains at night: 12 best locations to enjoy the view",
  },
  {
    category: "nature",
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Aurora in Norway: when to visit for best experience",
  },
  {
    category: "tourism",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Best places to visit this winter",
  },
  {
    category: "nature",
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Active volcanos reviews: travel at your own risk",
  },
];

export function CardsCarousel({ project }: { project: any }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  // const slides = data.map((item) => (
  //   <Carousel.Slide key={item.title}>
  //     <Card {...item} />
  //   </Carousel.Slide>
  // ));

  let component;
  switch (project.slug) {
    case "reacthooks1":
      component = data.map((item) => (
        <Carousel.Slide key={item.title}>
          <Card {...item} />
        </Carousel.Slide>
      ));
      break;
    case "reacthooks2dsd":
      component = <div>b test</div>;
      break;
    default:
      //いずれも一致しなかった場合;
      break;
  }

  return (
    <div className="w-fit">
      <Carousel
        align="start"
        // breakpoints={[{ maxWidth: 'sm', slideGap: rem(2), slideSize: '100%' }]}

        // slideGap="xl"
        // slideSize="100%"
        // slidesToScroll={1}
      >
        {component}
      </Carousel>
    </div>
  );
}

function Items() {
  return (
    <div>
      <div>useState</div>
      <div>
        const [<span>state</span>, <span>setState</span>] = <span>useState()</span>
      </div>
    </div>
  );
}

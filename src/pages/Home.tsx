import { Box, Input } from "@chakra-ui/react";
import gameFile from "../file/game.json";
import TextDisplay from "../components/TextDisplay";

const Header = () => (
  <Box
    position="sticky"
    top={0}
    h="150px"
    w="100%"
    pt={10}
    pl={10}
    bgGradient="linear(to-b, #0f171f 0%, rgba(0, 0, 0, 0) 100%)"
  >
    <Box>Text Adventure</Box>
  </Box>
);

const UserInput = () => (
  <Input
    placeholder="Tap your command"
    w="900px"
    position="fixed"
    variant="filled"
    bottom={0}
    margin={8}
    height={20}
    bg="#2d3238"
    color={"#909497"}
    _hover={{
      background: "#0f171f ",
    }}
    focusBorderColor="teal.500"
    _focus={{
      bg: "#2d3238",
    }}
  />
);

const Home = () => {
  return (
    <>
      <Box
        minH="100vh"
        maxH="100%"
        w="100%"
        bgGradient="linear(to-b, #0f171f, #343d47)"
        flexDirection="column"
        display="flex"
        alignItems="center"
      >
        <Header />

        <TextDisplay
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique faucibus cursus. Cras a turpis magna. Phasellus feugiat ligula sed placerat malesuada. Pellentesque finibus semper ultricies. Proin ac sem ullamcorper, fringilla sapien ut, congue nibh. Suspendisse potenti. In augue ex, aliquet ut nulla non, tincidunt dapibus ipsum. Proin quis pharetra massa. Nunc risus urna, fringilla quis imperdiet et, scelerisque at risus. Praesent risus lorem, placerat at maximus sed, elementum aliquam justo. Nunc eu molestie urna, at iaculis lacus. Cras pellentesque tellus urna, in feugiat lacus aliquam in. Ut congue efficitur ullamcorper. Aliquam non ex vestibulum, venenatis dui quis, viverra lorem. Nunc quis magna sit amet ligula faucibus bibendum.\n\nNunc diam erat, gravida ornare lectus sed, sagittis ultricies turpis. Donec lobortis sem id lorem tempor molestie. Cras tempus, nulla at accumsan porta, lorem lorem rutrum orci, vitae aliquet massa dui id lacus. Sed condimentum fringilla ipsum. Pellentesque lobortis enim nec fringilla tristique. Maecenas a diam nisl. Morbi maximus nisi non ipsum suscipit, sed ultricies ex pulvinar. Aliquam aliquam mattis porta. Suspendisse at feugiat tortor.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique faucibus cursus. Cras a turpis magna. Phasellus feugiat ligula sed placerat malesuada. Pellentesque finibus semper ultricies. Proin ac sem ullamcorper, fringilla sapien ut, congue nibh. Suspendisse potenti. In augue ex, aliquet ut nulla non, tincidunt dapibus ipsum. Proin quis pharetra massa. Nunc risus urna, fringilla quis imperdiet et, scelerisque at risus. Praesent risus lorem, placerat at maximus sed, elementum aliquam justo. Nunc eu molestie urna, at iaculis lacus. Cras pellentesque tellus urna, in feugiat lacus aliquam in. Ut congue efficitur ullamcorper. Aliquam non ex vestibulum, venenatis dui quis, viverra lorem. Nunc quis magna sit amet ligula faucibus bibendum."
          }
        />
        <UserInput />
      </Box>
    </>
  );
};

export default Home;

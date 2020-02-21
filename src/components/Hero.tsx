import { Flex, Heading } from "@chakra-ui/core";

type HeroProps = {
  title: string;
} & typeof defaultProps;

const defaultProps = {
  title: "with-chakra-ui"
};

export const Hero = ({ title }: HeroProps) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="10vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = defaultProps;

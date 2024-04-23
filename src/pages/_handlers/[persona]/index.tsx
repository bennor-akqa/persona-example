import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = (async ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      persona: params?.persona?.toString() ?? "?",
    },
  };
}) satisfies GetStaticProps;

export default function ExamplePage({
  persona,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <>Persona: {persona} </>;
}

import Head from "next/head";
import { FC } from "react";

const withHead = (Component: FC, title: string, description: string) => {
  const C = (props: any) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="discription" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...props} />
      </>
    );
  };

  return C;
};

export default withHead;

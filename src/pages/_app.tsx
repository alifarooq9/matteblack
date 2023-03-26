import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as JotaiProvider } from "jotai";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <JotaiProvider>
        <Component {...pageProps} />
      </JotaiProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

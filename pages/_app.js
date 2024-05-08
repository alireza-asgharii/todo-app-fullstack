import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster/>
      </SessionProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

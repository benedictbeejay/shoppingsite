// "use client";

// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { products, collections } from "@wix/stores";
// import Cookies from "js-cookie";
// import React, { Children, ReactNode } from "react";
// import { createContext } from "react";

// const refreshToken = JSON.parse(Cookies.get("refreshTokens") || "{}");

// const wixClient = createClient({
//   modules: {
//     products,
//     // currentCart,
//   },
//   auth: OAuthStrategy({
//     clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//     tokens: {
//       refreshToken,
//       accessToken: { value: "", expiresAt: 0 },
//     },
//   }),
// });

// export type WixClient = typeof wixClient;

// export const WixClientCOntext = createContext<WixClient>(wixClient);

// export const WixClientContextProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   return {
//     // <WixClientContext.Provider value={WixClient}>{children}</WixClientContext.Provider>
//   <WixClientContext.Provider value={wixClient}>
//   {children}
//   </WixClientContext.Provider>
//   };
// };

"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import React, { ReactNode, createContext } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshTokens") ?? "{}");

const wixClient = createClient({
  modules: {
    products,
    collections, // Added if needed
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type WixClient = typeof wixClient;

// Fixed naming of the context
export const WixClientContext = createContext<WixClient>(wixClient);

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};

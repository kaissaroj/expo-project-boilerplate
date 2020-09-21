if (__DEV__) {
  import("./ReactotronConfig")
    .then(() => console.log("Reactotron Configured"))
    .catch((e) => console.log("Reactotron ERROR", e));
} else {
  console.log = () => {};
}
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  UserProvider,
  userState,
  userDispatch,
} from "./src/contexts/UserContext";
import { ErrorBoundary, LoadAssets } from "./src/utils/hoc";
const fonts = {
  // "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
};
const AuthenticationNavigator = React.lazy(() => import("./src/routes/auth"));
const UnAuthenticationNavigator = React.lazy(
  () => import("./src/routes/unauth")
);

const Main = () => {
  const { isAuth } = userState();
  return (
    <>
      {isAuth ? (
        <React.Suspense fallback={<></>}>
          <ErrorBoundary>
            <AuthenticationNavigator />
          </ErrorBoundary>
        </React.Suspense>
      ) : (
        <React.Suspense fallback={<></>}>
          <UnAuthenticationNavigator />
        </React.Suspense>
      )}
    </>
  );
};

export default function App() {
  // SafeAreaProvider:  this may cause ota update crash remove if ota needed later
  return (
    <SafeAreaProvider>
      <UserProvider>
        <LoadAssets {...{ fonts }}>
          <Main />
        </LoadAssets>
      </UserProvider>
    </SafeAreaProvider>
  );
}

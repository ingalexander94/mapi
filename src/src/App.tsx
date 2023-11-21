import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./components/RoutesWithNotFound";
import { privateRoutes, publicRoutes } from "./models";
import { AuthGuard } from "./components/guards";
import { AuthProvider } from "./context/auth";
import { Loading } from "./components/UI";

const Login = lazy(() => import("./pages/Auth/Login/Login"));
const Recovery = lazy(() => import("./pages/Auth/Recovery/Recovery"));
const Forgot = lazy(() => import("./pages/Auth/Forgot/Forgot"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <AuthProvider>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={privateRoutes.PRIVATE} />}
              />
              <Route path={publicRoutes.LOGIN} element={<Login />} />
              <Route path={publicRoutes.RECOVERY} element={<Recovery />} />
              <Route path={publicRoutes.FORGOT} element={<Forgot />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route
                  path={`${privateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </AuthProvider>
      </Suspense>
    </div>
  );
}

export default App;

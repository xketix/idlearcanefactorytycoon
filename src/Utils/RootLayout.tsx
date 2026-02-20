import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoadingScreen from "../views/LoadingScreen";

const RootLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <>

      <div className="min-h-screen flex flex-col">
        <header>
          <Header />
        </header>

        <main className="flex-1 pt-14">
        {isLoading ? <LoadingScreen /> : <Outlet />}
      </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default RootLayout;

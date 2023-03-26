import type { FC, ReactNode } from "react";
import Header from "../header";
import HeadTag from "../headTag";
import classNames from "classnames";
import { inter } from "~/ui/fonts";
import Footer from "../footer";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <HeadTag />
      <div className={classNames(inter.className, "overflow-x-hidden")}>
        <Header />
        <div className="min-h-screen pt-16">{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

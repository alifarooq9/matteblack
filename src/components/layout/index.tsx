import type { FC, ReactNode } from "react";
import Header from "../header";
import HeadTag from "../headTag";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <HeadTag />
      <div className={""}>
        <Header />
        <div className="py-16">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
